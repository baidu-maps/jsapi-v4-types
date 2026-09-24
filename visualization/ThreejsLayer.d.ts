declare namespace BMap {
  /**
   * ThreejsLayer 回调的入参。带齐了 three 的三件套与图层/地图引用，
   * 以后扩展也不必改回调签名
     */
  interface ThreejsRenderContext {
    /** 所属图层 */
    readonly layer: ThreejsLayer;
    /** 所属地图 */
    readonly map: Map;
    /** three 的渲染器。它与底图共用同一个 WebGL 上下文与画布 */
    readonly renderer: any;
    /** three 的场景 */
    readonly scene: any;
    /** three 的相机，矩阵每帧由地图相机驱动 */
    readonly camera: any;
    /** 经纬度 → 图层局部坐标（three 场景里的 x / y） */
    projectToLayer(lngLat: [number, number]): [number, number];
    projectToLayer(lngLat: Array<[number, number]>): Array<[number, number]>;
    /** 图层加入地图起算的秒数，做动画用 */
    getTime(): number;
    /** 一个屏幕像素等于多少个图层局部坐标单位 */
    getUnitsPerPixel(): number;
  }

  /**
   * 着色器编译 / 渲染器创建 / 渲染过程出错时的错误对象
     */
  interface ThreejsLayerError {
    /** 错误类型 */
    type: 'renderer' | 'render';
    /** 错误描述 */
    message: string;
    /** 出错的图层 */
    layer: ThreejsLayer;
  }

  /**
   * ThreejsLayer构造函数options参数
   * @category 配置项
     */
  interface ThreejsLayerOptions {
    /**
     * 传给 THREE.WebGLRenderer 的 alpha
     * @default true
     */
    alpha?: boolean;
    /**
     * 传给 THREE.WebGLRenderer 的 antialias。注意上下文是与底图共用的，
     * 这个值只在 three 侧生效，实际是否多重采样由地图创建上下文时决定
     * @default false
     */
    antialias?: boolean;
    /**
     * 是否每帧自动重绘。three 场景大多需要动画；不需要就别开 —— 地图渲染线程本来会睡
     * @default false
     */
    animation?: boolean;
    /** renderer / scene / camera 就绪时回调 */
    onInit?: (ctx: ThreejsRenderContext) => void;
    /** 每帧绘制前回调 */
    preRender?: (ctx: ThreejsRenderContext) => void;
    /**
     * 每帧绘制回调。**不提供时图层会自动执行 `renderer.render(scene, camera)`**；
     * 提供了就完全由你决定画什么，框架不再自动渲染
     */
    onRender?: (ctx: ThreejsRenderContext) => void;
    /** 每帧绘制后回调 */
    afterRender?: (ctx: ThreejsRenderContext) => void;
    /** 图层销毁时回调，此时 renderer / scene 还没释放 */
    onDestroy?: (ctx: ThreejsRenderContext) => void;
    /** 渲染器创建失败或渲染抛错时回调 */
    onError?: (error: ThreejsLayerError) => void;
    /**
     * 图层参考中心点，决定 three 场景原点对应的地理位置。**强烈建议传** ——
     * 顶点是 float32，绝对墨卡托坐标量级 1e7 会丢精度
     */
    referCenter?: Point;
    /**
     * 是否显示
     * @default true
     */
    visible?: boolean;
    /**
     * 透明度。**本图层不消费这个值** —— three 的材质透明度请在材质上设
     * （`material.transparent` / `material.opacity`）
     * @default 1
     */
    opacity?: number;
    /**
     * 显示层级，小的先画
     * @default 1
     */
    zIndex?: number;
    /**
     * 最小显示缩放等级
     * @default 3
     */
    minZoom?: number;
    /**
     * 最大显示缩放等级
     * @default 21
     */
    maxZoom?: number;
    /**
     * 绘制阶段，图层绘制在该阶段之后（即叠在其上）。
     * 不设表示默认落点：覆盖物之后、3D 楼块之前
     */
    renderStage?: 'building' | 'poi' | null;
  }

  /**
   * three.js 接入图层，用于在地图的 WebGL 上下文中以 three.js 的场景图绘制 3D 内容。
   *
   * 使用方自行引入全局 `THREE`，**支持的最高版本是 r162**。
   * r163 及以上版本的 `WebGLRenderer` 会在创建时直接抛错，此时图层走 `onError`、
   * `getStatus()` 变为 `'error'`，底图不受影响。
   *
   * ### 坐标
   *
   * three 场景与 {@link WebGLCustomLayer} 使用同一套坐标：图层局部坐标，即相对
   * `referCenter` 的百度墨卡托米。z 轴朝上，z = 0 是地面。
   * 把物体立在地面上需要 `mesh.position.z = height / 2`（BoxGeometry 原点在中心）。
   *
   * 用 `projectToLayer([lng, lat])` 换算经纬度到场景 x / y，
   * 或回调里用 `ctx.projectToLayer()`。
   *
   * ### 相机
   *
   * 投影矩阵每帧由地图相机驱动，开发者无需手动同步。
   * 代价：`modelViewMatrix` 不是眼空间矩阵，依赖它的 three 内置光照
   * （Lambert / Phong / Standard 的 `normalMatrix`）会不正确。
   * 需要光照的场景请在 `onRender(ctx)` 里自己接管相机矩阵。
     */
  class ThreejsLayer {
    /**
     * 创建 three.js 图层。需全局 `THREE` 已加载
     * @param options 配置项
     * @example
     * ```typescript
     * const center = new BMap.Point(116.404, 39.915);
     * const layer = new BMap.ThreejsLayer({
     *   referCenter: center,
     *   animation: true,
     *   onInit(ctx) {
     *     const size = 1500;
     *     const mesh = new THREE.Mesh(
     *       new THREE.BoxGeometry(size, size, size),
     *       new THREE.MeshBasicMaterial({color: 0x00ffcc})
     *     );
     *     const xy = ctx.projectToLayer([center.lng, center.lat]);
     *     mesh.position.set(xy[0], xy[1], size / 2);
     *     ctx.scene.add(mesh);
     *   }
     * });
     * map.addLayer(layer);
     * ```
     */
    constructor(options?: ThreejsLayerOptions);

    /** @hidden */
    readonly isWebGLLayer: true;

    /**
     * 把对象加入场景。GL 未就绪时先排队，就绪后自动补进去
     * @group 场景操作
     */
    add(object: any): ThreejsLayer;
    /**
     * 从场景移除对象。注意与 `remove()`（移除整个图层）不是一回事
     * @group 场景操作
     */
    removeObject(object: any): ThreejsLayer;
    /**
     * 返回 three 场景
     * @group 场景操作
     */
    getScene(): any;
    /**
     * 返回 three 相机
     * @group 场景操作
     */
    getCamera(): any;
    /**
     * 返回 three 渲染器
     * @group 场景操作
     */
    getRenderer(): any;

    /** @group 接入与移除 */
    addTo(map: Map): ThreejsLayer;
    /** @group 接入与移除 */
    remove(): ThreejsLayer;
    /** @group 接入与移除 */
    getMap(): Map | null;

    /** @group 状态查询 */
    getStatus(): 'pending' | 'ready' | 'error';
    /** @group 状态查询 */
    getTime(): number;
    /** @group 状态查询 */
    getMVPMatrix(): Float64Array | null;

    /**
     * 经纬度 → 图层局部坐标（three 场景里的 x / y）
     * @group 坐标换算
     */
    projectToLayer(lngLat: [number, number]): [number, number];
    projectToLayer(lngLat: Array<[number, number]>): Array<[number, number]>;

    /** @group 动画 */
    startAnimation(): ThreejsLayer;
    /** @group 动画 */
    stopAnimation(): ThreejsLayer;
    /** @group 动画 */
    isAnimating(): boolean;
    /** @group 动画 */
    triggerRepaint(): void;

    /** @group 显示属性 */
    setVisible(visible: boolean): void;
    /** @group 显示属性 */
    getVisible(): boolean;
    /** @group 显示属性 */
    setOpacity(opacity: number): void;
    /** @group 显示属性 */
    getOpacity(): number;
    /** @group 显示属性 */
    setZIndex(zIndex: number): void;
    /** @group 显示属性 */
    getZIndex(): number;
    /** @group 显示属性 */
    setRenderStage(stage: 'building' | 'poi' | null): void;
    /** @group 显示属性 */
    getRenderStage(): 'building' | 'poi' | null;
    /** @group 显示属性 */
    setRefCenter(center: Point): void;
    /** @group 显示属性 */
    getRefCenter(): Point | null;
  }

}

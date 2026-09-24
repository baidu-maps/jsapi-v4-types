declare namespace BMap {
  /**
   * Deck 创建失败或渲染抛错时的错误对象
     */
  interface DeckglLayerError {
    /** 错误类型 */
    type: 'deck' | 'render';
    /** 错误描述 */
    message: string;
    /** 出错的图层 */
    layer: DeckglLayer;
  }

  /**
   * DeckglLayer构造函数options参数。
   *
   * **除下列字段外，其余键会原样传给 `deck.Deck` 作为 props**，
   * 所以 deck 支持的 prop（`getTooltip`、`parameters`、`effects` …）都可以直接写在这里。
   * 但以下几个由图层接管，传了会被覆盖：
   * `gl`、`width`、`height`、`controller`、`useDevicePixels`、`_customRender`、`viewState`。
   * @category 配置项
     */
  interface DeckglLayerOptions {
    /** deck.gl 图层数组 */
    layers?: any[];
    /**
     * 是否每帧自动重绘。deck 自身的数据/动画就绪会通过内部机制唤起重绘，
     * 只有需要持续动画时才开
     * @default false
     */
    animation?: boolean;
    /** Deck 实例创建完成时回调 */
    onInit?: (deck: any, layer: DeckglLayer) => void;
    /** 图层销毁时回调，此时 Deck 还没 finalize */
    onDestroy?: (deck: any, layer: DeckglLayer) => void;
    /**
     * Deck 创建失败、deck.gl 自身报错或渲染抛错时回调。
     *
     * deck.gl 自己的 `onError` 不会被透传给 `deck.Deck` —— 它抛出的原生 Error 会被
     * 归一化成 {@link DeckglLayerError} 再交给这里，避免同一个回调收到两种参数形状。
     *
     * 单帧渲染抛错是可恢复的：只累计次数、连续失败 30 帧才把图层置为 `'error'` 并停止绘制，
     * 控制台只报第一次
     */
    onError?: (error: DeckglLayerError) => void;
    /**
     * 图层参考中心点。deck 用的是经纬度，本字段只影响与其他可视化图层一致的记账，
     * 对 deck 的绘制没有直接影响
     */
    referCenter?: Point;
    /**
     * 是否显示
     * @default true
     */
    visible?: boolean;
    /**
     * 透明度。**本图层不消费这个值** —— deck 的透明度请在各 deck 图层的
     * `getFillColor` / `opacity` 等 prop 上设
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
    /** 其余 deck props 原样透传 */
    [prop: string]: any;
  }

  /**
   * deck.gl 接入图层，把 deck.gl 的图层画进地图的 WebGL 上下文。
   *
   * 使用方自行引入全局 `deck`（`@deck.gl/core` 或 dist 全包），**支持的最高版本是 8.9.x**。
   * 9.x 会在初始化时报错，此时图层走 `onError`、`getStatus()` 变为 `'error'`，底图不受影响。
   *
   * ### 相机同步
   *
   * deck 用的是标准 web-mercator 的 `MapView`，图层每帧从地图相机同步 viewState：
   * 中心点、层级、`pitch`（来自 `map.getTilt()`）、`bearing`（`-map.getHeading()`，方向相反）。
   *
   * 层级按 deck 的定义精确换算 —— deck 的世界宽度是 `512 × 2^zoom` 像素，
   * 图层用 `log2(map.worldSize() / 512)` 得到，不是经验常数，地图瓦片口径变了也不会错位。
   *
   * ### 交互
   *
   * `controller` 被强制关掉：平移缩放由地图接管，deck 只负责绘制。
   * 需要 deck 的拾取能力时用 `getDeck().pickObject(...)` 自行调用。
     */
  class DeckglLayer {
    /**
     * 创建 deck.gl 图层。需全局 `deck` 已加载
     * @param options 配置项，`layers` 之外的键原样透传给 `deck.Deck`
     * @example
     * ```typescript
     * const layer = new BMap.DeckglLayer({
     *   layers: [
     *     new deck.ScatterplotLayer({
     *       id: 'scatter',
     *       data: [{position: [116.404, 39.915]}],
     *       getPosition: (d: any) => d.position,
     *       getFillColor: [255, 140, 0, 200],
     *       getRadius: 60,
     *       radiusMinPixels: 4
     *     })
     *   ]
     * });
     * map.addLayer(layer);
     *
     * // 换数据 / 换图层
     * layer.setProps({layers: [ /* 新的 deck 图层 *\/ ]});
     * ```
     */
    constructor(options?: DeckglLayerOptions);

    /** @hidden */
    readonly isWebGLLayer: true;

    /**
     * 更新 deck props，最常用的是 `layers`。会与已有 props 浅合并
     * @group deck 操作
     */
    setProps(props: Record<string, any>): DeckglLayer;
    /**
     * 返回内部的 `Deck` 实例，需要拾取、导出等 deck 原生能力时用
     * @group deck 操作
     */
    getDeck(): any;

    /** @group 接入与移除 */
    addTo(map: Map): DeckglLayer;
    /** @group 接入与移除 */
    remove(): DeckglLayer;
    /** @group 接入与移除 */
    getMap(): Map | null;

    /** @group 状态查询 */
    getStatus(): 'pending' | 'ready' | 'error';
    /** @group 状态查询 */
    getTime(): number;
    /** @group 状态查询 */
    getMVPMatrix(): Float64Array | null;

    /** @group 动画 */
    startAnimation(): DeckglLayer;
    /** @group 动画 */
    stopAnimation(): DeckglLayer;
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

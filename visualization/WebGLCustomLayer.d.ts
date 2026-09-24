declare namespace BMap {
  /**
   * 纹理源：图片地址、Image、Canvas 或 ImageData
   * @category 配置项
     */
  type WebGLCustomLayerTextureSource = string | HTMLImageElement | HTMLCanvasElement | ImageData;

  /**
   * 纹理的采样与上传选项
   * @category 配置项
     */
  interface WebGLCustomLayerTextureOptions {
    /**
     * 环绕方式。WebGL1 下 `repeat` / `mirror` 要求 2 的整次幂尺寸，否则会告警并缩放上传
     * @default 'clamp'
     */
    wrap?: 'clamp' | 'repeat' | 'mirror';
    /**
     * 采样方式
     * @default 'linear'
     */
    filter?: 'linear' | 'nearest';
    /**
     * 是否上下翻转
     * @default true
     */
    flipY?: boolean;
    /**
     * 是否预乘 alpha。注意开启后会影响后续所有纹理上传（`pixelStorei` 是全局状态）
     * @default false
     */
    premultiplyAlpha?: boolean;
    /**
     * 是否生成 mipmap
     * @default false
     */
    mipmap?: boolean;
  }

  /**
   * 带纹理源的完整纹理描述。异步加载、纹理单元分配、WebGL1 下非 2 次幂尺寸的处理
   * 都由图层负责
   * @category 配置项
     */
  interface WebGLCustomLayerTexture extends WebGLCustomLayerTextureOptions {
    /** 纹理源 */
    source: WebGLCustomLayerTextureSource;
  }

  /**
   * 纹理集合，键是着色器里的 sampler2D 名。值可以直接给纹理源，也可以给完整描述
   * @category 配置项
     */
  interface WebGLCustomLayerTextures {
    [name: string]: WebGLCustomLayerTextureSource | WebGLCustomLayerTexture;
  }

  /**
   * 顶点属性描述
   * @category 配置项
     */
  interface WebGLCustomLayerAttribute {
    /** 顶点数据，支持 TypedArray、数字数组，以及 `[[x, y], ...]` 这种按顶点分组的写法 */
    data: ArrayLike<number> | number[][];
    /** 传 `'lnglat'` 时把 `[[lng, lat], ...]` 自动投影成图层局部坐标，`size` 也不必再写 */
    type?: 'lnglat';
    /** 分量数，省略时按着色器里的 vec2 / vec3 声明推断 */
    size?: number;
    /** 数据类型，省略时按 data 的 TypedArray 类型推断 */
    dataType?: 'FLOAT' | 'UNSIGNED_BYTE' | 'BYTE' | 'UNSIGNED_SHORT' | 'SHORT';
    /**
     * 是否把整型归一化到 0~1
     * @default false
     */
    normalized?: boolean;
    /** 跨度，单位字节 */
    stride?: number;
    /** 起始偏移，单位字节 */
    offset?: number;
  }

  /**
   * 顶点属性的入参形态：给完整描述，或者直接给一个数组（等价于 `{data: 那个数组}`）
   * @category 配置项
     */
  type WebGLCustomLayerAttributeInput = WebGLCustomLayerAttribute | ArrayLike<number> | number[][];

  /**
   * 顶点属性集合，键是着色器里的 attribute 名
   * @category 配置项
     */
  interface WebGLCustomLayerAttributes {
    [name: string]: WebGLCustomLayerAttributeInput;
  }

  /**
   * uniform 的取值。类型按着色器里的 GLSL 声明自动分派，
   * 不用自己区分 uniform1f / uniform3fv / uniformMatrix4fv
   * @category 配置项
     */
  type WebGLCustomLayerUniformValue = number | boolean | ArrayLike<number>;

  /**
   * uniform 集合，键是着色器里的 uniform 名（数组 uniform 写裸名，不要带 `[0]`）
   * @category 配置项
     */
  interface WebGLCustomLayerUniforms {
    [name: string]: WebGLCustomLayerUniformValue;
  }

  /**
   * 交错顶点缓冲描述：一个 buffer 里放多个属性，比多个独立 buffer 更省带宽
   * @category 配置项
     */
  interface WebGLCustomLayerVertices {
    /** 交错排布的顶点数据 */
    data: ArrayLike<number> | number[][];
    /** 单个顶点占用的字节数 */
    stride: number;
    /** 各属性在 stride 内的位置 */
    members: WebGLCustomLayerVerticesMember[];
  }

  /**
   * 交错顶点缓冲里的一个属性
   * @category 配置项
     */
  interface WebGLCustomLayerVerticesMember {
    /** attribute 名 */
    name: string;
    /** 分量数，省略时按着色器声明推断 */
    size?: number;
    /** 在 stride 内的字节偏移 */
    offset?: number;
    /** 数据类型 */
    dataType?: 'FLOAT' | 'UNSIGNED_BYTE' | 'BYTE' | 'UNSIGNED_SHORT' | 'SHORT';
    /** 是否归一化 */
    normalized?: boolean;
  }

  /**
   * 绘制指令
   * @category 配置项
     */
  interface WebGLCustomLayerDraw {
    /**
     * 图元类型
     * @default 'TRIANGLES'
     */
    mode?: 'POINTS' | 'LINES' | 'LINE_LOOP' | 'LINE_STRIP'
    | 'TRIANGLES' | 'TRIANGLE_STRIP' | 'TRIANGLE_FAN';
    /** 顶点数（设了 indices 则是索引数），省略时按属性数据自动推断 */
    count?: number;
    /** drawArrays 的起始顶点 */
    first?: number;
    /** drawElements 的起始索引 */
    offset?: number;
  }

  /**
   * 自定义混合因子。值写 gl 常量名字符串（如 `'SRC_ALPHA'`）或数字
   * @category 配置项
     */
  interface WebGLCustomLayerBlendFunc {
    /** 源 RGB 因子 */
    src: string | number;
    /** 目标 RGB 因子 */
    dst: string | number;
    /** 源 alpha 因子，省略按 `'ONE'` */
    srcAlpha?: string | number;
    /** 目标 alpha 因子，省略按 `'ONE_MINUS_SRC_ALPHA'` */
    dstAlpha?: string | number;
  }

  /**
   * 混合模式。
   *
   * - `'normal'` `SRC_ALPHA / ONE_MINUS_SRC_ALPHA`，标准 alpha over
   * - `'additive'` `SRC_ALPHA / ONE`，颜色相加。**只在深色背景下有意义**，默认底图接近纯白，
   *   再加任何值都饱和成全白。深色背景上它与 `'normal'` 只差 `dst × srcAlpha` 一项，
   *   单个不重叠的图元几乎看不出差别，**要看出效果得让图元互相重叠**（重叠处会累积过曝）
   * - `'screen'` `ONE_MINUS_DST_COLOR / ONE`，滤色，目标越接近白影响越小，浅色底图也能提亮。
   *   注意 RGB 因子不含 alpha，想让 alpha 生效要在片元里自己乘（输出 `rgb * a`）
   * - `'premultiplied'` `ONE / ONE_MINUS_SRC_ALPHA`，片元已自带预乘 alpha 时用
   * - `'none'` 关掉混合，片元直接覆盖
   * @category 配置项
     */
  type WebGLCustomLayerBlend = 'none' | 'normal' | 'additive' | 'screen'
    | 'premultiplied' | WebGLCustomLayerBlendFunc;

  /**
   * 渲染状态。这是唯一能改深度 / 混合 / 剔除的入口 —— 地图对这些全局 GL 状态做了缓存，
   * 自己调 `gl.enable` / `gl.blendFunc` 会让缓存与真实状态失配、底图渲染出错，
   * 所以只能声明式地表达，由图层统一施加并在画完精确还原
   * @category 配置项
     */
  interface WebGLCustomLayerRenderState {
    /**
     * 是否开启深度测试。默认关闭，可视化图层靠绘制顺序叠加。
     * 开启后会与 3D 楼块争深度，遮挡关系可能随缩放 / 倾斜不稳定，只在自绘 3D 几何时开
     * @default false
     */
    depthTest?: boolean;
    /**
     * 是否写入深度缓冲。默认不写，避免污染后续文字 / marker 通道
     * @default false
     */
    depthWrite?: boolean;
    /** 深度比较函数，省略时不改动 */
    depthFunc?: 'never' | 'less' | 'equal' | 'lequal'
    | 'greater' | 'notequal' | 'gequal' | 'always';
    /**
     * 混合方式
     * @default 'normal'
     */
    blend?: WebGLCustomLayerBlend;
    /**
     * 面剔除
     * @default 'none'
     */
    cullFace?: 'none' | 'back' | 'front';
    /** 正面绕序，省略时不改动 */
    frontFace?: 'ccw' | 'cw';
  }

  /**
   * 着色器编译 / 纹理加载失败时的错误对象
     */
  interface WebGLCustomLayerError {
    /** 错误类型 */
    type: 'compile' | 'link' | 'texture';
    /** 错误描述。编译失败时是驱动的 infoLog */
    message: string;
    /** 出错的 GLSL 源码或图片地址 */
    source: string;
    /** 出错的图层 */
    layer: WebGLCustomLayer;
  }

  /**
   * 帧内绘制上下文。**只在 `onReady` / `onRender` / `onDestroy` 回调里作为入参拿到**
   * （也可以用 `layer.getContext()` 取到同一个对象）。
   *
   * 它与 {@link WebGLCustomLayer} 有一批**同名方法**，区别只在生效时机：
   *
   * | | 图层方法（`layer.xxx`） | 上下文方法（`ctx.xxx`） |
   * | --- | --- | --- |
   * | 何时可调 | 任何时候 | 只在回调内 |
   * | 生效时机 | 记账并触发重绘，下一帧生效 | 当场下发 GL 调用 |
   * | 适用场景 | 外部事件驱动的更新 | 每帧都要算的几何 / 多次绘制 |
   * | `draw()` | 没有 | 有，且只有它有 |
   *
   * 也就是说：从按钮点击、请求回调里改数据用 `layer.setXxx()`；
   * 在 `onRender` 里逐帧算几何、想画多遍，用 `ctx.setXxx()` + `ctx.draw()`。
     */
  interface CustomRenderContext {
    /**
     * 白名单 GL 门面。资源类调用（buffer / texture / shader / uniform / draw）直通，
     * 会改写地图共享状态的调用（`enable` / `blendFunc` / `depthMask` / `clear` /
     * `viewport` / `bindFramebuffer` / `pixelStorei` 等）会告警一次后忽略。
     * 需要原生上下文请在构造时传 `unsafeGL: true`
     * @group 逃生口
     */
    readonly gl: WebGLRenderingContext;
    /**
     * 所属图层
     * @group 逃生口
     */
    readonly layer: WebGLCustomLayer;
    /**
     * 所属地图
     * @group 逃生口
     */
    readonly map: Map;
    /**
     * 编译好的 program 反射信息，写 `gl` 逃生路径时用
     * @group 逃生口
     */
    getProgramInfo(): object | null;

    /**
     * 设置一个 uniform，当场生效
     * @group 数据（当场生效）
     */
    setUniform(name: string, value: WebGLCustomLayerUniformValue): CustomRenderContext;
    /**
     * 批量设置 uniform，当场生效
     * @group 数据（当场生效）
     */
    setUniforms(uniforms: WebGLCustomLayerUniforms): CustomRenderContext;
    /**
     * 设置一个顶点属性，当场重建 buffer 并绑定指针
     * @group 数据（当场生效）
     */
    setAttribute(name: string, spec: WebGLCustomLayerAttributeInput): CustomRenderContext;
    /**
     * 批量设置顶点属性
     * @group 数据（当场生效）
     */
    setAttributes(attributes: WebGLCustomLayerAttributes): CustomRenderContext;
    /**
     * 设置交错顶点缓冲
     * @group 数据（当场生效）
     */
    setVertices(spec: WebGLCustomLayerVertices): CustomRenderContext;
    /**
     * 设置索引数据。普通数组按 Uint16Array 处理
     * @group 数据（当场生效）
     */
    setIndices(data: ArrayLike<number>): CustomRenderContext;
    /**
     * 设置纹理，传 null 清除
     * @group 数据（当场生效）
     */
    setTexture(
      name: string,
      source: WebGLCustomLayerTextureSource | null,
      options?: WebGLCustomLayerTextureOptions
    ): CustomRenderContext;
    /**
     * 批量设置纹理
     * @group 数据（当场生效）
     */
    setTextures(textures: WebGLCustomLayerTextures): CustomRenderContext;
    /**
     * 设置渲染状态，转发到图层
     * @group 数据（当场生效）
     */
    setRenderState(state: WebGLCustomLayerRenderState): CustomRenderContext;
    /**
     * 设置默认绘制指令
     * @group 数据（当场生效）
     */
    setDraw(spec: WebGLCustomLayerDraw): CustomRenderContext;

    /**
     * 提交一次绘制。设过 indices 就自动走 drawElements。
     * **只有上下文有这个方法**，图层上没有
     * @param options 省略则用构造参数里的 draw
     * @group 绘制
     */
    draw(options?: WebGLCustomLayerDraw): CustomRenderContext;
    /**
     * 显式走索引绘制，语义比 draw 更清楚
     * @group 绘制
     */
    drawIndexed(options?: WebGLCustomLayerDraw): CustomRenderContext;

    /**
     * 当前帧的 mvp 矩阵（图层局部坐标 → 裁剪空间）。
     * 返回复用的 Float32Array，不要跨帧缓存这个引用
     * @group 相机与坐标
     */
    getMVPMatrix(): Float32Array;
    /**
     * 经纬度 → 图层局部坐标
     * @group 相机与坐标
     */
    projectToLayer(lngLat: [number, number]): [number, number];
    projectToLayer(lngLat: Array<[number, number]>): Array<[number, number]>;
    /**
     * 图层局部坐标 → 经纬度
     * @group 相机与坐标
     */
    unprojectFromLayer(xy: [number, number]): [number, number];
    unprojectFromLayer(xy: Array<[number, number]>): Array<[number, number]>;
    /**
     * 图层加入地图起算的秒数，做动画用
     * @group 相机与坐标
     */
    getTime(): number;
    /**
     * 一个屏幕像素等于多少个图层局部坐标单位。
     * 想让某个尺寸在屏幕上恒定 N 像素就用 `N * getUnitsPerPixel()`
     * @group 相机与坐标
     */
    getUnitsPerPixel(): number;
    /**
     * 画布尺寸，CSS 像素
     * @group 相机与坐标
     */
    getSize(): { width: number; height: number };
    /**
     * 设备像素比
     * @group 相机与坐标
     */
    getPixelRatio(): number;
    /**
     * 当前缩放级别
     * @group 相机与坐标
     */
    getZoom(): number;
    /**
     * 相机朝向，度
     * @group 相机与坐标
     */
    getHeading(): number;
    /**
     * 相机倾斜角，度
     * @group 相机与坐标
     */
    getTilt(): number;
    /**
     * 地图中心点
     * @group 相机与坐标
     */
    getCenter(): Point;

  }

  /**
   * WebGLCustomLayer构造函数options参数
   * @category 配置项
     */
  interface WebGLCustomLayerOptions {
    /** 顶点着色器源码，必填 */
    vertexShader: string;
    /** 片元着色器源码，必填 */
    fragmentShader: string;
    /** 顶点属性 */
    attributes?: WebGLCustomLayerAttributes;
    /** 交错顶点缓冲，与 attributes 可同时使用 */
    vertices?: WebGLCustomLayerVertices;
    /** 索引数据，给了就走 drawElements。普通数组按 Uint16Array 处理 */
    indices?: ArrayLike<number>;
    /** uniform 值 */
    uniforms?: WebGLCustomLayerUniforms;
    /** 纹理 */
    textures?: WebGLCustomLayerTextures;
    /** 绘制指令。没给 onRender 时图层按它自动画一次 */
    draw?: WebGLCustomLayerDraw;
    /** 渲染状态 */
    renderState?: WebGLCustomLayerRenderState;
    /**
     * 是否每帧自动重绘并推进 `u_time`。不需要动画就别开 —— 地图渲染线程本来会睡
     * @default false
     */
    animation?: boolean;
    /**
     * 是否把原生 WebGL 上下文交给回调。开启后 `ctx.gl` 不再是白名单门面，
     * 图层会在回调前后做完整的状态保存 / 恢复，但视口、framebuffer、`pixelStorei`
     * 这类状态无法穷举，出现底图渲染异常请先关掉
     * @default false
     */
    unsafeGL?: boolean;
    /** 着色器编译通过、声明式资源就绪时回调 */
    onReady?: (ctx: CustomRenderContext) => void;
    /** 每帧绘制回调。不给则按 draw 描述自动画一次 */
    onRender?: (ctx: CustomRenderContext) => void;
    /** 图层销毁时回调 */
    onDestroy?: (ctx: CustomRenderContext) => void;
    /** 着色器编译失败、纹理加载失败时回调 */
    onError?: (error: WebGLCustomLayerError) => void;

    /**
     * 图层参考中心点，决定图层局部坐标的原点。**强烈建议传** ——
     * 顶点是 float32，绝对墨卡托坐标量级 1e7 会丢精度
     */
    referCenter?: Point;
    /**
     * 是否显示
     * @default true
     */
    visible?: boolean;
    /**
     * 透明度，取值范围 0 - 1。着色器里声明 `uniform float u_opacity` 即可消费
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
   * 自定义着色器图层，用于在地图的 WebGL 上下文中以自定义 GLSL 着色器绘制内容。
   *
   * 当内置的可视化图层（PolylineLayer、PolygonLayer、Heatmap 等）无法表达所需效果时
   * ——例如粒子系统、流场、自定义后处理——可使用本图层直接接管绘制：传入顶点与片元着色器
   * 源码及顶点数据，图层负责着色器编译、GL 资源管理与逐帧调度。
   *
   * ### 声明式与命令式
   *
   * 几何固定的场景，将数据直接写在构造参数中即可，无需提供 `onRender`，
   * 图层会按 `draw` 描述自动完成绘制。
   *
   * 几何逐帧变化，或需要在一帧内多次提交绘制的场景，建议不在构造参数中声明数据，
   * 改由 `onRender` 回调中的绘制上下文（{@link CustomRenderContext}）逐步组织。
   * 两种方式等价，也可混用。
   *
   * ### 坐标
   *
   * 顶点使用图层局部坐标，即相对 `referCenter` 的百度墨卡托米。顶点属性声明
   * `type: 'lnglat'` 时，图层会自动完成经纬度到局部坐标的投影；也可调用
   * `projectToLayer([lng, lat])` 自行换算，该方法不要求图层已加入地图。
   *
   * z 轴朝上，与 x、y 使用同一单位，高度值直接以米为单位给出。
   *
   * ### 渲染状态
   *
   * 深度测试、混合模式、面剔除等状态请通过 `renderState` 声明。地图对这些全局 GL 状态
   * 做了缓存以减少冗余调用，若绕过 `renderState` 直接调用 `gl.enable()`、`gl.blendFunc()`
   * 等接口，缓存将与真实状态不一致，可能导致底图的文字、图标、marker 出现难以定位的渲染异常。
   *
   * ### 内置 uniform
   *
   * 以下 uniform 在着色器中声明后由图层逐帧自动赋值，未声明则不产生任何开销：
   *
   * `u_mvpMatrix`(mat4)、`u_opacity`、`u_zoom`、`u_time`、`u_resolution`(vec2)、
   * `u_pixelRatio`、`u_unitsPerPixel`、`u_center`(vec2)、`u_heading`、`u_tilt`
     */
  class WebGLCustomLayer {
    /**
     * 创建自定义着色器图层
     * @param options 配置项，`vertexShader` 与 `fragmentShader` 必填
     * @example
     * ```typescript
     * // 声明式：数据全在构造参数里，不需要 onRender
     * const vs = `
     *   attribute vec2 a_pos;
     *   uniform mat4 u_mvpMatrix;
     *   uniform float u_size;
     *   uniform float u_pixelRatio;
     *   void main() {
     *     gl_Position = u_mvpMatrix * vec4(a_pos, 0.0, 1.0);
     *     gl_PointSize = u_size * u_pixelRatio;
     *   }`;
     * const fs = `
     *   precision mediump float;
     *   uniform vec4 u_color;
     *   uniform float u_opacity;
     *   void main() {
     *     gl_FragColor = vec4(u_color.rgb, u_color.a * u_opacity);
     *   }`;
     * const layer = new BMap.WebGLCustomLayer({
     *   referCenter: new BMap.Point(116.404, 39.915),
     *   vertexShader: vs,
     *   fragmentShader: fs,
     *   attributes: {
     *     a_pos: {data: [[116.38, 39.9], [116.42, 39.92]], type: 'lnglat'}
     *   },
     *   uniforms: {u_color: [1, 0.2, 0.35, 1], u_size: 24},
     *   draw: {mode: 'POINTS'}
     * });
     * map.addLayer(layer);
     * ```
     * @example
     * ```typescript
     * // 命令式：构造参数只给着色器，几何每帧在 onRender 里算
     * const layer = new BMap.WebGLCustomLayer({
     *   referCenter: center,
     *   vertexShader: vs,
     *   fragmentShader: fs,
     *   animation: true,
     *   onRender(ctx) {
     *     // 半径在屏幕上恒定 80px
     *     const r = 80 * ctx.getUnitsPerPixel();
     *     const t = ctx.getTime();
     *     const pos: number[] = [];
     *     for (let i = 0; i < 12; i++) {
     *       const a = t + (i / 12) * Math.PI * 2;
     *       pos.push(Math.cos(a) * r, Math.sin(a) * r);
     *     }
     *     ctx.setAttribute('a_pos', {data: new Float32Array(pos), size: 2});
     *     ctx.draw({mode: 'POINTS', count: 12});
     *   }
     * });
     * ```
     */
    constructor(options: WebGLCustomLayerOptions);

    /**
     * 图层家族标志位，运行时真实存在于原型上，`Map.addLayer()` 依据它分发图层
     * @hidden
     */
    readonly isWebGLLayer: true;

    /**
     * 加入地图，等价 `map.addLayer(layer)`
     * @group 接入与移除
     */
    addTo(map: Map): WebGLCustomLayer;
    /**
     * 从地图移除，等价 `map.removeLayer(layer)`
     * @group 接入与移除
     */
    remove(): WebGLCustomLayer;
    /**
     * 返回所属地图，未加入返回 null
     * @group 接入与移除
     */
    getMap(): Map | null;

    /**
     * 批量设置 uniform。GL 尚未就绪时先记录，就绪后统一生效
     * @group 数据与样式
     */
    setUniforms(uniforms: WebGLCustomLayerUniforms): WebGLCustomLayer;
    /**
     * 设置单个 uniform
     * @group 数据与样式
     */
    setUniform(name: string, value: WebGLCustomLayerUniformValue): WebGLCustomLayer;
    /**
     * 批量设置顶点属性
     * @group 数据与样式
     */
    setAttributes(attributes: WebGLCustomLayerAttributes): WebGLCustomLayer;
    /**
     * 设置单个顶点属性
     * @group 数据与样式
     */
    setAttribute(name: string, spec: WebGLCustomLayerAttributeInput): WebGLCustomLayer;
    /**
     * 设置交错顶点缓冲
     * @group 数据与样式
     */
    setVertices(spec: WebGLCustomLayerVertices): WebGLCustomLayer;
    /**
     * 设置索引数据，传空清除
     * @group 数据与样式
     */
    setIndices(data: ArrayLike<number>): WebGLCustomLayer;

    /**
     * 批量设置纹理
     * @group 数据与样式
     */
    setTextures(textures: WebGLCustomLayerTextures): WebGLCustomLayer;
    /**
     * 设置单个纹理
     * @group 数据与样式
     */
    setTexture(
      name: string,
      source: WebGLCustomLayerTextureSource | null,
      options?: WebGLCustomLayerTextureOptions
    ): WebGLCustomLayer;
    /**
     * 设置默认绘制指令，未提供 `onRender` 时图层按它自动绘制
     * @group 数据与样式
     */
    setDraw(spec: WebGLCustomLayerDraw): WebGLCustomLayer;
    /**
     * 设置渲染状态。唯一能改深度 / 混合 / 剔除的入口
     * @example
     * ```typescript
     * // 浅色底图上提亮用 screen；additive 会因底图接近纯白而饱和成全白
     * layer.setRenderState({blend: 'screen'});
     * ```
     * @group 数据与样式
     */
    setRenderState(state: WebGLCustomLayerRenderState): WebGLCustomLayer;
    /**
     * 返回当前渲染状态
     * @group 数据与样式
     */
    getRenderState(): WebGLCustomLayerRenderState;
    /**
     * 换着色器：重新编译、重建 VAO，已有的属性 / uniform / 纹理原样重放
     * @group 数据与样式
     */
    setShaders(vertexShader: string, fragmentShader: string): WebGLCustomLayer;

    /**
     * 开启逐帧重绘，`u_time` 随之推进
     * @group 动画
     */
    startAnimation(): WebGLCustomLayer;
    /**
     * 停止逐帧重绘
     * @group 动画
     */
    stopAnimation(): WebGLCustomLayer;
    /**
     * 是否正在逐帧重绘
     * @group 动画
     */
    isAnimating(): boolean;
    /**
     * 主动触发地图重绘一帧
     * @group 动画
     */
    triggerRepaint(): void;

    /**
     * 着色器与资源的就绪状态
     * @group 状态查询
     */
    getStatus(): 'pending' | 'ready' | 'error';
    /**
     * 图层加入地图起算的秒数
     * @group 状态查询
     */
    getTime(): number;
    /**
     * 返回图层的绘制上下文，与回调入参是同一个对象。
     * 其绘制类方法仅在 `onReady` / `onRender` / `onDestroy` 回调期间有效
     * @group 状态查询
     */
    getContext(): CustomRenderContext;
    /**
     * 当前帧的 mvp 矩阵（图层局部坐标 → 裁剪空间）。
     * 返回复用的对象，不要跨帧缓存这个引用
     * @group 状态查询
     */
    getMVPMatrix(): Float64Array | null;

    /**
     * 经纬度 → 图层局部坐标（相对 `referCenter` 的百度墨卡托米）。
     * 不依赖是否已加入地图，可以在建图层之前先把顶点算好
     * @group 坐标换算
     */
    projectToLayer(lngLat: [number, number]): [number, number];
    projectToLayer(lngLat: Array<[number, number]>): Array<[number, number]>;
    /**
     * 图层局部坐标 → 经纬度
     * @group 坐标换算
     */
    unprojectFromLayer(xy: [number, number]): [number, number];
    unprojectFromLayer(xy: Array<[number, number]>): Array<[number, number]>;

    /**
     * 设置显隐
     * @group 显示属性
     */
    setVisible(visible: boolean): void;
    /**
     * 返回显隐状态
     * @group 显示属性
     */
    getVisible(): boolean;
    /**
     * 设置图层透明度，着色器里声明 `u_opacity` 才会生效
     * @group 显示属性
     */
    setOpacity(opacity: number): void;
    /**
     * 返回图层透明度
     * @group 显示属性
     */
    getOpacity(): number;

    /**
     * 设置显示层级，小的先画
     * @group 显示属性
     */
    setZIndex(zIndex: number): void;
    /**
     * 返回显示层级
     * @group 显示属性
     */
    getZIndex(): number;
    /**
     * 设置绘制阶段，传 null 恢复默认落点
     * @group 显示属性
     */
    setRenderStage(stage: 'building' | 'poi' | null): void;
    /**
     * 返回绘制阶段
     * @group 显示属性
     */
    getRenderStage(): 'building' | 'poi' | null;
    /**
     * 设置参考中心点，`type: 'lnglat'` 的属性会按新原点自动重投影
     * @group 显示属性
     */
    setRefCenter(center: Point): void;
    /**
     * 返回参考中心点
     * @group 显示属性
     */
    getRefCenter(): Point | null;

  }

}

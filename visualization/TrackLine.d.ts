declare namespace BMap {
  /**
   * 车辆图标配置（`movePoint` 对象形态）
     */
  interface TrackLineMovePointOptions {
    /**
     * `'ground'` 贴地（随地图旋转缩放）/ `'marker'` 屏幕固定
     * @default 'ground'
     */
    type?: 'ground' | 'marker';
    /** 图标图片地址 */
    url?: string;
    /**
     * 尺寸 [宽, 高]（px）
     * @default [16, 32]
     */
    size?: [number, number];
    /**
     * 锚点，ground 模式为半宽半高的比例偏移
     * @default [0, 0]
     */
    anchor?: [number, number];
    /**
     * 像素偏移 [x, y]
     * @default [0, 0]
     */
    offset?: [number, number];
    /**
     * 缩放（仅 ground）
     * @default 1
     */
    scale?: number;
    /**
     * scale 基准层级（仅 ground）
     * @default 18
     */
    level?: number;
    /**
     * 随缩放保持屏幕尺寸不变（仅 ground）
     * @default true
     */
    adjustSize?: boolean;
    /**
     * 按倾角把车头方位角换算成屏幕角（仅 marker）
     * @default true
     */
    tiltCorrect?: boolean;
    /**
     * 图标素材朝向不是正北时的角度补偿（度）
     * @default 0
     */
    rotationOffset?: number;
  }

  /**
   * 自动跟随视野配置
     */
  interface TrackLineFollowOptions {
    /**
     * 车辆在屏幕上的锚点，相对地图中心的像素偏移 [x, y]（x 右正、y 上正）
     * @default [0, 0]
     */
    position?: [number, number];
    /**
     * 车头在屏幕上的固定朝向（度，0 朝上，顺时针为正）
     * @default 0
     */
    lookAt?: number;
    /**
     * `true` 旋转地图让车头恒指向 `lookAt`；`false` 只跟随位置、不转地图
     * @default true
     */
    fixedLookAt?: boolean;
    /**
     * 旋转缓动时长（ms），0 表示立即对齐
     * @default 500
     */
    rotationDuration?: number;
    /**
     * 车头与地图朝向夹角小于该值（度）时不旋转，抑制静止抖动
     * @default 5
     */
    minRotation?: number;
    /**
     * 用户手势后暂停跟随的时长（ms），0 表示不暂停
     * @default 2000
     */
    idleTimeout?: number;
  }

  /**
   * TrackLine `statuschange` 事件的 `value`
     */
  interface TrackLineStatusValue {
    /** 状态码，见 {@link TrackLine.Status} */
    status: number;
    /** 状态名：`'init'` / `'play'` / `'pause'` / `'stop'` / `'finish'` */
    statusName: string;
  }

  /**
   * TrackLine `progress` 事件的 `value`
     */
  interface TrackLineProgressValue {
    /** 进度 [0,1] */
    process: number;
    /** 已播放秒数 */
    elapsed: number;
    /** 已走过的里程（墨卡托单位） */
    trace: number;
    /** 轨迹总长（墨卡托单位） */
    distance: number;
    /** 车辆当前经纬度 */
    point: Point;
    /** 车头方位角（度） */
    angle: number;
  }

  /**
   * TrackLine 事件对象
     */
  interface TrackLineEvent<V> {
    /** 触发事件的图层 */
    target: TrackLine;
    /** 事件载荷 */
    value: V;
  }

  /**
   * TrackLine 支持的事件名与事件对象类型映射
     */
  interface TrackLineEventMap {
    /** 播放状态变化 */
    statuschange: TrackLineEvent<TrackLineStatusValue>;
    /** 播放进度推进（每帧） */
    progress: TrackLineEvent<TrackLineProgressValue>;
  }

  /**
   * TrackLine构造函数options参数。
   *
   * 承载单条轨迹的本地回放：线样式、痕迹（已走过/未走过分色）、序列箭头纹理、
   * 渐变色、播放控制、自动跟随视野、车辆图标。线样式命名与 {@link PolylineLayer} 对齐。
   * @category 配置项
     */
  interface TrackLineOptions {
    /**
     * 线颜色，css 字符串
     * @default 'rgba(25, 25, 250, 1)'
     */
    strokeColor?: string;
    /**
     * 线宽（屏幕 px，全宽）
     * @default 8
     */
    strokeWeight?: number;
    /**
     * 拐角连接样式
     * @default 'round'
     */
    strokeLineJoin?: 'miter' | 'bevel' | 'round';
    /**
     * 线端点样式
     * @default 'round'
     */
    strokeLineCap?: 'butt' | 'round' | 'square';

    /**
     * 已走过路段颜色。css 色染色 / `null` 跟随主线色 / `'none'` / `'transparent'` / alpha 为 0 隐藏
     * @default 'rgba(153, 153, 153, 1)'
     */
    passedColor?: string | false | null;
    /**
     * 未走过路段颜色，取值同 `passedColor`；`'none'` 可做出线随车"生长"的效果
     * @default null
     */
    upcomingColor?: string | false | null;
    /**
     * 整条线是否可见，`false` 时只留车辆图标
     * @default true
     */
    lineVisible?: boolean;

    /**
     * 纹理图片地址（**必须是竖图**），空则不启用
     * @default ''
     */
    strokeTextureUrl?: string;
    /**
     * 纹理原图宽（px）
     * @default 16
     */
    strokeTextureWidth?: number;
    /**
     * 纹理原图高（px）
     * @default 16
     */
    strokeTextureHeight?: number;
    /**
     * `true` 按 `strokeTextureGap` 间隔平铺；`false` 沿线连续拉伸
     * @default false
     */
    strokeTextureSpaced?: boolean;
    /**
     * 相邻纹理间隔（px），仅 `strokeTextureSpaced` 为 `true` 时生效
     * @default 16
     */
    strokeTextureGap?: number;
    /**
     * 纹理叠加色
     * @default 'rgba(255, 255, 255, 1)'
     */
    strokeTextureColor?: string;

    /**
     * `true` 时线色沿轨迹按 `linearTexture` 渐变（覆盖 `strokeColor`）
     * @default false
     */
    isLinear?: boolean;
    /**
     * 渐变色标 `[[位置0~1, css 颜色], ...]`，如 `[[0, 'green'], [1, 'red']]`
     */
    linearTexture?: Array<[number, string]>;

    /**
     * 播放总时长（秒）
     * @default 60
     */
    duration?: number;
    /**
     * `1` 按时间戳变速（还原真实速度）；`0` 匀速
     * @default 1
     */
    speedMode?: 0 | 1;
    /**
     * 时间戳字段名，`properties[timestampKey]` 应为与 coordinates 等长的数组；缺失则降级匀速
     * @default 'timestamps'
     */
    timestampKey?: string;
    /**
     * setData 后是否自动开始播放
     * @default false
     */
    autoStart?: boolean;

    /**
     * 车辆图标：`false` 不创建；对象按 {@link TrackLineMovePointOptions} 创建；
     * 也可直接传已构造的 {@link GroundPoint} / {@link Marker} 实例
     */
    movePoint?: boolean | TrackLineMovePointOptions | GroundPoint | Marker;

    /**
     * 是否让地图视野自动跟随车辆
     * @default false
     */
    autoFollow?: boolean;
    /** 跟随细节，见 {@link TrackLineFollowOptions} */
    followOptions?: TrackLineFollowOptions;

    /** 初始数据，同 {@link TrackLine.setData} 的入参 */
    data?: any;
    /**
     * 取要素 id 的字段名
     * @default 'id'
     */
    idKey?: string;

    /**
     * 是否显示
     * @default true
     */
    visible?: boolean;
    /**
     * 图层级透明度 [0,1]
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
    /** 图层参考中心点，规避大坐标浮点抖动 */
    referCenter?: Point;
    /** 绘制阶段，`null` / `'building'` / `'poi'`，不设为默认落点 */
    renderStage?: 'building' | 'poi' | null;
  }

  /**
   * 车辆轨迹动画图层，承载单条轨迹的本地回放，适合轨迹播放/巡航展示。
   *
   * 几何类型支持 `LineString`。推进播放只改 uniform、不重建顶点，长轨迹也能满帧跑。
   * 支持痕迹分色、序列箭头、渐变色、变速播放、自动跟随视野与车辆图标。
     */
  class TrackLine {
    /**
     * 创建轨迹图层
     * @param options 配置项
     * @example
     * ```typescript
     * const track = new BMap.TrackLine({ duration: 30, movePoint: { url: './bus.png' } });
     * track.setData({
     *   type: 'Feature',
     *   geometry: { type: 'LineString', coordinates: [[116.40, 39.91], [116.42, 39.92]] },
     *   properties: {}
     * });
     * map.addLayer(track);
     * track.start();
     * ```
     */
    constructor(options?: TrackLineOptions);

    /**
     * 播放状态枚举
     * @group 枚举
     */
    static readonly Status: {
      INIT: 0;
      PLAY: 1;
      PAUSE: 2;
      STOP: 3;
      FINISH: 4;
    };
    /**
     * 状态码到名称的映射数组（下标即状态码）
     * @group 枚举
     */
    static readonly StatusName: string[];

    /** @hidden */
    readonly isWebGLLayer: true;

    /**
     * 设置数据，支持 `FeatureCollection` / `Feature` / `Feature[]` / 裸 Geometry。
     * 几何类型支持 `LineString`
     * @group 数据
     */
    setData(geojson: any): TrackLine;
    /**
     * 返回原始数据
     * @group 数据
     */
    getData(): any;
    /**
     * 清空数据与 GPU 缓冲（会先停止播放）
     * @group 数据
     */
    clearData(): TrackLine;

    /**
     * 批量更新配置/样式
     * @group 样式
     */
    setOptions(options: TrackLineOptions): TrackLine;
    /**
     * 返回当前配置对象
     * @group 样式
     */
    getOptions(): TrackLineOptions;

    /**
     * 开始播放（已在播放中则无操作）
     * @group 播放控制
     */
    start(): TrackLine;
    /** 暂停播放 @group 播放控制 */
    pause(): TrackLine;
    /** 从暂停处继续播放 @group 播放控制 */
    resume(): TrackLine;
    /** 停止并复位到起点 @group 播放控制 */
    stop(): TrackLine;
    /**
     * 设为 N 倍速（以初始 `duration` 为基准，非累乘）
     * @param speed 目标倍速，> 0
     * @group 播放控制
     */
    setSpeed(speed: number): TrackLine;
    /** @group 播放控制 */
    getSpeed(): number;
    /**
     * 跳转到指定进度
     * @param process [0,1]
     * @group 播放控制
     */
    setProcess(process: number): TrackLine;
    /** @group 播放控制 */
    getProcess(): number;
    /**
     * 跳转到指定播放秒数
     * @group 播放控制
     */
    setElapsed(elapsed: number): TrackLine;
    /** @group 播放控制 */
    getElapsed(): number;
    /**
     * 取当前播放状态码，见 {@link TrackLine.Status}
     * @group 播放控制
     */
    getStatus(): number;
    /**
     * 取轨迹总长（墨卡托单位）
     * @group 播放控制
     */
    getDistance(): number;
    /**
     * 取指定进度处的轨迹信息（不改变播放态）
     * @param process [0,1]
     * @group 播放控制
     */
    getInfoByProcess(process: number): { point: Point; trace: number; elapsed: number; angle: number } | null;
    /**
     * 取实际生效的速度模式（时间戳缺失时会从 1 降级为 0）
     * @group 播放控制
     */
    getSpeedMode(): 0 | 1;

    /**
     * 取内部车辆图标覆盖物，可直接调用其原生方法
     * @group 车辆图标
     */
    getMovePoint(): GroundPoint | Marker | null;
    /**
     * 更换车辆图标（入参同 `options.movePoint`）
     * @group 车辆图标
     */
    setMovePoint(movePoint: boolean | TrackLineMovePointOptions | GroundPoint | Marker): TrackLine;

    /**
     * 开关自动跟随视野
     * @group 跟随视野
     */
    setAutoFollow(enable: boolean): TrackLine;
    /** @group 跟随视野 */
    getAutoFollow(): boolean;
    /**
     * 增量修改跟随参数（未传字段保持原值）
     * @group 跟随视野
     */
    setFollowOptions(opts: TrackLineFollowOptions): TrackLine;
    /**
     * 取当前生效的跟随参数（副本）
     * @group 跟随视野
     */
    getFollowOptions(): TrackLineFollowOptions;

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

    /**
     * 添加事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     * @group 事件
     */
    addEventListener<K extends keyof TrackLineEventMap>(event: K, handler: (e: TrackLineEventMap[K]) => void): void;
    /**
     * 移除事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     * @group 事件
     */
    removeEventListener<K extends keyof TrackLineEventMap>(event: K, handler: (e: TrackLineEventMap[K]) => void): void;
  }
}

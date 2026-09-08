declare namespace BMap {
  /**
   * CustomOverlay 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
     */
  interface CustomOverlayOptions {
    /**
     * 覆盖物的地理坐标点
     */
    point?: Point;
    /**
     * 锚点，左上角为 [0, 0]，取值范围 [0, 1]
     * @default [0.5, 1]
     */
    anchors?: [number, number];
    /**
     * X轴偏移量，单位像素
     * @default 0
     */
    offsetX?: number;
    /**
     * Y轴偏移量，单位像素
     * @default 0
     */
    offsetY?: number;
    /**
     * 初始化旋转角度
     * @default 0
     */
    rotationInit?: number;
    /**
     * 旋转角度超过 90 度且小于 270 度时是否翻转，避免内容倒置
     * @default false
     */
    rotationFlip?: boolean;
    /**
     * 显示的最小缩放级别
     */
    minZoom?: number;
    /**
     * 显示的最大缩放级别
     */
    maxZoom?: number;
    /**
     * 自定义业务属性
     */
    properties?: any;
    /**
     * 是否将 DOM 固定在底部
     * @default false
     */
    fixBottom?: boolean;
    /**
     * 是否使用 translate3d 进行性能优化
     * @default false
     */
    useTranslate?: boolean;
    /**
     * 是否随地图旋转
     * @default false
     */
    autoFollowHeadingChanged?: boolean;
    /**
     * 是否显示
     * @default true
     */
    visible?: boolean;
    /**
     * 层叠顺序
     * @default 0
     */
    zIndex?: number;
    /**
     * 是否在 map.clearOverlays() 时被清除
     * @default true
     */
    enableMassClear?: boolean;
    /**
     * 覆盖物上是否允许拖拽地图
     * @default false
     */
    enableDraggingMap?: boolean;
    /**
     * 是否延迟一帧再显示，用于解决 DOM 自适应宽度问题
     * @default false
     */
    nextTick?: boolean;
    /**
     * 是否与地图同步更新（跟随地图每次重绘同步刷新位置），开启后覆盖物位置更新将不再走默认的坐标转换逻辑
     * @default false
     */
    synUpdate?: boolean;
  }
}

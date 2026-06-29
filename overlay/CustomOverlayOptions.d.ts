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
     * 旋转角度，单位度
     * @default 0
     */
    rotation?: number;
    /**
     * 初始化旋转角度
     * @default 0
     */
    rotationInit?: number;
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
  }
}

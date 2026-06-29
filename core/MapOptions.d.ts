declare namespace BMap {
  /**
   * 此类表示Map构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   */
  interface MapOptions {
    /**
     * 地图允许展示的最小级别。 取值范围 [3, 21]
     */
    minZoom?: number;
    /**
     * 地图允许展示的最大级别，取值范围 [3, 21]
     */
    maxZoom?: number;
    /**
     * 地图类型
     * @default BMAP_NORMAL_MAP
     */
    mapType?: MapTypeId;
    /**
     * 是否允许拖拽（包括了旋转、倾斜、移动）
     * @default true
     */
    enableDragging?: boolean;
    /**
     * 是否开启键盘快捷键操作地图
     * @default false
     */
    enableKeyboard?: boolean;
    /**
     * 是否启用双击缩放，左键双击放大、右键双击缩小
     * @default true
     */
    enableDblclickZoom?: boolean;
    /**
     * 是否允许鼠标滚轮、触摸板滑动缩放地图
     * @default false
     */
    enableWheelZoom?: boolean;
    /**
     * 是否允许手势缩放地图
     * @default true
     */
    enablePinchZoom?: boolean;
    /**
     * 是否允许地图倾斜
     * @default true
     */
    enableTilt?: boolean;
    /**
     * 是否允许地图旋转
     * @default true
     */
    enableRotate?: boolean;
    /**
     * 是否允许通过手势旋转地图
     * @default true
     */
    enableRotateGestures?: boolean;
    /**
     * 是否允许通过手势倾斜地图
     * @default true
     */
    enableTiltGestures?: boolean;
    /**
     * 手势缩放是否固定中心点，不固定时由手指中心点决定
     * @default false
     */
    fixCenterWhenPinch?: boolean;
    /**
     * 是否自动检测地图容器变化并自适应
     * @default true
     */
    enableAutoResize?: boolean;
    /**
     * 地图容器尺寸变化时，是否保持地图中心点不变。默认情况下，当地图容器尺寸变化时，地图上的
     * 任意一点距离地图左上角的位置不变，即视觉上地图是稳定的，但是地图的中心点坐标却是变化的。
     * @default false
     */
    fixCenterWhenResize?: boolean;
    /**
     * 指定缩放中心点，当设置此属性后，地图缩放总是以此点为中心进行。
     */
    zoomCenter?: Point;
    /**
     * 指定地图显示的范围，地图根据容器大小以及该范围限制中心点和级别的变化。
     */
    restrictBounds?: Bounds | null;
    /**
     * 是否允许底图标注可点。开启后当点击到底图图标时，map 的 `click` 事件参数会包含点击的信息。
     * @default false
     */
    enableIconClick?: boolean;
    /**
     * 配置地图显示元素。该参数详细信息请参见 setDisplayOptions 方法。
     */
    displayOptions?: DisplayOptions;
    /**
     * 覆盖物是否显示在文字上面
     * @default false
     */
    overlayTop?: boolean;
    /**
     * 是否自动限制最小缩放级别
     * @default true
     */
    enableAdaptiveMinZoom?: boolean;
  }
}

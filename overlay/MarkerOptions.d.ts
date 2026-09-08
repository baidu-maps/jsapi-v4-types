declare namespace BMap {
  /**
   * 此类表示 Marker 构造函数的可选参数。不可实例化，通过对象字面量形式表示。
   */
  interface MarkerOptions {
    /**
     * 标注的位置偏移值
     */
    offset?: Size;
    /**
     * 标注所用的图标对象
     */
    icon?: Icon;
    /**
     * 标注锚点位置，设置后覆盖 Icon 自身的 anchor
     * @default BMAP_ANCHOR_CENTER
     */
    anchor?: ControlAnchor;
    /**
     * 是否在调用 map.clearOverlays() 时清除此覆盖物
     * @default true
     */
    enableMassClear?: boolean;
    /**
     * 是否启用拖拽
     * @default false
     */
    enableDragging?: boolean;
    /**
     * 是否响应点击事件
     * @default true
     */
    enableClicking?: boolean;
    /**
     * 拖拽标注时，标注是否开启离开地图表面效果
     * @default false
     */
    raiseOnDrag?: boolean;
    /**
     * 拖拽标注时的鼠标指针样式，需遵循 CSS cursor 属性规范
     */
    draggingCursor?: string;
    /**
     * 旋转角度，单位度
     * @default 0
     */
    rotation?: number;
    /**
     * 鼠标移到标注上时显示的标题文字
     */
    title?: string;
    /**
     * 是否将标注置于其他标注之上。默认情况下纬度低的标注会盖住纬度高的标注
     * @default false
     */
    isTop?: boolean;
    /**
     * 标注所用的文本对象
     */
    label?: Label;
    /**
     * 是否限制拖拽区域
     * @default false
     */
    restrictDraggingArea?: boolean;
    /**
     * 标注的层叠顺序值
     */
    zIndex?: number;
    /**
     * 是否自动跟随地图旋转角度联动
     * @default false
     */
    autoFollowHeadingChanged?: boolean;
    /**
     * 图标的入场动画名称
     */
    startAnimation?: string;
  }
}

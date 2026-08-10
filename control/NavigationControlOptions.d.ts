declare namespace BMap {
  /**
   * NavigationControl 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface NavigationControlOptions {
    /**
     * 控件的停靠位置，默认值为 BMAP_ANCHOR_TOP_LEFT
     */
    anchor?: ControlAnchor;
    /**
     * 控件相对于停靠位置的偏移量，默认值为 new BMap.Size(30, 10)
     */
    offset?: Size;
    /**
     * 平移缩放控件的类型
     * @default BMAP_NAVIGATION_CONTROL_LARGE
     */
    type?: NavigationControlType;
    /**
     * 是否显示级别提示信息
     * @default true
     */
    showZoomInfo?: boolean;
    /**
     * 控件是否集成定位功能，桌面端和移动端均生效
     * @default false
     */
    enableGeolocation?: boolean;
  }
}

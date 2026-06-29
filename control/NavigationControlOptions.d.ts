declare namespace BMap {
  /**
   * NavigationControl 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface NavigationControlOptions {
    /**
     * 控件的停靠位置
     * @default BMAP_ANCHOR_TOP_LEFT
     */
    anchor?: ControlAnchor;
    /**
     * 控件的水平偏移值
     */
    offset?: Size;
    /**
     * 平移缩放控件的类型
     */
    type?: NavigationControlType;
    /**
     * 是否显示级别提示信息
     * @default true
     */
    showZoomInfo?: boolean;
    /**
     * 控件是否集成定位功能
     * @default false
     */
    enableGeolocation?: boolean;
  }
}

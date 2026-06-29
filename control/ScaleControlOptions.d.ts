declare namespace BMap {
  /**
   * ScaleControl 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface ScaleControlOptions {
    /**
     * 控件的停靠位置
     * @default BMAP_ANCHOR_BOTTOM_LEFT
     */
    anchor?: ControlAnchor;
    /**
     * 控件的偏移值
     */
    offset?: Size;
  }
}

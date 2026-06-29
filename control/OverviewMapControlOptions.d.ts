declare namespace BMap {
  /**
   * OverviewMapControl 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface OverviewMapControlOptions {
    /**
     * 控件的停靠位置
     * @default BMAP_ANCHOR_BOTTOM_RIGHT
     */
    anchor?: ControlAnchor;
    /**
     * 控件的偏移值
     */
    offset?: Size;
    /**
     * 缩略地图控件的大小
     * @default new BMap.Size(150, 150)
     */
    size?: Size;
    /**
     * 控件添加到地图后的开合状态
     * @default false
     */
    isOpen?: boolean;
    /**
     * 鹰眼地图与主图之间的缩放级别差
     * @default 4
     */
    zoomInterval?: number;
    /**
     * 鹰眼地图和主地图之间的空隙宽度像素值
     * @default 5
     */
    padding?: number;
  }
}

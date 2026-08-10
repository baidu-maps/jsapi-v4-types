declare namespace BMap {
  /**
   * 此类表示地图的3D控件，可对地图进行旋转以及切换2D/3D展示效果。
   * `anchor` 属性表示控件的整体停靠位置。
     */
  class NavigationControl3D extends Control {
    /**
     * 创建3D导航控件
     * @param opts 可选参数
     * @example
     * ```typescript
     * const navigationControl3D = new BMap.NavigationControl3D({
     *   anchor: BMAP_ANCHOR_TOP_RIGHT,
     * });
     * map.addControl(navigationControl3D);
     * ```
     */
    constructor(opts?: NavigationControl3DOptions);
  }
}

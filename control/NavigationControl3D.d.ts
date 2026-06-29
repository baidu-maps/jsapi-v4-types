declare namespace BMap {
  /**
   * 此类表示地图的3D控件，可对地图进行旋转以及切换2D/3D展示效果。
     */
  class NavigationControl3D {
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

declare namespace BMap {
  /**
   * 此类表示地图的平移缩放控件。
   */
  class NavigationControl {
    /**
     * 创建平移缩放控件
     * @param opts 可选参数
     * @example
     * ```typescript
     * const navigationControl = new BMap.NavigationControl({
     *   anchor: BMAP_ANCHOR_TOP_LEFT,
     *   type: BMAP_NAVIGATION_CONTROL_LARGE,
     *   showZoomInfo: true,
     * });
     * map.addControl(navigationControl);
     * ```
     */
    constructor(opts?: NavigationControlOptions);
    /**
     * 返回平移缩放控件的类型
     */
    getType(): NavigationControlType;
    /**
     * 设置平移缩放控件的类型
     * @param type 控件类型
     * @example
     * ```typescript
     * navigationControl.setType(BMAP_NAVIGATION_CONTROL_SMALL);
     * ```
     */
    setType(type: NavigationControlType): void;
  }
}

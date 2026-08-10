declare namespace BMap {
  /**
   * 此类表示地图的平移缩放控件。
   * `anchor` 属性表示控件的整体停靠位置。
   * `type` 为 `BMAP_NAVIGATION_CONTROL_LARGE` 时，包含平移按钮、缩放按钮和缩放层级滑块；
   * 为 `BMAP_NAVIGATION_CONTROL_SMALL` 时，包含平移按钮和缩放按钮；
   * 为 `BMAP_NAVIGATION_CONTROL_PAN` 时，仅包含平移按钮；
   * 为 `BMAP_NAVIGATION_CONTROL_ZOOM` 时，仅包含缩放按钮。
   * `enableGeolocation` 为 `true` 时可显示定位按钮。
   */
  class NavigationControl extends Control {
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

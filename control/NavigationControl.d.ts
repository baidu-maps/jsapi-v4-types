declare namespace BMap {
  /**
   * 此类表示地图的平移缩放控件。
   * 包含平移、缩放、定位按钮。
   * anchor属性为整体停靠位置。
   * type属性为BMAP_NAVIGATION_CONTROL_LARGE时，包含平移按钮、缩放按钮、缩放层级滑块。
   * 控件尺寸为 50px x 296px。
   * type属性为BMAP_NAVIGATION_CONTROL_SMALL时，包含平移按钮、缩放按钮。
   * 控件尺寸为 50px x 116px。
   * type属性为BMAP_NAVIGATION_CONTROL_PAN时，仅包含平移按钮。
   * 控件尺寸为 50px x 50px。
   * type属性为BMAP_NAVIGATION_CONTROL_ZOOM时，仅包含缩放按钮。
   * 控件尺寸为 26px x 66px。
   * enableGeolocation属性为true时，包含定位按钮。
   * 控件高度增加 36px。
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

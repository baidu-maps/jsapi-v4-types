declare namespace BMap {
  /**
   * 此类是负责切换地图类型的控件。
   */
  class MapTypeControl {
    /**
     * 创建地图类型切换控件
     * @param opts 可选参数
     * @example
     * ```typescript
     * const mapTypeControl = new BMap.MapTypeControl({
     *   type: BMAP_MAPTYPE_CONTROL_DROPDOWN,
     *   mapTypes: [BMAP_NORMAL_MAP, BMAP_EARTH_MAP, BMAP_HYBRID_MAP],
     * });
     * map.addControl(mapTypeControl);
     * ```
     */
    constructor(opts?: MapTypeControlOptions);
    /**
     * 显示或隐藏路网层
     * @param isShow 是否显示
     * @example
     * ```typescript
     * mapTypeControl.showStreetLayer(true);
     * ```
     */
    showStreetLayer(isShow: boolean): void;
  }
}

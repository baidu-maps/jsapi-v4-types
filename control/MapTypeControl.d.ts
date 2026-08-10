declare namespace BMap {
  /**
   * 此类表示地图类型切换控件。 `BMAP_MAPTYPE_CONTROL_MAP` 为地图预览按钮样式，控件尺寸为 86px × 60px；`BMAP_MAPTYPE_CONTROL_DROPDOWN` 为按钮加下拉列表样式，控件折叠状态尺寸为 86px × 32px；`BMAP_MAPTYPE_CONTROL_HORIZONTAL` 为横向列表样式，控件尺寸为动态宽度 × 32px
   * 下拉列表高度随显示的地图类型数量变化，横向列表宽度随地图类型文本和数量变化。
   * `anchor` 属性表示整个控件的停靠位置。
   */
  class MapTypeControl extends Control {
    /**
     * 创建地图类型切换控件
     * @param opts 可选参数
     * @example
     * ```typescript
     * const mapTypeControl = new BMap.MapTypeControl({
     *   type: BMAP_MAPTYPE_CONTROL_DROPDOWN,
     *   mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP],
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

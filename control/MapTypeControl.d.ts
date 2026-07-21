declare namespace BMap {
  /**
   * 此类是负责切换地图类型的控件。
   * 有三种样式类型，根据不同的type属性可以设定为按钮、下拉框、横向列表三种样式。
   * type为BMAP_MAPTYPE_CONTROL_MAP是，是按钮样式。
   * 控件尺寸为 86px x 60px。
   * anchor属性为按钮停靠位置。
   * type属性为BMAP_MAPTYPE_CONTROL_DROPDOWN是，是下拉框样式。
   * 由按钮和下拉框两部分组成，按钮尺寸为 86px x 34px，下拉框尺寸为 86px x (25px x n + 22px)，n为地图类型数。
   * anchor属性为整体停靠位置。
   * type属性为BMAP_MAPTYPE_CONTROL_HORIZONTAL时，是横向列表样式。
   * 控件高22px，宽度由地图类型文本量确定，两个按钮的宽度约为150px。
   * mapTypes属性大多数情况下不用设置，默认即可。
   */
  class MapTypeControl extends Control {
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

declare namespace BMap {
  /**
   * 此类表示缩放控件，包含缩放地图的+和-按钮。
   * anchor属性为整体停靠位置。
   * 控件尺寸固定为 32px x 68px。
     */
  class ZoomControl extends Control {
    /**
     * 创建缩放控件
     * @param opts 可选参数
     * @example
     * ```typescript
     * const zoomControl = new BMap.ZoomControl({
     *   anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
     * });
     * map.addControl(zoomControl);
     * ```
     */
    constructor(opts?: ZoomControlOptions);
  }
}

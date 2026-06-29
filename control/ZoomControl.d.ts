declare namespace BMap {
  /**
   * 此类表示缩放控件。
     */
  class ZoomControl {
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

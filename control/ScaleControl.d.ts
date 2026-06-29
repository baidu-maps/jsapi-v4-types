declare namespace BMap {
  /**
   * 此类表示比例尺控件。
   */
  class ScaleControl {
    /**
     * 创建比例尺控件
     * @param opts 可选参数
     * @example
     * ```typescript
     * const scaleControl = new BMap.ScaleControl({
     *   anchor: BMAP_ANCHOR_BOTTOM_LEFT,
     * });
     * map.addControl(scaleControl);
     * ```
     */
    constructor(opts?: ScaleControlOptions);
    /**
     * 返回比例尺当前的单位制
     */
    getUnit(): LengthUnit;
    /**
     * 设置比例尺的单位制
     * @param unit 单位制
     * @example
     * ```typescript
     * scaleControl.setUnit(BMAP_UNIT_METRIC);
     * ```
     * @example 英制单位
     * ```typescript
     * scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
     * ```
     */
    setUnit(unit: LengthUnit): void;
  }
}

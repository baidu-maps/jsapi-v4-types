declare namespace BMap {
  /**
   * 地图城市选择控件
   */
  class CityListControl {
    /**
     * 创建城市选择控件实例
     * @param opts 可选配置参数
     * @example
     * ```typescript
     * const cityListControl = new BMap.CityListControl({
     *   anchor: BMAP_ANCHOR_TOP_LEFT,
     *   offset: new BMap.Size(10, 10),
     *   expand: false,
     *   canCheckSize: false,
     *   onChangeBefore: () => { console.log('切换城市前'); },
     *   onChangeAfter: () => { console.log('切换城市后'); },
     *   onChangeSuccess: () => { console.log('切换城市成功'); },
     * });
     * map.addControl(cityListControl);
     * ```
     */
    constructor(opts?: CityListControlOptions);
  }
}

declare namespace BMap {
  /**
   * 地图城市选择控件。
   * 提供全国的省份、城市选择列表，可方便用户切换地图显示省份、城市。
   * 控件按钮尺寸为 84px x 32px。
   * 控件展开后城市列表尺寸为 400px x 640px。
   * anchor属性为按钮停靠位置。
   * 按钮在上时，列表向上展开；按钮在下时，列表向下展开。
   * 按钮在左时，列表与按钮左对齐，按钮在右时，列表右对齐。
   */
  class CityListControl extends Control {
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

declare namespace BMap {
  /**
   * 地图城市选择控件。 默认按钮宽度随城市名称变化，高度为 32px；展开后的展开城市面板尺寸为 400px × 455px
   * 提供全国的省份、城市选择列表，可方便用户切换地图显示省份、城市。
   * `anchor` 属性表示按钮的停靠位置。
   * 顶部停靠时列表向下展开，底部停靠时列表向上展开。
   * 按钮停靠在左侧时，列表与按钮左对齐；停靠在右侧时，列表与按钮右对齐。
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
    /**
     * 展开城市列表面板
     */
    open(): void;
    /**
     * 收起城市列表面板
     */
    close(): void;
    /**
     * 切换城市列表面板的展开状态
     */
    toggle(): void;
    /**
     * 返回城市列表的触发元素；控件尚未初始化时返回 undefined
     */
    getTriggerDom(): HTMLElement | undefined;
    /**
     * 返回当前城市名称
     */
    getCityName(): string;
  }
}

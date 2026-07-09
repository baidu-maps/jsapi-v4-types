declare namespace BMap {
  /**
   * CityListControl 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface CityListControlOptions {
    /**
     * 控件的停靠位置
     * @default BMAP_ANCHOR_TOP_LEFT
     */
    anchor?: ControlAnchor;
    /**
     * 控件基于停靠位置的偏移量
     * @default new BMap.Size(10, 10)
     */
    offset?: Size;
    /**
     * 是否初始展开城市列表
     * @default false
     */
    expand?: boolean;
    /**
     * 自定义触发元素，用于替代默认的城市切换按钮。自定义元素按钮可以方便您统一页面样式。
     * 传入一个 DOM 元素后，点击该元素即可展开/收起城市列表。如需动态修改自定义触发按钮的文案，可通过配置初始化参数中的回调函数实现
     * @example
     * ```typescript
     * const trigger = document.getElementById('my-city-btn');
     * const cityList = new BMap.CityListControl({ trigger });
     * map.addControl(cityList);
     * ```
     */
    trigger?: HTMLElement;
    /**
     * 切换城市前触发的回调函数
     */
    onChangeBefore?: () => void;
    /**
     * 切换城市后触发的回调函数
     */
    onChangeAfter?: () => void;
    /**
     * 切换城市成功后触发的回调函数
     */
    onChangeSuccess?: () => void;
  }
}

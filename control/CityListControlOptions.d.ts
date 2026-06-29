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

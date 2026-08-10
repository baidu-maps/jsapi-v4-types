declare namespace BMap {
  /** 城市切换成功后的城市信息 */
  interface CityListControlChangeResult {
    /** 城市名称 */
    city: string;
    /** 城市编码 */
    code: string | number;
    /** 城市名称，仅切换城市成功时提供 */
    title?: string;
    /** 城市数据标识，仅切换城市成功时提供 */
    uid?: string;
    /** 城市坐标，仅切换城市成功时提供 */
    point?: Point | '';
    /** 地图级别，仅切换城市成功时提供 */
    level?: number;
  }

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
     * 传入一个 DOM 元素后，点击该元素即可展开/收起城市列表。如需动态修改自定义触发按钮的文案，可通过回调函数实现。
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
     * 切换城市成功后触发的回调函数，控件初始化完成后也会触发一次，可在回调中获取当前城市名
     * @param poi 城市信息
     */
    onChangeSuccess?: (poi: CityListControlChangeResult) => void;
    /**
     * 城市列表面板展开时的回调函数
     */
    onOpen?: () => void;
    /**
     * 城市列表面板收起时的回调函数
     */
    onClose?: () => void;
    /**
     * 是否检查地图容器尺寸，容器过小时不展示控件
     * @default true
     */
    canCheckSize?: boolean;
  }
}

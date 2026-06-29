declare namespace BMap {
  /**
   * 本类是Autocomplete类的可选参数对象
   */
  interface AutocompleteOptions {
    /**
     * 设定返回结果的所属城市范围。可传入城市名称字符串（如"北京市"）、Map 实例（自动获取地图当前城市）或 Point 坐标（反解出所在城市）。不设置时默认搜索全国
     */
    location?: string | Map | Point;
    /**
     * 返回数据类型。不设置或为空时返回所有类型数据（餐饮、地名、公司等）。设置为 `["city"]` 时仅返回省市区县乡镇街道等行政区划地址类型数据
     */
    types?: string[];
    /**
     * 在input框中输入字符后，发起列表检索，完成后的回调函数
     * @param results 检索结果，可通过 results.getPoi(i) 获取各条建议项
     */
    onSearchComplete?: (results: AutocompleteResult) => void;
    /**
     * 文本输入框元素或其id
     */
    input?: string | HTMLElement;
    /**
     * 用户选中某条建议项时的回调函数
     * @param item 选中的条目，包含 index（索引）和 value（AutocompleteResultPoi）
     */
    onConfirm?: (item: AutocompleteItem) => void;
    /**
     * 高亮项发生变化时的回调函数
     * @param current 当前高亮条目
     * @param previous 之前高亮条目
     */
    onHighlight?: (current: AutocompleteItem, previous: AutocompleteItem) => void;
    /**
     * 最多显示的建议条数
     */
    suggestionCount?: number;
    /**
     * 以此 DOM 元素为基础定位建议面板弹出位置
     */
    baseDom?: string | HTMLElement;
  }

}

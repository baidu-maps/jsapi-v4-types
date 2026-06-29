declare namespace BMap {
  /**
   * Autocomplete 建议条目，包含索引和 POI 信息
   */
  interface AutocompleteItem {
    /**
     * 条目在列表中的索引（从0开始，无高亮时为 -1）
     */
    index: number;
    /**
     * 条目对应的 POI 信息
     */
    value: AutocompleteResultPoi;
  }

  /**
   * Autocomplete 事件回调参数映射
   */
  interface AutocompleteEventMap {
    /** 用户选中某条建议项时触发 */
    onconfirm: AutocompleteConfirmEvent;
    /** 高亮项发生变化时触发 */
    onhighlight: AutocompleteHighlightEvent;
  }

  /**
   * Autocomplete 的 onconfirm 事件参数
   */
  interface AutocompleteConfirmEvent {
    type: string;
    target: Autocomplete;
    /**
     * 选中的条目
     */
    item: AutocompleteItem;
  }

  /**
   * Autocomplete 的 onhighlight 事件参数
   */
  interface AutocompleteHighlightEvent {
    type: string;
    target: Autocomplete;
    /**
     * 之前高亮的条目
     */
    fromitem: AutocompleteItem;
    /**
     * 当前高亮的条目
     */
    toitem: AutocompleteItem;
  }

  /**
   * 提供关键字自动补全和搜索建议功能。
   */
  class Autocomplete {
    /**
     * 创建自动完成实例
     * @param options 配置参数
     * @example
     * ```typescript
     * const autocomplete = new BMap.Autocomplete({
     *   input: 'searchInput',
     *   location: map,
     *   onSearchComplete(results) {
     *     console.log(autocomplete.getResults());
     *   },
     * });
     * ```
     */
    constructor(options: AutocompleteOptions);
    /**
     * 显示提示列表
     */
    show(): void;
    /**
     * 隐藏提示列表
     */
    hide(): void;
    /**
     * 修改请求数据类型
     * @param types 数据类型数组
     * @example
     * ```typescript
     * autocomplete.setTypes(['city', 'district']);
     * ```
     */
    setTypes(types: string[]): void;
    /**
     * 设置检索区域
     * @param location 地图实例、坐标点或城市名称字符串
     * @example
     * ```typescript
     * autocomplete.setLocation('上海');
     * ```
     */
    setLocation(location: string | Map | Point): void;
    /**
     * 发起关键字提示请求，触发 onSearchComplete 回调
     * @param keywords 搜索关键字
     * @example
     * ```typescript
     * autocomplete.search('天安门');
     * ```
     */
    search(keywords: string): void;
    /**
     * 返回当前的提示结果列表
     */
    getResults(): AutocompleteResult;
    /**
     * 设置绑定输入控件的值，不触发下拉列表
     * @param keyword 关键字
     * @example
     * ```typescript
     * autocomplete.setInputValue('北京大学');
     * ```
     */
    setInputValue(keyword: string): void;
    /**
     * 销毁自动完成实例
     */
    dispose(): void;
    /**
     * 添加事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     * @deprecated 4.0 已废弃，请使用 AutocompleteOptions 中的 onConfirm / onHighlight 回调代替
     * @example
     * ```typescript
     * autocomplete.addEventListener('onconfirm', (e) => {
     *   console.log('选中:', e.item.value.business);
     *   console.log('索引:', e.item.index);
     * });
     *
     * autocomplete.addEventListener('onhighlight', (e) => {
     *   console.log('高亮从', e.fromitem.index, '变为', e.toitem.index);
     * });
     * ```
     */
    addEventListener<K extends keyof AutocompleteEventMap>(event: K, handler: (e: AutocompleteEventMap[K]) => void): void;
    /**
     * 移除事件监听
     * @param event 事件名称
     * @param handler 要移除的事件处理函数
     * @deprecated 4.0 已废弃，请使用 AutocompleteOptions 中的 onConfirm / onHighlight 回调代替
     */
    removeEventListener<K extends keyof AutocompleteEventMap>(event: K, handler: (e: AutocompleteEventMap[K]) => void): void;
  }
}

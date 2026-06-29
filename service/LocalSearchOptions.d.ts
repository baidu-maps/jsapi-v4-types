declare namespace BMap {
  /**
   * LocalSearch 构造函数的可选参数
   */
  interface LocalSearchOptions {
    /**
     * 结果呈现设置
     */
    renderOptions?: RenderOptions;
    /**
     * 检索完成后的回调函数
     * @param results 检索结果，多关键字检索时为 LocalResult 数组，顺序与关键字数组一致
     */
    onSearchComplete?: (results: LocalResult | LocalResult[]) => void;
    /**
     * 标注添加完成后的回调函数
     * @param pois POI 数组，每个元素的 marker 属性已指向其对应的地图标注
     */
    onMarkersSet?: (pois: LocalResultPoi[]) => void;
    /**
     * 标注气泡内容创建后的回调函数
     * @param poi 当前 POI，通过 marker 属性可得到当前标注
     * @param html 气泡内的 DOM 元素
     */
    onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void;
    /**
     * 结果列表添加完成后的回调函数
     * @param container 结果列表所用的 HTML 元素
     */
    onResultsHtmlSet?: (container: HTMLElement) => void;
    /**
     * 每页容量，取值范围 1 - 100。多关键字检索时为每个关键字的返回数量
     * @default 10
     */
    pageCapacity?: number;
    /**
     * 起始页码，从 0 开始
     * @default 0
     */
    pageNum?: number;
  }
}

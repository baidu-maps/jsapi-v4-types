declare namespace BMap {
  /**
   * 用于位置检索、周边检索和范围检索。
   */
  class LocalSearch {
    /**
     * 创建搜索实例
     * @param location 检索区域，可以是地图实例、坐标点或城市名称字符串
     * @param opts 可选参数
     * @example
     * ```typescript
     * // 设置 renderOptions.map，标注自动渲染到地图上
     * const localSearch = new BMap.LocalSearch(map, {
     *   renderOptions: { map: map, autoViewport: true },
     *   onSearchComplete(results) {
     *     console.log('标注已自动绘制到地图');
     *   },
     * });
     * localSearch.search('餐厅');
     * ```
     * @example
     * ```typescript
     * // 设置展示面板 + viewportOptions.margins 避免面板遮挡聚焦区域
     * const localSearch = new BMap.LocalSearch(map, {
     *   renderOptions: {
     *     map: map,
     *     panel: 'search-panel',
     *     autoViewport: true,
     *     viewportOptions: { margins: [20, 20, 20, 300] },
     *   },
     *   onSearchComplete(results) {
     *     console.log('检索完成，结果面板已展示');
     *   },
     * });
     * localSearch.search('超市');
     * ```
     * @example
     * ```typescript
     * // 纯回调用法，不自动渲染到地图
     * const localSearch = new BMap.LocalSearch(map, {
     *   onSearchComplete(results) {
     *     if (localSearch.getStatus() === 0) {
     *       console.log('结果数量：', results.getCurrentNumPois());
     *     }
     *   },
     * });
     * localSearch.search('咖啡');
     * ```
     */
    constructor(location: Map | Point | string, opts?: LocalSearchOptions);
    /**
     * 根据检索词发起检索，支持数组形式的多关键字（最多10个）
     * @param keyword 检索关键字或关键字数组
     * @param option 附加选项
     * @example
     * ```typescript
     * localSearch.search('餐厅');
     * ```
     * @example 多关键字检索
     * ```typescript
     * localSearch.search(['咖啡', '甜品']);
     * ```
     * @example 强制在当前城市搜索
     * ```typescript
     * localSearch.search('火锅', { forceLocal: true });
     * ```
     */
    search(keyword: string | string[], option?: LocalSearchSearchOption): void;
    /**
     * 根据范围和检索词发起范围检索，支持多关键字
     * @param keyword 检索关键字或关键字数组
     * @param bounds 检索范围
     * @example
     * ```typescript
     * const bounds = new BMap.Bounds(
     *   new BMap.Point(116.380, 39.900),
     *   new BMap.Point(116.430, 39.930)
     * );
     * localSearch.searchInBounds('超市', bounds);
     * ```
     */
    searchInBounds(keyword: string | string[], bounds: Bounds): void;
    /**
     * 根据中心点、半径与检索词发起周边检索，支持多关键字
     * @param keyword 检索关键字或关键字数组
     * @param center 中心点，可以是 LocalResultPoi、城市名称字符串或坐标点
     * @param radius 检索半径，单位米（默认2000，最大100000），center 为字符串时忽略此参数
     * @example
     * ```typescript
     * localSearch.searchNearby('银行', new BMap.Point(116.404, 39.915), 2000);
     * ```
     */
    searchNearby(keyword: string | string[], center: LocalResultPoi | string | Point, radius: number): void;
    /**
     * 返回最近一次检索的结果，多关键字检索时返回 LocalResult 数组
     */
    getResults(): LocalResult | LocalResult[];
    /**
     * 清除最近一次检索的结果，同时清除地图上的标注和结果面板
     */
    clearResults(): void;
    /**
     * 跳转到指定页的检索结果，页码无效时触发 onSearchComplete 并设状态为 INVALID_REQUEST
     * @param page 页码，从 0 开始，最大为 getNumPages() - 1
     * @example
     * ```typescript
     * localSearch.gotoPage(2);
     * ```
     */
    gotoPage(page: number): void;
    /**
     * 启用根据结果自动调整地图视野
     */
    enableAutoViewport(): void;
    /**
     * 禁用根据结果自动调整地图视野
     */
    disableAutoViewport(): void;
    /**
     * 启用自动选择第一个检索结果
     */
    enableFirstResultSelection(): void;
    /**
     * 禁用自动选择第一个检索结果
     */
    disableFirstResultSelection(): void;
    /**
     * 设置检索区域
     * @param location 地图实例、坐标点或城市名称字符串
     * @example
     * ```typescript
     * localSearch.setLocation('上海');
     * ```
     */
    setLocation(location: Map | Point | string): void;
    /**
     * 设置每页容量，超出范围时重置为默认值 10
     * @param capacity 每页容量，取值范围 1 - 100
     * @example
     * ```typescript
     * localSearch.setPageCapacity(20);
     * ```
     */
    setPageCapacity(capacity: number): void;
    /**
     * 返回每页容量
     */
    getPageCapacity(): number;
    /**
     * 设置起始页码
     * @param pageNum 页码，从 0 开始，无效值时重置为 0
     */
    setPageNum(pageNum: number): void;
    /**
     * 返回当前页码
     */
    getPageNum(): number;
    /**
     * 设置检索结束后的回调函数
     * @param callback 回调函数
     * @example
     * ```typescript
     * localSearch.setSearchCompleteCallback((results) => {
     *   console.log('检索完成', results);
     * });
     * ```
     */
    setSearchCompleteCallback(callback: (results: LocalResult | LocalResult[]) => void): void;
    /**
     * 设置标注添加完成后的回调函数
     * @param callback 回调函数
     * @example
     * ```typescript
     * localSearch.setMarkersSetCallback((pois) => {
     *   pois.forEach(poi => console.log(poi.title, poi.marker));
     * });
     * ```
     */
    setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void;
    /**
     * 设置标注气泡创建时的回调函数
     * @param callback 回调函数
     * @example
     * ```typescript
     * localSearch.setInfoHtmlSetCallback((poi, html) => {
     *   console.log('气泡已创建', poi.title, html);
     * });
     * ```
     */
    setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void;
    /**
     * 设置结果列表创建后的回调函数
     * @param callback 回调函数
     * @example
     * ```typescript
     * localSearch.setResultsHtmlSetCallback((container) => {
     *   console.log('结果列表已创建', container);
     * });
     * ```
     */
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void;
    /**
     * 返回最近一次检索的状态码
     */
    getStatus(): ServiceStatus;
  }
}

declare namespace BMap {
  /**
   * 公交路线搜索类。
   */
  class BusLineSearch {
    /**
     * 创建公交线搜索类。location表示检索区域，类型可为地图实例、坐标点或城市名称的字符串
     * @example
     * ```typescript
     * const busLineSearch = new BMap.BusLineSearch(map, {
     *   onGetBusListComplete(result) {
     *     if (result) {
     *       busLineSearch.getBusLine(result.getBusListItem(0));
     *     }
     *   },
     * });
     * busLineSearch.getBusList('331');
     * ```
     */
    constructor(location: Map | Point | string, options?: BusLineSearchOptions);
    /** 在回调函数中返回公交列表结果
     * @example
     * ```typescript
     * busLineSearch.getBusList('地铁1号线');
     * ```
     */
    getBusList(keyword: string): void;
    /** 在回调函数中返回该条线路的公交信息
     * @example
     * ```typescript
     * busLineSearch.getBusLine(busListItem);
     * ```
     */
    getBusLine(busLstItem: BusListItem): void;
    /** 清除本次公交线检索结果 */
    clearResults(): void;
    /** 启用自动调整地图视野功能 */
    enableAutoViewport(): void;
    /** 禁用自动调整地图视野功能 */
    disableAutoViewport(): void;
    /** 设置检索范围
     * @example
     * ```typescript
     * busLineSearch.setLocation('上海');
     * ```
     */
    setLocation(location: Map | Point | string): void;
    /** 返回状态码 */
    getStatus(): ServiceStatus;
    /** 设置公交列表查询后的回调函数
     * @example
     * ```typescript
     * busLineSearch.setGetBusListCompleteCallback((result) => {
     *   console.log('公交列表', result);
     * });
     * ```
     */
    setGetBusListCompleteCallback(callback: Function): void;
    /** 设置公交线路查询后的回调函数
     * @example
     * ```typescript
     * busLineSearch.setGetBusLineCompleteCallback((result) => {
     *   console.log('公交线路', result);
     * });
     * ```
     */
    setGetBusLineCompleteCallback(callback: Function): void;
    /** 公交列表结果页渲染后回调函数
     * @example
     * ```typescript
     * busLineSearch.setBusListHtmlSetCallback((container) => {
     *   console.log('列表已渲染', container);
     * });
     * ```
     */
    setBusListHtmlSetCallback(callback: Function): void;
    /** 公交线路结果页渲染后回调函数
     * @example
     * ```typescript
     * busLineSearch.setBusLineHtmlSetCallback((container) => {
     *   console.log('线路已渲染', container);
     * });
     * ```
     */
    setBusLineHtmlSetCallback(callback: Function): void;
    /** 添加公交线时回调函数
     * @example
     * ```typescript
     * busLineSearch.setPolylinesSetCallback((polylines) => {
     *   console.log('公交线已添加', polylines);
     * });
     * ```
     */
    setPolylinesSetCallback(callback: Function): void;
    /** 添加公交站点时回调函数
     * @example
     * ```typescript
     * busLineSearch.setMarkersSetCallback((markers) => {
     *   console.log('站点标注已添加', markers);
     * });
     * ```
     */
    setMarkersSetCallback(callback: Function): void;
  }
}

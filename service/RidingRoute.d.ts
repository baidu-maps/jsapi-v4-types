declare namespace BMap {
  /**
   * 用于获取骑行路线规划方案。
   */
  class RidingRoute {
    /**
     * 创建骑行路线规划实例
     * @param location 检索区域，可以是地图实例、坐标点或城市名称字符串
     * @param opts 可选参数
     * @example
     * ```typescript
     * // 设置 renderOptions.map，路线和标注自动渲染到地图上
     * const ridingRoute = new BMap.RidingRoute(map, {
     *   renderOptions: { map: map, autoViewport: true },
     *   onSearchComplete(results) {
     *     console.log('路线已自动绘制到地图');
     *   },
     * });
     * ridingRoute.search('北京大学', '清华大学');
     * ```
     * @example
     * ```typescript
     * // 设置展示面板 + viewportOptions.margins 避免面板遮挡路线聚焦区域
     * const ridingRoute = new BMap.RidingRoute(map, {
     *   renderOptions: {
     *     map: map,
     *     panel: 'route-panel',
     *     autoViewport: true,
     *     viewportOptions: { margins: [20, 20, 20, 300] },
     *   },
     *   onSearchComplete(results) {
     *     console.log('路线已绘制，结果面板已展示');
     *   },
     * });
     * ridingRoute.search('北京大学', '清华大学');
     * ```
     * @example
     * ```typescript
     * // 纯回调用法，不自动渲染到地图
     * const ridingRoute = new BMap.RidingRoute(map, {
     *   onSearchComplete(results) {
     *     if (ridingRoute.getStatus() === 0) {
     *       const plan = results.getPlan(0);
     *       console.log('骑行距离：', plan.getDistance(true));
     *     }
     *   },
     * });
     * ```
     */
    constructor(location: Map | Point | string, opts?: RidingRouteOptions);
    /**
     * 发起骑行路线检索
     * @param start 起点，可以是关键字、坐标点或 LocalResultPoi 实例
     * @param end 终点，可以是关键字、坐标点或 LocalResultPoi 实例
     * @example
     * ```typescript
     * ridingRoute.search('北京大学', '清华大学');
     * ridingRoute.search(new BMap.Point(116.391, 39.910), new BMap.Point(116.431, 39.931));
     * ```
     */
    search(start: string | Point | LocalResultPoi, end: string | Point | LocalResultPoi): void;
    /**
     * 返回最近一次检索的结果
     */
    getResults(): RidingRouteResult;
    /**
     * 清除最近一次检索的结果，同时清除地图上的路线和标注
     */
    clearResults(): void;
    /**
     * 启用自动调整地图视野
     */
    enableAutoViewport(): void;
    /**
     * 禁用自动调整地图视野
     */
    disableAutoViewport(): void;
    /**
     * 设置检索区域
     * @param location 地图实例、坐标点或城市名称字符串
     * @example
     * ```typescript
     * ridingRoute.setLocation('北京');
     * ```
     */
    setLocation(location: Map | Point | string): void;
    /**
     * 设置检索结束后的回调函数
     * @param callback 回调函数
     * @example
     * ```typescript
     * ridingRoute.setSearchCompleteCallback((results) => {
     *   console.log('方案数:', results.getNumPlans());
     * });
     * ```
     */
    setSearchCompleteCallback(callback: (results: RidingRouteResult) => void): void;
    /**
     * 设置标注添加完成后的回调函数
     * @param callback 回调函数，参数为起终点 POI 数组
     * @example
     * ```typescript
     * ridingRoute.setMarkersSetCallback((pois) => {
     *   pois.forEach(poi => console.log(poi.title));
     * });
     * ```
     */
    setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void;
    /**
     * 设置气泡打开后的回调函数
     * @param callback 回调函数
     * @example
     * ```typescript
     * ridingRoute.setInfoHtmlSetCallback((poi, html) => {
     *   console.log(poi.title, html.innerHTML);
     * });
     * ```
     */
    setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void;
    /**
     * 设置路线折线添加完成后的回调函数
     * @param callback 回调函数，参数为折线覆盖物数组
     * @example
     * ```typescript
     * ridingRoute.setPolylinesSetCallback((polylines) => {
     *   polylines.forEach(pl => pl.setStrokeColor('orange'));
     * });
     * ```
     */
    setPolylinesSetCallback(callback: (polylines: Polyline[]) => void): void;
    /**
     * 设置结果列表创建后的回调函数
     * @param callback 回调函数
     * @example
     * ```typescript
     * ridingRoute.setResultsHtmlSetCallback((container) => {
     *   document.getElementById('results').appendChild(container);
     * });
     * ```
     */
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void;
    /**
     * 返回状态码
     */
    getStatus(): ServiceStatus;
  }
}

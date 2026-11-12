declare namespace BMap {
  /**
   * 电动车路线规划服务类，用于获取两点间的电动车出行方案。
   *
   * 用法与 {@link RidingRoute} 一致，构造参数和检索结果的结构也相同，区别在于：
   * 支持途经点；起终点必须同为关键字或同为坐标/POI，不能混用。
     */
  class EBikeRoute {
    /**
     * 创建电动车路线规划实例
     * @param location 检索区域，可以是地图实例、坐标点或城市名称字符串
     * @param opts 可选参数，与 RidingRoute 相同
     * @example
     * ```typescript
     * // 设置 renderOptions.map，路线和标注自动渲染到地图上
     * const ebikeRoute = new BMap.EBikeRoute(map, {
     *   renderOptions: { map: map, autoViewport: true },
     *   onSearchComplete(results) {
     *     console.log('路线已自动绘制到地图');
     *   },
     * });
     * ebikeRoute.search('北京大学', '清华大学');
     * ```
     * @example
     * ```typescript
     * // 设置展示面板 + viewportOptions.margins 避免面板遮挡路线聚焦区域
     * const ebikeRoute = new BMap.EBikeRoute(map, {
     *   renderOptions: {
     *     map: map,
     *     panel: 'route-panel',
     *     autoViewport: true,
     *     viewportOptions: { margins: [20, 20, 20, 300] },
     *   },
     * });
     * ebikeRoute.search(new BMap.Point(116.391, 39.910), new BMap.Point(116.431, 39.931));
     * ```
     * @example
     * ```typescript
     * // 纯回调用法，不自动渲染到地图
     * const ebikeRoute = new BMap.EBikeRoute(map, {
     *   onSearchComplete(results) {
     *     if (ebikeRoute.getStatus() === 0) {
     *       const plan = results.getPlan(0);
     *       console.log('电动车骑行距离：', plan.getDistance(true));
     *     }
     *   },
     * });
     * ```
     */
    constructor(location: Map | Point | string, opts?: RidingRouteOptions);
    /**
     * 发起电动车路线检索。起终点必须同为关键字，或同为坐标点/LocalResultPoi；
     * 混用时不发起检索，状态码置为 BMAP_STATUS_INVALID_REQUEST 并直接触发 onSearchComplete
     * @param start 起点，可以是关键字、坐标点或 LocalResultPoi 实例
     * @param end 终点，可以是关键字、坐标点或 LocalResultPoi 实例
     * @param options 检索参数
     * @example
     * ```typescript
     * ebikeRoute.search('北京大学', '清华大学');
     * ebikeRoute.search(
     *   new BMap.Point(116.391, 39.910),
     *   new BMap.Point(116.431, 39.931),
     *   { waypoints: [new BMap.Point(116.411, 39.920)] }
     * );
     * ```
     */
    search(start: string | Point | LocalResultPoi, end: string | Point | LocalResultPoi, options?: {
      /** 途经点坐标数组 */
      waypoints?: Point[];
    }): void;
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
     * ebikeRoute.setLocation('北京');
     * ```
     */
    setLocation(location: Map | Point | string): void;
    /**
     * 设置检索结束后的回调函数
     * @param callback 回调函数
     * @example
     * ```typescript
     * ebikeRoute.setSearchCompleteCallback((results) => {
     *   console.log('方案数:', results.getNumPlans());
     * });
     * ```
     */
    setSearchCompleteCallback(callback: (results: RidingRouteResult) => void): void;
    /**
     * 设置标注添加完成后的回调函数
     * @param callback 回调函数，参数为起终点 POI 数组
     */
    setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void;
    /**
     * 设置气泡打开后的回调函数
     * @param callback 回调函数
     */
    setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void;
    /**
     * 设置路线折线添加完成后的回调函数
     * @param callback 回调函数，参数为折线覆盖物数组
     */
    setPolylinesSetCallback(callback: (polylines: Polyline[]) => void): void;
    /**
     * 设置结果列表创建后的回调函数
     * @param callback 回调函数
     */
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void;
    /**
     * 设置路线折线的样式，配置项会增量合并到 renderOptions.polylineStyle，
     * 并立即刷新已经绘制在地图上的折线，无需重新检索
     * @param style 折线样式配置
     * @example
     * ```typescript
     * ebikeRoute.setPolylineStyle({
     *   strokeColor: '#1677ff',
     *   strokeWeight: 8,
     *   highlight: { strokeColor: '#ff4d4f' },
     * });
     * ```
     */
    setPolylineStyle(style: PolylineOptions): void;
    /**
     * 返回状态码
     */
    getStatus(): ServiceStatus;
  }
}

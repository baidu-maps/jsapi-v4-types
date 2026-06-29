declare namespace BMap {
  /**
   * 此类用于获取驾车路线规划方案（支持途经点）。
     */
  class DrivingRouteLine {
    /**
     * 创建一个驾车导航实例，location表示检索区域
     * @example
     * ```typescript
     * const drivingRouteLine = new BMap.DrivingRouteLine(map, {
     *   onSearchComplete(results) {
     *     console.log('途经点驾车检索完成', results);
     *   },
     * });
     * ```
     */
    constructor(location: Map | Point | string, opts?: DrivingRouteOptions);
    /** 发起检索，支持途经点
     * @example
     * ```typescript
     * drivingRouteLine.search(
     *   new BMap.Point(116.391, 39.910),
     *   new BMap.Point(116.491, 39.960),
     *   { waypoints: [new BMap.Point(116.431, 39.930)] }
     * );
     * ```
     */
    search(start: Point | LocalResultPoi, end: Point | LocalResultPoi, options?: { waypoints?: Array<Point> | string }): void;
    /** 返回最近一次检索的结果 */
    getResults(): DrivingRouteResult;
    /** 清除最近一次检索的结果 */
    clearResults(): void;
    /** 启用自动调整地图层级 */
    enableAutoViewport(): void;
    /** 禁用自动调整地图层级 */
    disableAutoViewport(): void;
    /** 设置路线规划策略
     * @example
     * ```typescript
     * drivingRouteLine.setPolicy(BMAP_DRIVING_POLICY_AVOID_HIGHWAYS);
     * ```
     */
    setPolicy(policy: DrivingPolicy): void;
    /** 设置检索结束后的回调函数
     * @example
     * ```typescript
     * drivingRouteLine.setSearchCompleteCallback((results) => {
     *   console.log('检索完成', results);
     * });
     * ```
     */
    setSearchCompleteCallback(callback: Function): void;
    /** 设置添加标注后的回调函数
     * @example
     * ```typescript
     * drivingRouteLine.setMarkersSetCallback((markers) => {
     *   console.log('标注已添加', markers);
     * });
     * ```
     */
    setMarkersSetCallback(callback: Function): void;
    /** 设置添加路线后的回调函数
     * @example
     * ```typescript
     * drivingRouteLine.setPolylinesSetCallback((polylines) => {
     *   console.log('路线已添加', polylines);
     * });
     * ```
     */
    setPolylinesSetCallback(callback: Function): void;
    /** 返回状态码 */
    getStatus(): ServiceStatus;
    /** 展示路线 */
    showRoute(): void;
    /** 隐藏路线 */
    hideRoute(): void;
  }
}

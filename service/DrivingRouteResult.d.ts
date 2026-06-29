declare namespace BMap {
  /**
   * 驾车路线规划的结果，通过 DrivingRoute.getResults() 或 onSearchComplete 回调获得
   */
  interface DrivingRouteResult {
    /**
     * 驾车导航策略
     */
    policy: DrivingPolicy;
    /**
     * 返回起点
     */
    getStart(): LocalResultPoi;
    /**
     * 返回终点
     */
    getEnd(): LocalResultPoi;
    /**
     * 返回方案个数
     */
    getNumPlans(): number;
    /**
     * 返回索引指定的方案，索引 0 表示第一条方案
     * @example
     * ```typescript
     * const routePlan = drivingRouteResult.getPlan(0);
     * console.log(routePlan.getDistance(true));
     * ```
     */
    getPlan(i: number): RoutePlan;
  }
}

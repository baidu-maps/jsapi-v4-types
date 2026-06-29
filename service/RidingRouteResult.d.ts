declare namespace BMap {
  /**
   * 骑行路线规划的结果，通过 RidingRoute.getResults() 或 onSearchComplete 回调获得
   */
  interface RidingRouteResult {
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
     * 返回索引指定的方案。索引0表示第一条方案
     * @example
     * ```typescript
     * const routePlan = ridingRouteResult.getPlan(0);
     * console.log(routePlan.getDistance(true));
     * ```
     */
    getPlan(i: number): RoutePlan;
  }
}

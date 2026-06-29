declare namespace BMap {
  /**
   * 此类表示一条驾车、步行或骑行出行方案。它没有构造函数，可通过DrivingRouteResult.getPlan()方法或WalkingRouteResult类的getPlan()方法获得。
   */
  class RoutePlan {
    /**
     * 返回方案包含的线路的个数
     */
    getNumRoutes(): number;
    /**
     * 返回方案中索引指定的线路。索引0表示第一条线路
     * @example
     * ```typescript
     * const route = routePlan.getRoute(0);
     * console.log(route.getDistance(true)); // '12.5公里'
     * ```
     */
    getRoute(i: number): Route;
    /**
     * 返回方案总距离。当format参数为true时，返回方案距离字符串（包含单位），当format为false时，仅返回数值（单位为米）信息。默认参数为true
     * @example
     * ```typescript
     * const distanceText = routePlan.getDistance(true); // '12.5公里'
     * const distanceNum = routePlan.getDistance(false); // 12500
     * ```
     */
    getDistance(format: boolean): string | number;
    /**
     * 返回方案总时间。当format参数为true时，返回描述时间的字符串（包含单位），当format为false时，仅返回数值（单位为秒）信息。默认参数为true
     * @example
     * ```typescript
     * const durationText = routePlan.getDuration(true); // '约25分钟'
     * const durationNum = routePlan.getDuration(false); // 1500
     * ```
     */
    getDuration(format: boolean): string | number;
    /**
     * 返回方案的拖拽点信息
     */
    getDragPois(): LocalResultPoi[];
    /**
     * 返回出租车费用信息
     */
    getTaxiFare(): TaxiFare;
  }
}

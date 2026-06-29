declare namespace BMap {
  /**
   * 此类表示一条公交出行方案。没有构造函数，通过TransitRouteResult.getPlan()方法获得。
   */
  class TransitRoutePlan {
    /**
     * 返回方案包含的公交线路段数(如果是跨城检索，还包括飞机、火车、大巴线路)
     */
    getNumLines(): number;
    /**
     * 返回方案包含的某条公交线路(如果是跨城检索，还包括飞机、火车、大巴线路)
     * @example
     * ```typescript
     * const line = transitPlan.getLine(0);
     * ```
     */
    getLine(i: number): Line;
    /**
     * 返回方案包含的步行线路段数
     */
    getNumRoutes(): number;
    /**
     * 返回方案中索引指定的步行线路
     * @example
     * ```typescript
     * const route = transitRoutePlan.getRoute(0);
     * console.log(route.getDistance(true));
     * ```
     */
    getRoute(i: number): Route;
    /**
     * 返回方案总距离。当format参数为true时，返回方案距离字符串（包含单位），当format为false时，仅返回数值（单位为米）信息。默认参数为true
     * @example
     * ```typescript
     * const distance = transitPlan.getDistance(true); // '15.3公里'
     * ```
     */
    getDistance(format: boolean): string | number;
    /**
     * 返回方案总时间。当format参数为true时，返回描述时间的字符串（包含单位），当format为false时，仅返回数值（单位为秒）信息。默认参数为true
     * @example
     * ```typescript
     * const duration = transitPlan.getDuration(true); // '约45分钟'
     * ```
     */
    getDuration(format: boolean): string | number;
    /**
     * 返回方案描述文本，默认包含HTML标签。当includeHtml为false时，方案描述不包含HTML标签
     * @example
     * ```typescript
     * const desc = transitPlan.getDescription(false);
     * ```
     */
    getDescription(includeHtml: boolean): string;
    /**
     * 返回方案中各线路名称的拼接文本，如"线路1 → 线路2"
     */
    getLinesTitle(): string;
    /**
     * 返回方案总步行距离，单位为米
     */
    getWalkDistance(): number;
    /**
     * 返回指定路段的交通方式类型，分别对应Line和Route
     * @example
     * ```typescript
     * const type = transitPlan.getTotalType(0);
     * ```
     */
    getTotalType(i: number): TransitPlanType;
    /**
     * 返回整个方案包含的某段线路，根据方案的数据情况，返回值可能是步行对象Route也有可能是线路对象Line
     * @example
     * ```typescript
     * const segment = transitPlan.getTotal(0);
     * ```
     */
    getTotal(i: number): Route | Line;
    /**
     * 总路段数量
     */
    getNumTotal(): number;
  }
}

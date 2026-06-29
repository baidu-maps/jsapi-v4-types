declare namespace BMap {
  /**
   * 公交路线规划的结果，通过 TransitRoute.getResults() 或 onSearchComplete 回调获得
   */
  interface TransitRouteResult {
    /**
     * 城市内公交策略
     */
    policy: TransitPolicy;
    /**
     * 跨城策略（仅跨城时有值）
     */
    intercityPolicy?: IntercityPolicy;
    /**
     * 跨城交通方式策略（仅跨城时有值）
     */
    transitTypePolicy?: TransitVehicleType;
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
     * const transitRoutePlan = transitRouteResult.getPlan(0);
     * console.log(transitRoutePlan.getDuration(true));
     * ```
     */
    getPlan(i: number): TransitRoutePlan;
    /**
     * 返回出行类型（市内公交 or 跨城公交）
     */
    getTransitType(): TransitType;
  }
}

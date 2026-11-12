declare namespace BMap {
  /**
   * 此类表示货车路线规划的结果。不可实例化，通过 {@link TruckRoute#getResults}
   * 或 {@link TruckRouteOptions#onSearchComplete} 回调获得。
   */
  interface TruckRouteResult {
    /**
     * 本次检索的途经点，为 `'lat,lng|lat,lng'` 形式的字符串；未设置途经点时为空数组
     */
    waypoints: string | [];
    /**
     * 返回起点。`title` 固定为"起点"，`point` 取服务端返回的路线起点坐标
     */
    getStart(): {
      /** 名称 */
      title: string;
      /** 坐标 */
      point: Point;
    };
    /**
     * 返回终点。`title` 固定为"终点"，`point` 取服务端返回的路线终点坐标
     */
    getEnd(): {
      /** 名称 */
      title: string;
      /** 坐标 */
      point: Point;
    };
    /**
     * 返回方案个数
     */
    getNumPlans(): number;
    /**
     * 返回索引指定的方案，索引 0 表示第一条方案
     * @param i 方案序号
     * @example
     * ```typescript
     * const plan = truckRouteResult.getPlan(0);
     * console.log(plan.getDistance(false), plan.getToll());
     * ```
     */
    getPlan(i: number): TruckRoutePlan;
  }
}

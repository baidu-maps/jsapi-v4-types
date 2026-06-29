declare namespace BMap {
  /**
   * 此类表示一条DrivingRouteLine出行方案。通过DrivingRouteResult.getPlan()方法获得。
     */
  interface DrivingRoutePlan {
    /** 返回方案包含的线路的个数 */
    getNumLines(): number;
    /** 返回方案中索引指定的线路 */
    getLine(i: number): object;
    /** 返回方案总距离。format为true时返回字符串（含单位），为false时返回数值（米） */
    getDistance(format?: boolean): string | number;
    /** 返回方案总时间。format为true时返回字符串（含单位），为false时返回数值（秒） */
    getDuration(format?: boolean): string | number;
    /** 此路线道路收费，单位：元 */
    getToll(): number;
    /** 油费，单位元 */
    getOilCost(): number;
  }
}

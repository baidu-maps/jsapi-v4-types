declare namespace BMap {
  /**
   * 此类表示一条公交线路，如果是跨城检索，还有可能表示一条飞机、火车或大巴线路。没有构造函数，通过TransitRoutePlan.getLine()方法得到。
   */
  class Line {
    /**
     * 返回公交线路途径的车站个数，仅在公交和地铁类型有效
     */
    getNumViaStops(): number;
    /**
     * 返回上车站
     */
    getGetOnStop(): LocalResultPoi;
    /**
     * 返回下车站
     */
    getGetOffStop(): LocalResultPoi;
    /**
     * 返回线路对应的地理坐标点数组，在公交方案中，地理坐标只给出方案涉及的部分
     */
    getPath(): Point[];
    /**
     * 返回公交线路对应的折线覆盖物
     */
    getPolyline(): Polyline;
    /**
     * 当format为true时，返回本段公交线路的距离字符串（包含单位），当format为false时仅返回数值（单位为米）。默认参数为true
     * @example
     * ```typescript
     * const distanceText = line.getDistance(true); // '3.5公里'
     * const distanceNum = line.getDistance(false); // 3500
     * ```
     */
    getDistance(format: boolean): string | number;
    /**
     * 线路全称
     */
    title: string;
    /**
     * 线路类型
     */
    type: LineType;
    /**
     * 返回线路名称
     */
    getTitle(): string;
  }
}

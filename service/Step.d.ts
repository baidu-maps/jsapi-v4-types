declare namespace BMap {
  /**
   * 此类表示驾车、步行或骑行路线中的一个关键点。它没有构造函数，通过Route.getStep()方法获得。
   */
  class Step {
    /**
     * 返回关键点地理坐标
     */
    getPosition(): Point;
    /**
     * 返回本关键点在路线中的位置索引
     */
    getIndex(): number;
    /**
     * 返回关键点描述文本，默认包含HTML标签。当includeHtml为false时，描述文本不包含HTML标签。不支持驾车路线规划
     * @example
     * ```typescript
     * const desc = step.getDescription(false); // '向东行走200米'
     * const descHtml = step.getDescription(true); // '<b>向东</b>行走200米'
     * ```
     */
    getDescription(includeHtml: boolean): string;
    /**
     * 返回到下一个关键点的距离，当format为false时仅返回数值（单位为米）
     * @example
     * ```typescript
     * const distanceText = step.getDistance(true); // '200米'
     * const distanceNum = step.getDistance(false); // 200
     * ```
     */
    getDistance(format: boolean): string | number;
    /**
     * 返回本关键点所属路线的索引
     */
    getRouteIndex(): number;
    /**
     * 返回本关键点所属方案的索引
     */
    getPlanIndex(): number;
  }
}

declare namespace BMap {
  /**
   * 此类表示一条驾车、步行或骑行路线。
   */
  class Route {
    /**
     * 返回路线包含的关键点个数
     */
    getNumSteps(): number;
    /**
     * 返回索引指定的关键点，驾车和步行适用。索引0表示第一个关键点
     * @example
     * ```typescript
     * const step = route.getStep(0);
     * console.log(step.getDescription(false));
     * ```
     */
    getStep(i: number): Step;
    /**
     * 返回路线距离，当format为false时仅返回数值
     * @example
     * ```typescript
     * const distanceText = route.getDistance(true); // '5.2公里'
     * const distanceNum = route.getDistance(false); // 5200
     * ```
     */
    getDistance(format: boolean): string | number;
    /**
     * 返回本路线在方案中的索引位置
     */
    getIndex(): number;
    /**
     * 返回路线对应的覆盖物，仅当结果自动添加到地图上时有效
     */
    getPolyline(): Polyline;
    /**
     * 返回路线的地理坐标点数组
     */
    getPath(): Point[];
    /**
     * 返回路线类型，可区分是驾车还是步行线路
     */
    getRouteType(): RouteType;
    /**
     * 返回本路线所属方案的索引
     */
    getPlanIndex(): number;
  }
}

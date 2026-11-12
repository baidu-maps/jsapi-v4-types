declare namespace BMap {
  /**
   * 货车路线规划服务类，用于获取两点间的货车出行方案。 路线改用线图层绘制，折线样式配置对它无效
   *
   * 支持途经点、货车用途、限行限重、禁用轮渡等货车专有参数，结果中带道路名、收费站、
   * 分段路况信息。与 {@link DrivingRoute} 的区别：起终点只接受坐标，不支持关键字和 POI；
   * 方案按路段组织，用 {@link TruckRoutePlan#getLine} 取数据。
   */
  class TruckRoute {
    /**
     * 创建货车路线规划实例。第二个参数不可省略，省略时构造会报错，不需要配置时传空对象即可
     * @param location 检索区域，可以是地图实例、坐标点或城市名称字符串
     * @param opts 可选参数
     * @example
     * ```typescript
     * // 设置 renderOptions.map，路线和标注自动渲染到地图上
     * const truckRoute = new BMap.TruckRoute(map, {
     *   renderOptions: { map: map, autoViewport: true },
     *   onSearchComplete(results) {
     *     console.log('货车路线已绘制，方案数：', results.getNumPlans());
     *   },
     * });
     * truckRoute.search(new BMap.Point(116.391, 39.910), new BMap.Point(116.431, 39.931));
     * ```
     * @example
     * ```typescript
     * // 纯回调用法，不自动渲染到地图，自行用 LineLayer 绘制
     * const truckRoute = new BMap.TruckRoute(map, {});
     * truckRoute.setSearchCompleteCallback((results) => {
     *   if (truckRoute.getStatus() !== 0) {
     *     return;
     *   }
     *   const plan = results.getPlan(0);
     *   console.log('距离', plan.getDistance(false), '过路费', plan.getToll());
     * });
     * truckRoute.search(new BMap.Point(116.391, 39.910), new BMap.Point(116.431, 39.931));
     * ```
     */
    constructor(location: Map | Point | string, opts: TruckRouteOptions);
    /**
     * 发起货车路线检索。起终点必须为坐标，传入关键字或 POI 时直接返回、不发起检索也不触发回调
     * @param start 起点坐标
     * @param end 终点坐标
     * @param options 货车检索参数。拖拽路线触发的重新检索会沿用上一次的参数
     * @example
     * ```typescript
     * truckRoute.search(
     *   new BMap.Point(116.391, 39.910),
     *   new BMap.Point(116.431, 39.931),
     *   { waypoints: [new BMap.Point(116.411, 39.920)], disable_ferry: 1 }
     * );
     * ```
     */
    search(start: Point, end: Point, options?: {
      /** 途经点坐标数组 */
      waypoints?: Point[];
      /**
       * 货车用途列表
       * @default 0
       */
      vehicle_usages?: number;
      /**
       * 是否忽略限行限重
       * @default 0
       */
      avoid_type?: number;
      /**
       * 是否禁用轮渡
       * @default 0
       */
      disable_ferry?: number;
    }): void;
    /**
     * 返回最近一次检索的结果
     */
    getResults(): TruckRouteResult;
    /**
     * 清除最近一次检索的结果，同时清除地图上的路线和标注
     */
    clearResults(): void;
    /**
     * 启用自动调整地图视野，当指定了搜索结果展现的地图时有效
     */
    enableAutoViewport(): void;
    /**
     * 禁用自动调整地图视野
     */
    disableAutoViewport(): void;
    /**
     * 设置货车路线规划策略
     * @param policy 策略常量，超出货车支持范围时回落到 `BMAP_DRIVING_POLICY_DEFAULT`
     * @example
     * ```typescript
     * truckRoute.setPolicy(BMAP_DRIVING_POLICY_AVOID_CONGESTION);
     * ```
     */
    setPolicy(policy: DrivingPolicy): void;
    /**
     * 设置检索区域
     * @param location 地图实例、坐标点或城市名称字符串
     */
    setLocation(location: Map | Point | string): void;
    /**
     * 设置检索结束后的回调函数
     * @param callback 回调函数
     * @example
     * ```typescript
     * truckRoute.setSearchCompleteCallback((results) => {
     *   console.log('方案数:', results.getNumPlans());
     * });
     * ```
     */
    setSearchCompleteCallback(callback: (results: TruckRouteResult) => void): void;
    /**
     * 设置起终点标注添加完成后的回调函数
     * @param callback 回调函数，参数为添加到地图上的覆盖物数组
     */
    setMarkersSetCallback(callback: (markers: Overlay[]) => void): void;
    /**
     * 显示已绘制在地图上的路线
     */
    showRoute(): void;
    /**
     * 隐藏已绘制在地图上的路线，不清除检索结果
     */
    hideRoute(): void;
    /**
     * 返回状态码
     */
    getStatus(): ServiceStatus;
  }
}

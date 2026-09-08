declare namespace BMap {
  /**
   * 此类表示路线规划服务检索结果呈现的配置。它没有构造函数，但可通过对象字面量形式表示。 相比 RenderOptions 增加了路线折线的样式配置 polylineStyle
   */
  interface RouteRenderOptions extends RenderOptions {
    /**
     * 路线折线的样式。仅对使用 Polyline 绘制路线的服务类生效，即 DrivingRoute、WalkingRoute、
     * RidingRoute、TransitRoute。
     * 开启 enableTraffic 后按路况分段着色的折线不受此配置影响。
     * @example
     * ```typescript
     * const drivingRoute = new BMap.DrivingRoute(map, {
     *   renderOptions: {
     *     map: map,
     *     polylineStyle: {
     *       // 平铺的 Polyline 参数作为所有路线折线的基准样式
     *       strokeWeight: 8,
     *       strokeColor: '#1677ff',
     *       // 具名分桶在基准样式之上按路线类型覆盖
     *       highlight: { strokeColor: '#ff4d4f' },
     *     },
     *   },
     * });
     * ```
     */
    polylineStyle?: PolylineOptions;
  }
}

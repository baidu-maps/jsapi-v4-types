declare namespace BMap {
  /**
   * TruckRoute 构造函数的可选参数。
   *
   * 与 {@link DrivingRouteOptions} 的区别是不支持 `renderOptions.polylineStyle`：
   * 货车路线用线图层绘制，折线样式配置对它无效。
   */
  interface TruckRouteOptions {
    /**
     * 结果呈现设置
     */
    renderOptions?: RenderOptions;
    /**
     * 货车路线规划策略，取值范围为 `BMAP_DRIVING_POLICY_DEFAULT` 到
     * `BMAP_DRIVING_POLICY_AVOID_CONGESTION`，超出范围会回落到 `BMAP_DRIVING_POLICY_DEFAULT`
     * @default BMAP_DRIVING_POLICY_DEFAULT
     */
    policy?: DrivingPolicy;
    /**
     * 检索完成后的回调函数
     */
    onSearchComplete?: (results: TruckRouteResult) => void;
    /**
     * 起终点标注添加完成后的回调函数，参数为添加到地图上的覆盖物数组
     */
    onMarkersSet?: (markers: Overlay[]) => void;
  }
}

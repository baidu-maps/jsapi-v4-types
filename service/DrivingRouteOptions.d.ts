declare namespace BMap {
  /**
   * DrivingRoute 构造函数的可选参数
   */
  interface DrivingRouteOptions {
    /**
     * 结果呈现设置
     */
    renderOptions?: RouteRenderOptions;
    /**
     * 驾车路线规划策略
     */
    policy?: DrivingPolicy;
    /**
     * 是否显示多种（备选）方案，仅在非 GL 模式下生效
     * @default false
     */
    alternatives?: boolean;
    /**
     * 是否显示实时路况
     * @default true（3.0），false（4.0）
     */
    enableTraffic?: boolean;
    /**
     * 检索完成后的回调函数
     */
    onSearchComplete?: (results: DrivingRouteResult) => void;
    /**
     * 标注添加完成后的回调函数，参数为起终点 POI 数组
     */
    onMarkersSet?: (pois: LocalResultPoi[]) => void;
    /**
     * 标注气泡内容创建后的回调函数
     */
    onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void;
    /**
     * 路线折线添加完成后的回调函数，参数为折线覆盖物数组
     */
    onPolylinesSet?: (polylines: Polyline[]) => void;
    /**
     * 结果列表创建后的回调函数
     */
    onResultsHtmlSet?: (container: HTMLElement) => void;
  }
}

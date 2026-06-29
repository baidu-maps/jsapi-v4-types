declare namespace BMap {
  /**
   * DrivingRoute 构造函数的可选参数
   */
  interface DrivingRouteOptions {
    /**
     * 结果呈现设置
     */
    renderOptions?: RenderOptions;
    /**
     * 驾车路线规划策略
     */
    policy?: DrivingPolicy;
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

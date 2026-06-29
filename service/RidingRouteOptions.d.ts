declare namespace BMap {
  /**
   * RidingRoute 构造函数的可选参数
   */
  interface RidingRouteOptions {
    /**
     * 结果呈现设置
     */
    renderOptions?: RenderOptions;
    /**
     * 检索完成后的回调函数
     */
    onSearchComplete?: (results: RidingRouteResult) => void;
    /**
     * 标注添加完成后的回调函数，参数为起终点 POI 数组
     */
    onMarkersSet?: (pois: LocalResultPoi[]) => void;
    /**
     * 路线折线添加完成后的回调函数，参数为折线覆盖物数组
     */
    onPolylinesSet?: (polylines: Polyline[]) => void;
    /**
     * 标注气泡内容创建后的回调函数
     */
    onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void;
    /**
     * 结果列表创建后的回调函数
     */
    onResultsHtmlSet?: (container: HTMLElement) => void;
  }
}

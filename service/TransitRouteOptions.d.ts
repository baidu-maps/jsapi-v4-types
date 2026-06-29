declare namespace BMap {
  /**
   * TransitRoute 构造函数的可选参数
   */
  interface TransitRouteOptions {
    /**
     * 结果呈现设置
     */
    renderOptions?: RenderOptions;
    /**
     * 市内公交的换乘策略
     */
    policy?: TransitPolicy;
    /**
     * 跨城公交的换乘策略
     */
    intercityPolicy?: IntercityPolicy;
    /**
     * 跨城公交的交通方式策略
     */
    transitTypePolicy?: TransitVehicleType;
    /**
     * 每页返回的方案个数，范围 1 - 5
     */
    pageCapacity?: number;
    /**
     * 检索完成后的回调函数
     */
    onSearchComplete?: (results: TransitRouteResult) => void;
    /**
     * 标注添加完成后的回调函数，参数为起终点和换乘站 POI 数组
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

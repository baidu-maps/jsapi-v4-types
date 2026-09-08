declare namespace BMap {
  /**
   * 地点详情组件，用于在指定容器中展示 POI 的详细信息（如图片、标签、评分、价格等）。
   * 适用于地图应用中点击标注后展示地点详情面板、POI 信息卡片等场景，可独立渲染也可与 Marker 结合使用。
   */
  class PlaceDetail {

    /**
     * 创建地点详情面板实例
     * @param container 容器元素的 id 字符串或 HTMLElement 节点
     * @param options 配置参数
     * @example
     * ```typescript
     * const panel = document.createElement('div');
     * const placeDetail = new BMap.PlaceDetail(panel, {
     *   renderOptions: {
     *     displayCarousel: true,
     *     displayTag: true,
     *     displayRating: true,
     *     displayPrice: true,
     *   },
     * });
     * placeDetail.render('06d2dffda107b0ef89f15db6');
     * ```
     * @example 与标注结合使用
     * ```typescript
     * const placeDetail = new BMap.PlaceDetail(document.createElement('div'));
     * placeDetail.setData('06d2dffda107b0ef89f15db6');
     * marker.openPlaceDetail(placeDetail);
     * ```
     */
    constructor(panel: string | HTMLElement, options?: PlaceDetailOptions);
    /**
     * 根据 POI uid 或数据对象渲染地点详情
     * @param data POI uid 字符串或已解析的地点数据对象
     * @example
     * ```typescript
     * placeDetail.render('06d2dffda107b0ef89f15db6');
     * ```
     */
    render(data: string | object): void;
    /**
     * 使用上一次的数据重新渲染
     */
    rerender(): void;
    /**
     * 仅设置数据，不触发渲染（通常配合 Marker的openPlaceDetail 使用）
     * @param data POI uid 字符串或已解析的地点数据对象
     * @example
     * ```typescript
     * placeDetail.setData('06d2dffda107b0ef89f15db6');
     * ```
     */
    setData(data: string | object): void;
    /**
     * 销毁面板，清空内容并隐藏容器
     */
    dispose(): void;
  }
}

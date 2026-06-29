declare namespace BMap {
  /**
   * 此类表示搜索结果呈现的配置。它没有构造函数，但可通过对象字面量形式表示。
   */
  interface RenderOptions {
    /**
     * 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上
     */
    map?: Map;
    /**
     * 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。此属性对LocalCity无效。驾车路线规划无效
     */
    panel?: string | HTMLElement;
    /**
     * 是否选择第一个检索结果。此属性仅对LocalSearch有效
     */
    selectFirstResult?: boolean;
    /**
     * 检索结束后是否自动调整地图视野。此属性对LocalCity无效
     */
    autoViewport?: boolean;
    /**
     * 自动调整地图视野时的视野计算选项，仅在 autoViewport 为 true 时生效
     */
    viewportOptions?: ViewportOptions;
  }
}

declare namespace BMap {
  /**
   * 此类表示PlaceDetail构造函数的可选参数。
   */
  interface PlaceDetailOptions {
    /**
     * 渲染选项，控制各信息模块的显示
     */
    renderOptions?: PlaceDetailRenderOptions;
    /**
     * 是否使用紧凑模式（地图内 overlay 展示时自动启用），默认 false
     */
    compact?: boolean;
  }
}

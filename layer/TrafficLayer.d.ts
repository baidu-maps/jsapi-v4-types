declare namespace BMap {
  /**
   * 此类表示交通流量图层，是一个预配置的TileLayer。 通过 map.addLayer() / map.removeLayer() 方法管理。
   */
  class TrafficLayer extends TileLayer {
    /**
     * 创建交通流量图层
     * @example
     * ```typescript
     * const trafficLayer = new BMap.TrafficLayer();
     * map.addLayer(trafficLayer);
     * ```
     */
    constructor();
    /**
     * 修改路况颜色
     * @param colors 路况颜色数组，按畅通、缓行、拥堵、严重拥堵顺序，支持CSS颜色字符串
     * @example
     * ```typescript
     * trafficLayer.setColors(['#00ff00', '#ffff00', '#ff8800', '#ff0000']);
     * ```
     */
    setColors(colors: string[]): void;
    /**
     * 设置路况是否展示白边, 交通流量图默认会绘制白色描边用于提升边界视觉效果，但在某些场景下可能不希望展示白边，可以设置为关闭
     * @param value 是否展示白边
     * @example
     * ```typescript
     * trafficLayer.setEdge(true);
     * ```
     * @example
     * ```typescript
     * trafficLayer.setEdge(false);
     * ```
     */
    setEdge(value: boolean): void;
  }
}

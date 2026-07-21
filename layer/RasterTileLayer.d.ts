declare namespace BMap {
  /**
   * 栅格瓦片图层，用于加载XYZ/TMS类标准瓦片服务。
   * 支持通过URL模板或回调函数指定瓦片地址，支持子域名轮询、TMS翻转、
   * 范围裁剪、跨级别复用等能力。
     */
  class RasterTileLayer {
    /**
     * 创建栅格瓦片图层实例
     * @param options 栅格瓦片图层配置选项
     * @example 加载OpenStreetMap瓦片
     * ```typescript
     * const rasterLayer = new BMap.RasterTileLayer({
     *   url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
     *   subdomains: ['a', 'b', 'c'],
     *   maxZoom: 19
     * });
     * map.addLayer(rasterLayer);
     * ```
     * @example 加载TMS服务（y轴翻转）
     * ```typescript
     * const tmsLayer = new BMap.RasterTileLayer({
     *   url: 'https://yourhost/tms/{z}/{x}/{-y}.png',
     *   minZoom: 1,
     *   maxZoom: 18
     * });
     * map.addLayer(tmsLayer);
     * ```
     * @example 使用回调函数动态生成瓦片地址
     * ```typescript
     * const layer = new BMap.RasterTileLayer({
     *   url: function(x, y, z) {
     *     return 'https://yourhost/tiles/' + z + '/' + x + '/' + y + '.png?token=xxx';
     *   }
     * });
     * map.addLayer(layer);
     * ```
     * @example 限定加载范围
     * ```typescript
     * const layer = new BMap.RasterTileLayer({
     *   url: 'https://yourhost/{z}/{x}/{y}.png',
     *   bounds: [115.5, 39.0, 117.5, 41.0],
     *   boundsInWGS84: true
     * });
     * map.addLayer(layer);
     * ```
     */
    constructor(options: RasterTileLayerOptions);
    /**
     * 图层家族标志位，运行时真实存在于实例原型上（本类构造实际返回 TileLayer 实例），
     * `Map.addLayer()` 依据它分发图层
     * @hidden
     */
    readonly isTileLayer: true;
    /**
     * 设置图层的叠加顺序
     * @param zIndex 层级值
     */
    setZIndex(zIndex: number): void;
    /**
     * 设置图层掩膜，在掩膜区域内显示瓦片
     * @param boundary 掩膜边界坐标字符串或字符串数组
     */
    addBoundary(boundary: string | string[]): void;
    /**
     * 清空图层掩膜
     */
    clearBoundary(): void;
    /**
     * 清除瓦片缓存并强制重新加载
     */
    clearCache(): void;
  }
}

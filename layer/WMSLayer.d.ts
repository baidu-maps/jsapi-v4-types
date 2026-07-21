declare namespace BMap {
  /**
   * WMS图层，用于加载瓦片式WMS地图服务。
   * 内部自动拼接WMS标准请求参数（SERVICE、REQUEST、VERSION、FORMAT、CRS/SRS等），
   * 并通过BBOX、WIDTH、HEIGHT驱动瓦片请求。
   * 用户只需提供服务地址和图层参数（LAYERS）即可快速接入WMS服务。
     */
  class WMSLayer {
    /**
     * 创建WMS图层实例
     * @param options WMS图层配置选项
     * @example 加载GeoServer WMS服务
     * ```typescript
     * const wmsLayer = new BMap.WMSLayer({
     *   url: 'https://yourhost/geoserver/wms',
     *   params: {
     *     LAYERS: 'workspace:layername',
     *     VERSION: '1.1.1',
     *     FORMAT: 'image/png',
     *     TRANSPARENT: 'true'
     *   },
     *   minZoom: 3,
     *   maxZoom: 18
     * });
     * map.addLayer(wmsLayer);
     * ```
     * @example 加载多图层WMS服务
     * ```typescript
     * const wmsLayer = new BMap.WMSLayer({
     *   url: 'https://yourhost/geoserver/wms',
     *   params: {
     *     LAYERS: 'layer1,layer2,layer3',
     *     STYLES: 'style1,style2,style3'
     *   },
     *   tileSize: 512,
     *   opacity: 0.8
     * });
     * map.addLayer(wmsLayer);
     * ```
     */
    constructor(options: WMSLayerOptions);
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

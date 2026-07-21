declare namespace BMap {
  /**
   * WMTS图层，用于加载WMTS标准瓦片服务。
   * 内部自动拼接WMTS标准请求参数（Service、Request、Version、Format、TileMatrixSet等），
   * 用户只需提供服务地址和图层参数即可快速加载WMTS瓦片。
     */
  class WMTSLayer {
    /**
     * 创建WMTS图层实例
     * @param options WMTS图层配置选项
     * @example 加载天地图影像WMTS服务
     * ```typescript
     * const wmtsLayer = new BMap.WMTSLayer({
     *   url: 'https://t0.tianditu.gov.cn/img_w/wmts',
     *   params: {
     *     Layer: 'img',
     *     Style: 'default',
     *     TileMatrixSet: 'w',
     *     Format: 'tiles',
     *     tk: '你的天地图key'
     *   },
     *   minZoom: 1,
     *   maxZoom: 18
     * });
     * map.addLayer(wmtsLayer);
     * ```
     * @example 加载GeoServer WMTS服务
     * ```typescript
     * const wmtsLayer = new BMap.WMTSLayer({
     *   url: 'https://yourhost/geoserver/gwc/service/wmts',
     *   params: {
     *     Layer: 'workspace:layername',
     *     Style: '',
     *     TileMatrixSet: 'EPSG:3857',
     *     Format: 'image/png'
     *   }
     * });
     * map.addLayer(wmtsLayer);
     * ```
     */
    constructor(options: WMTSLayerOptions);
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

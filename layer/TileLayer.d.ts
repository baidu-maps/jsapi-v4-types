declare namespace BMap {
  /**
   * 自定义瓦片图层类，用于加载百度坐标系(BD09MC)的自定义瓦片。
   * 与 XYZLayer 的区别：TileLayer 适用于自有瓦片服务且数据已为百度坐标系，无需坐标转换；
   * XYZLayer 适用于第三方标准瓦片服务（XYZ/WMTS/WMS/TMS），内置 EPSG:3857→BD09MC 坐标转换。
   */
  class TileLayer {
    /**
     * 创建地图图层实例
     * @param opts 可选参数
     * @example
     * ```typescript
     * const tileLayer = new BMap.TileLayer({
     *   tileUrlTemplate: 'https://yourhost/tile?x={X}&y={Y}&z={Z}.png',
     *   transparentPng: true,
     * });
     * map.addLayer(tileLayer);
     * ```
     */
    constructor(opts?: TileLayerOptions);
    /**
     * 返回指定图块坐标和缩放级别的瓦片图片URL。
     * 若在 TileLayerOptions 中提供了 tileUrlTemplate 则可不实现此方法
     * @param tileCoord 图块坐标
     * @param zoom 缩放级别
     * @example
     * ```typescript
     * const tileLayer = new BMap.TileLayer();
     * tileLayer.getTilesUrl = function(tileCoord, zoom) {
     *   return `https://yourhost/tile?x=${tileCoord.x}&y=${tileCoord.y}&z=${zoom}.png`;
     * };
     * ```
     */
    getTilesUrl(tileCoord: Pixel, zoom: number): string;
    /**
     * 返回图层所用图片是否为包含透明信息的PNG格式
     */
    isTransparentPng(): boolean;
    /**
     * 设置图层的叠加顺序
     * @param zIndex 层级值
     * @example
     * ```typescript
     * tileLayer.setZIndex(5);
     * ```
     */
    setZIndex(zIndex: number): void;
    /**
     * 设置图层掩膜，在掩膜区域内显示瓦片
     * @param boundary 掩膜边界坐标字符串或字符串数组
     * @example
     * ```typescript
     * tileLayer.addBoundary('北京市');
     * ```
     */
    addBoundary(boundary: string | string[]): void;
    /**
     * 清空图层掩膜
     */
    clearBoundary(): void;
    /**
     * 隐藏图层
     * @example
     * ```typescript
     * tileLayer.hide();
     * ```
     */
    hide(): void;
    /**
     * 显示图层
     * @example
     * ```typescript
     * tileLayer.show();
     * ```
     */
    show(): void;
    /**
     * 返回图层是否可见
     */
    isVisible(): boolean;
    /**
     * 清除瓦片缓存并强制重新加载
     * @example
     * ```typescript
     * tileLayer.clearCache();
     * ```
     */
    clearCache(): void;
    /**
     * 将图层移至最顶层
     * @example
     * ```typescript
     * tileLayer.setZIndexTop();
     * ```
     */
    setZIndexTop(): void;
  }
}

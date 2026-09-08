declare namespace BMap {
  /**
   * 地址解析服务类，支持将地址字符串解析为坐标点（正地址解析），以及将坐标点解析为附近地址信息（逆地址解析）。
   * 适用于地图应用中的地址定位、坐标转地址展示等场景。
   */
  class Geocoder {
    /**
     * 创建地址解析器实例
     * @example
     * ```typescript
     * const geocoder = new BMap.Geocoder();
     * geocoder.getPoint('北京市海淀区中关村', (point) => {
     *   if (point) {
     *     map.centerAndZoom(point, 16);
     *   }
     * }, '北京市');
     * ```
     */
    constructor(opts?: {
      /** 返回结果的语言 */
      language?: string;
    });
    /**
     * 对指定地址进行正向解析，定位成功时以 Point 为参数调用回调函数，失败时参数为 null
     * @param address 地址字符串
     * @param callback 解析结果回调函数
     * @param city 地址所在城市名，如 `'北京市'`，默认为北京市
     * @example
     * ```typescript
     * geocoder.getPoint('北京市海淀区中关村', (point) => {
     *   if (point) {
     *     map.centerAndZoom(point, 16);
     *   }
     * }, '北京市');
     * ```
     */
    getPoint(address: string, callback: (point: Point | null) => void, city?: string): void;
    /**
     * 对指定坐标点进行反向地址解析，成功时以 GeocoderResult 为参数调用回调函数，失败时参数为 null
     * @param point 待解析的坐标点
     * @param callback 解析结果回调函数
     * @param options 可选参数
     * @example
     * ```typescript
     * geocoder.getLocation(new BMap.Point(116.404, 39.915), (result) => {
     *   if (result) {
     *     console.log('地址：', result.address);
     *   }
     * });
     * ```
     */
    getLocation(point: Point, callback: (result: GeocoderResult | null) => void, options?: LocationOptions): void;
  }
}

declare namespace BMap {
  /**
   * 此类表示墨卡托投影类，用于经纬度坐标与平面坐标之间的转换。
   */
  class MercatorProjection {
    /**
     * 根据球面坐标获得平面坐标
     * @param lngLat 经纬度坐标
     * @example
     * ```typescript
     * const projection = new BMap.MercatorProjection();
     * const pixel = projection.lngLatToPoint(new BMap.Point(116.404, 39.915));
     * ```
     */
    lngLatToPoint(lngLat: Point): Pixel;
    /**
     * 根据平面坐标获得球面坐标
     * @param point 平面坐标
     * @example
     * ```typescript
     * const projection = new BMap.MercatorProjection();
     * const lngLat = projection.pointToLngLat(new BMap.Pixel(12958175, 4825923));
     * ```
     */
    pointToLngLat(point: Pixel): Point;
  }
}

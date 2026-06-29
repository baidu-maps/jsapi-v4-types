declare namespace BMap {
  /**
   * 此类表示一个地理坐标点。
   */
  class Point {
    /**
     * 以指定的经度和纬度创建一个地理点坐标
     * @param lng 地理经度
     * @param lat 地理纬度
     * @example
     * ```typescript
     * const point = new BMap.Point(116.404, 39.915);
     * ```
     */
    constructor(lng: number, lat: number);
    /**
     * 判断坐标点是否相等，当且仅当两点的经度和纬度均相等时返回 true
     * @param other 待比较的坐标点
     * @example
     * ```typescript
     * const point = new BMap.Point(116.404, 39.915);
     * const other = new BMap.Point(116.404, 39.915);
     * const isEqual = point.equals(other); // true
     * ```
     */
    equals(other: Point): boolean;
    /** 地理经度 */
    lng: number;
    /** 地理纬度 */
    lat: number;
  }
}

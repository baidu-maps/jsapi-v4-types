declare namespace BMap {
  /**
   * 此类表示地理坐标的矩形区域。
   */
  class Bounds {
    /**
     * 创建一个包含所有给定点坐标的矩形区域
     * @param sw 矩形区域的西南角坐标
     * @param ne 矩形区域的东北角坐标
     * @example
     * ```typescript
     * const bounds = new BMap.Bounds(
     *   new BMap.Point(116.380, 39.900),
     *   new BMap.Point(116.430, 39.930)
     * );
     * ```
     */
    constructor(sw: Point, ne: Point);
    /**
     * 当且仅当此矩形中的两点参数都等于其他矩形的两点参数时，返回 true
     * @param other 待比较的矩形区域
     * @example
     * ```typescript
     * const bounds = new BMap.Bounds(
     *   new BMap.Point(116.380, 39.900),
     *   new BMap.Point(116.430, 39.930)
     * );
     * const other = new BMap.Bounds(
     *   new BMap.Point(116.380, 39.900),
     *   new BMap.Point(116.430, 39.930)
     * );
     * const isEqual = bounds.equals(other); // true
     * ```
     */
    equals(other: Bounds): boolean;
    /**
     * 如果点的地理坐标位于此矩形内，则返回 true
     * @param point 待判断的地理坐标点
     * @example
     * ```typescript
     * const bounds = new BMap.Bounds(
     *   new BMap.Point(116.380, 39.900),
     *   new BMap.Point(116.430, 39.930)
     * );
     * const isInside = bounds.containsPoint(new BMap.Point(116.404, 39.915)); // true
     * ```
     */
    containsPoint(point: Point): boolean;
    /**
     * 传入的矩形区域完全包含于此矩形区域中，则返回 true
     * @param bounds 待判断的矩形区域
     * @example
     * ```typescript
     * const bounds = new BMap.Bounds(
     *   new BMap.Point(116.380, 39.900),
     *   new BMap.Point(116.430, 39.930)
     * );
     * const inner = new BMap.Bounds(
     *   new BMap.Point(116.390, 39.910),
     *   new BMap.Point(116.420, 39.920)
     * );
     * const contains = bounds.containsBounds(inner); // true
     * ```
     */
    containsBounds(bounds: Bounds): boolean;
    /**
     * 计算与另一矩形的交集区域
     * @param other 另一个矩形区域
     * @example
     * ```typescript
     * const bounds = new BMap.Bounds(
     *   new BMap.Point(116.380, 39.900),
     *   new BMap.Point(116.430, 39.930)
     * );
     * const other = new BMap.Bounds(
     *   new BMap.Point(116.400, 39.910),
     *   new BMap.Point(116.450, 39.940)
     * );
     * const intersection = bounds.intersects(other);
     * ```
     */
    intersects(other: Bounds): Bounds;
    /**
     * 放大此矩形，使其包含给定的点
     * @param point 需要包含的地理坐标点
     * @example
     * ```typescript
     * const bounds = new BMap.Bounds(
     *   new BMap.Point(116.380, 39.900),
     *   new BMap.Point(116.430, 39.930)
     * );
     * bounds.extend(new BMap.Point(116.500, 39.950));
     * ```
     */
    extend(point: Point): void;
    /**
     * 返回矩形的中心点
     */
    getCenter(): Point;
    /**
     * 如果矩形为空，则返回 true
     */
    isEmpty(): boolean;
    /**
     * 返回矩形区域的西南角
     */
    getSouthWest(): Point;
    /**
     * 返回矩形区域的东北角
     */
    getNorthEast(): Point;
    /**
     * 返回矩形区域经纬度跨度，以 Point 形式表示（lng 为经度跨度，lat 为纬度跨度）
     */
    toSpan(): Point;
  }
}

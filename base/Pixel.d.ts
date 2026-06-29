declare namespace BMap {
  /**
   * 此类表示地图上的一点，单位为像素。像素坐标的坐标原点为地图区域的左上角。
   */
  class Pixel {
    /**
     * 创建像素点对象实例
     * @param x 水平像素坐标
     * @param y 竖直像素坐标
     * @example
     * ```typescript
     * const pixel = new BMap.Pixel(100, 200);
     * ```
     */
    constructor(x: number, y: number);
    /**
     * 判断坐标点是否相等，当且仅当两点的 x 坐标和 y 坐标均相等时返回 true
     * @param other 待比较的像素点
     * @example
     * ```typescript
     * const pixel = new BMap.Pixel(100, 200);
     * const other = new BMap.Pixel(100, 200);
     * const isEqual = pixel.equals(other); // true
     * ```
     */
    equals(other: Pixel): boolean;
    /** x 坐标 */
    x: number;
    /** y 坐标 */
    y: number;
  }
}

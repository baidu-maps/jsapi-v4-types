declare namespace BMap {
  /**
   * 此类以像素表示一个矩形区域的大小。
   */
  class Size {
    /**
     * 以指定的宽度和高度创建一个矩形区域大小对象
     * @param width 水平方向的数值，单位像素
     * @param height 竖直方向的数值，单位像素
     * @example
     * ```typescript
     * const size = new BMap.Size(32, 32);
     * ```
     */
    constructor(width: number, height: number);
    /**
     * 当且仅当此矩形中的宽度和高度都等于其他矩形的宽度和高度时，返回 true
     * @param other 待比较的大小对象
     * @example
     * ```typescript
     * const size = new BMap.Size(32, 32);
     * const other = new BMap.Size(32, 32);
     * const isEqual = size.equals(other); // true
     * ```
     */
    equals(other: Size): boolean;
    /** 水平方向的数值，单位像素 */
    width: number;
    /** 竖直方向的数值，单位像素 */
    height: number;
  }
}

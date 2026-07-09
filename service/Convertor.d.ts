declare namespace BMap {
  /**
   * 坐标转换服务，用于将其他坐标系的坐标转换为百度坐标（BD09）。
   * 支持 WGS84、GCJ02、BD09 等多种坐标系互转。
   * @example
   * ```typescript
   * const convertor = new BMap.Convertor();
   * const points = [new BMap.Point(120.5, 30.5)];
   * // 从 GCJ02（高德/腾讯） 转为 BD09（百度）
   * convertor.translate(points, 3, 5, function (result) {
   *   if (result.status === 0) {
   *     console.log(result.points[0]); // 转换后的百度坐标
   *   }
   * });
   * ```
   */
  class Convertor {
    /**
     * 创建坐标转换实例
     */
    constructor();
    /**
     * 对指定的坐标点数组进行坐标转换。
     * @param points 待转换的坐标点数组
     * @param from 源坐标类型：1=WGS84, 2=WGS84(米制), 3=GCJ02(高德/腾讯), 4=GCJ02(米制), 5=BD09(百度), 6=BD09(米制), 7=图吧, 8=51地图
     * @param to 目标坐标类型：取值同 from
     * @param callback 转换完成的回调函数
     * @example
     * ```typescript
     * const convertor = new BMap.Convertor();
     * // WGS84（GPS）转百度坐标
     * convertor.translate(
     *   [new BMap.Point(116.3, 39.9)],
     *   1,
     *   5,
     *   function (result) {
     *     if (result.status === 0) {
     *       map.setCenter(result.points[0]);
     *     }
     *   }
     * );
     * ```
     */
    translate(points: Point[], from: number, to: number, callback: (result: TranslateResults) => void): void;
  }
}

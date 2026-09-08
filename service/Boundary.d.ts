declare namespace BMap {
  /**
   * 行政区域边界查询结果
   */
  interface BoundaryResult {
    /**
     * 行政区域的边界数组，每个元素是一个坐标点串字符串，格式为 "lng1,lat1;lng2,lat2;lng3,lat3;..."
     */
    boundaries: string[];
  }

  /**
   * 行政区域边界查询服务类，用于按行政区域名称（省/直辖市/地级市/县）查询其边界坐标点串。
   * 适用于在地图上绘制行政区域轮廓等场景。
   * @deprecated 4.0 已废弃，请使用 {@link DistrictLayer} 代替
   */
  class Boundary {
    /**
     * 创建行政区域搜索的对象实例
     */
    constructor();
    /**
     * 返回行政区域的边界。 name: 查询省、直辖市、地级市、或县的名称。 callback:执行查询后，数据返回到客户端的回调函数，数据以回调函数的参数形式返回。返回结果是一个数组，数据格式如下：
                                  arr[0] = "x1, y1; x2, y2; x3, y3; ..." arr[1] = "x1, y1; x2, y2; x3, y3;
                                  ..." arr[2] = "x1, y1; x2, y2; ..." … 否则回调函数的参数为null
     * @example
     * ```typescript
     * const boundary = new BMap.Boundary();
     * boundary.get('北京市', (rs) => {
     *   const polygons = rs.boundaries.map((b) => new BMap.Polygon(b, { strokeWeight: 2 }));
     *   polygons.forEach((p) => map.addOverlay(p));
     * });
     * ```
     */
    get(name: string, callback: (result: BoundaryResult | null) => void): void;
    /**
     * 解析混淆后的百度坐标字符串
     * @param str - 混淆后的百度坐标字符串
     * @param callback - 解析完成后的回调函数，返回 BoundaryResult
     */
    parsebdStr(str: string, callback: (result: BoundaryResult | null) => void): void;
  }
}

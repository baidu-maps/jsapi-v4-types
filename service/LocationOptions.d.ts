declare namespace BMap {
  /**
   * 此类表示Geocoder的地址解析请求的可选参数。它不可实例化。
   */
  interface LocationOptions {
    /**
     * 附近POI所处于的最大半径，默认为100米
     */
    poiRadius?: number;
    /**
     * 返回的POI点个数，默认为10个。取值范围
     */
    numPois?: number;
  }
}

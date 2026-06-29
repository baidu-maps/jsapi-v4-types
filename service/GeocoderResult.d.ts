declare namespace BMap {
  /**
   * 此类表示Geocoder的地址解析结果。它在地址解析的回调函数的参数中返回，不可实例化。
   */
  interface GeocoderResult {
    /**
     * 坐标点
     */
    point?: Point;
    /**
     * 地址描述
     */
    address?: string;
    /**
     * 结构化的地址描述
     */
    addressComponents?: AddressComponent;
    /**
     * 附近的POI点
     */
    surroundingPois?: LocalResultPoi[];
    /**
     * 商圈字段，代表此点所属的商圈
     */
    business?: string;
  }
}

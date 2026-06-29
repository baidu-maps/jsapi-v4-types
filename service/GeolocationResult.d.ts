declare namespace BMap {
  /**
   * 此类作为Geolocation的getCurrentPosition方法的回调函数参数，不可实例化。
   */
  interface GeolocationResult {
    /**
     * 定位坐标点
     */
    point?: Point;
    /**
     * 定位精度，单位为米
     */
    accuracy?: number;
    /**
     * 根据定位坐标点解析出的地址信息，可能为空（3.0新增）
     */
    address?: AddressComponent;
  }
}

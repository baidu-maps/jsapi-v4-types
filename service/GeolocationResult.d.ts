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
     * 根据定位坐标点解析出的地址信息
     */
    address?: GeolocationAddress;
    /**
     * 海拔高度，设备不支持时为 null
     */
    altitude?: number | null;
    /**
     * 海拔精度，设备不支持时为 null
     */
    altitudeAccuracy?: number | null;
    /**
     * 设备朝向，正北顺时针角度，设备不支持时为 null
     */
    heading?: number | null;
    /**
     * 移动速度（米/秒），设备不支持时为 null
     */
    speed?: number | null;
    /**
     * 定位纬度
     */
    latitude?: number;
    /**
     * 定位经度
     */
    longitude?: number;
    /**
     * 定位时间戳
     */
    timestamp?: number;
  }

  /**
   * 定位结果的地址信息结构
   * @category 配置项
   */
  interface GeolocationAddress {
    /** 国家 */
    country?: string;
    /** 省份 */
    province?: string;
    /** 城市 */
    city?: string;
    /** 城市编码 */
    city_code?: string | number;
    /** 区/县 */
    district?: string;
    /** 街道 */
    street?: string;
    /** 门牌号 */
    street_number?: string;
  }
}

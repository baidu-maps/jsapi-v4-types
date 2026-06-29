declare namespace BMap {
  /**
   * 此类表示地址解析结果的层次化地址信息，没有构造函数，通过对象字面量形式表示。
   */
  interface AddressComponent {
    /**
     * 门牌号码
     */
    streetNumber?: string;
    /**
     * 街道名称
     */
    street?: string;
    /**
     * 区县名称
     */
    district?: string;
    /**
     * 城市名称
     */
    city?: string;
    /**
     * 省份名称
     */
    province?: string;
  }
}

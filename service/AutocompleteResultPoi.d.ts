declare namespace BMap {
  /**
   * 自动完成类获取的单个POI点的信息
   */
  interface AutocompleteResultPoi {
    /**
     * 省名
     */
    province?: string;
    /**
     * 城市名
     */
    city?: string;
    /**
     * 区县名称
     */
    district?: string;
    /**
     * 街道名称
     */
    street?: string;
    /**
     * 门牌号码
     */
    streetNumber?: string;
    /**
     * 商户名
     */
    business?: string;
    /**
     * POI标签（如"餐饮"、"道路"等）
     */
    tag?: string;
    /**
     * POI经纬度坐标
     */
    location?: Point;
  }
}

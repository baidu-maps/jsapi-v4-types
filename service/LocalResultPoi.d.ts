declare namespace BMap {
  /**
   * 表示位置检索或路线规划的一个结果点
   */
  interface LocalResultPoi {
    /**
     * 结果的名称标题
     */
    title: string;
    /**
     * POI 唯一标识
     */
    uid: string;
    /**
     * 该结果所在的地理位置
     */
    point: Point;
    /**
     * 在百度地图中展示该结果点的详情信息链接
     */
    url?: string;
    /**
     * 详情页面链接
     */
    detailUrl?: string;
    /**
     * 地址信息
     */
    address?: string;
    /**
     * 所在城市
     */
    city?: string;
    /**
     * 所在省份
     */
    province?: string;
    /**
     * 电话号码
     */
    phoneNumber?: string;
    /**
     * 邮政编码
     */
    postcode?: string;
    /**
     * POI 类型
     */
    type?: POIType;
    /**
     * 是否精确匹配，仅 LocalSearch.search() 的结果中有效
     */
    isAccurate?: boolean;
    /**
     * 行政区编码
     */
    adcode?: string;
    /**
     * POI 的标签，如商务大厦、餐馆等
     */
    tags?: string[];
    /**
     * 结果点对应的地图标注，在 onMarkersSet 回调触发后可用
     */
    marker?: Marker;
  }
}

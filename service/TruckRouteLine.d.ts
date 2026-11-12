declare namespace BMap {
  /**
   * 此类表示货车路线中一个路段的分段路况。不可实例化，通过 {@link TruckRouteLine#trafficCondition} 获得。
   */
  interface TruckTrafficCondition {
    /**
     * 路况等级：0 缺失、1 畅通、2 注意缓行、3 拥堵、4 严重拥堵
     */
    status: number;
    /**
     * 本片段覆盖的区间数。注意是区间数而非坐标点数，按它切分 `points` 时需要补上尾点
     */
    geo_cnt: number;
    /**
     * 本片段长度，单位：米
     */
    distance: number;
  }

  /**
   * 此类表示货车路线方案中的一个路段。不可实例化，通过 {@link TruckRoutePlan#getLine} 获得。
   */
  interface TruckRouteLine {
    /**
     * 路段距离，单位：米
     */
    distance: number;
    /**
     * 路段行驶方向编码
     */
    direction: number;
    /**
     * 所属分段序号。一个途经点分隔出一段，无途经点时恒为 0
     */
    legIndex: number;
    /**
     * 路段耗时，单位：秒
     */
    duration: number;
    /**
     * 路段途经的行政区划编码，服务端原样返回
     */
    adcodes: number[];
    /**
     * 道路名称，无名路时为空字符串
     */
    roadName: string;
    /**
     * 收费站名称，不途经收费站时为空字符串
     */
    tollGateName: string;
    /**
     * 收费站坐标。收费站信息属高级权限，无权限时为 `new BMap.Point(0, 0)`
     */
    tollGateLocation: Point;
    /**
     * 路段的坐标点串
     */
    points: Point[];
    /**
     * 路段的起终点，两个元素依次为起点、终点
     */
    stops: Array<{
      /** 名称，固定为"起点"或"终点" */
      title: string;
      /** 坐标 */
      point: Point;
    }>;
    /**
     * 路段的分段路况
     */
    trafficCondition: TruckTrafficCondition[];
  }
}

declare namespace BMap {
  /**
   * 公交列表查询成功回调函数的参数对象
   */
  interface BusListResult {
    /**
     * 本次检索关键字
     */
    keyword?: string;
    /**
     * 本次检索所在城市
     */
    city?: string;
    /**
     * 到百度地图查看url
     */
    moreResultsUrl?: string;
    /**
     * 公交列表个数
     */
    getNumBusList(): number;
    /**
     * 获取某一个具体的公交列表中的对象。0表示上行，1表示下行
     */
    getBusListItem(i: number): BusListItem;
  }
}

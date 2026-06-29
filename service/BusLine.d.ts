declare namespace BMap {
  /**
   * 表示公交线路结果的公交线，没有构造函数，通过检索回调函数获得。
   */
  class BusLine {
    /**
     * 获取公交站点个数
     */
    getNumBusStations(): number;
    /**
     * 获取某一个具体的公交站对象
     */
    getBusStation(i: number): BusStation;
    /**
     * 返回公交线地理坐标点数组
     */
    getPath(): Point[];
    /**
     * 获取公交线几何对象, 仅当结果自动添加到地图上时有效
     */
    getPolyline(): Polyline;
    /**
     * 线路名称
     */
    name: string;
    /**
     * 首班车时间
     */
    startTime: string;
    /**
     * 末班车时间
     */
    endTime: string;
    /**
     * 公交线路所属公司
     */
    company: string;
  }
}

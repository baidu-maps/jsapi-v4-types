declare namespace BMap {
  /**
   * ParkingSpot构造函数配置参数
     */
  interface ParkingSpotOptions {
    /** 点击回调函数 */
    callback?: Function;
    /**
     * 楼层
     * @default 1
     */
    floor?: number;
  }
}

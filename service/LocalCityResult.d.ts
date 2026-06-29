declare namespace BMap {
  /**
   * 此类表示LocalCity的定位结果。
   */
  interface LocalCityResult {
    /**
     * 城市所在中心点
     */
    center?: Point;
    /**
     * 展示当前城市的最佳地图级别，如果您在使用此对象时提供了map实例，则地图级别将根据您提供的地图大小进行调整
     */
    level?: number;
    /**
     * 城市名称
     */
    name?: string;
  }
}

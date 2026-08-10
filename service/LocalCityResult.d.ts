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
     * 如果初始化时传入了 renderOptions.map 则返回当前地图层级，否则为5(即全国视野层级)
     */
    level?: number;
    /**
     * 城市名称
     */
    name?: string;
  }
}

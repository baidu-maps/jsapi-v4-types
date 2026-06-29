declare namespace BMap {
  /**
   * 此类表示BusLineSearch类的可选参数，没有构造参数，可以通过对象字面量表示
   */
  interface BusLineSearchOptions {
    /**
     * RenderOptions结果呈现设置
     */
    renderOptions?: RenderOptions;
    /**
     * 设置公交列表查询后的回调函数.参数：rs: BusListResult类型
     */
    onGetBusListComplete?: Function;
    /**
     * 设置公交线路查询后的回调函数.参数：rs: BusLine类型
     */
    onGetBusLineComplete?: Function;
    /**
     * 公交列表结果页渲染后回调函数.参数：container: HTMLElement，结果列表所用的HTML元素
     */
    onBusListHtmlSet?: Function;
    /**
     * 公交线路结果页渲染后回调函数.参数：container: HTMLElement，结果列表所用的HTML元素
     */
    onBusLineHtmlSet?: Function;
    /**
     * 添加公交线时候回调函数.参数：ply:Polyline 公交线路几何对象
     */
    onPolylinesSet?: Function;
    /**
     * 添加公交站点时候回调函数.参数：sts:Array
                                  
                                      公交站坐标组成的Marker对象数组
     */
    onMarkersSet?: Function;
  }
}

declare namespace BMap {
  /**
   * DrivingRouteLine 构造函数的可选参数。
   * 与 DrivingRouteOptions 的区别是不支持 renderOptions.polylineStyle，
   * DrivingRouteLine 使用线图层绘制路线，折线样式配置对它无效。
     * @deprecated 4.0 已废弃，请使用 {@link DrivingRoute} 与 {@link DrivingRouteOptions} 代替
   * @hidden
   */
  interface DrivingRouteLineOptions extends Omit<DrivingRouteOptions, 'renderOptions'> {
    /**
     * 结果呈现设置
     */
    renderOptions?: RenderOptions;
  }
}

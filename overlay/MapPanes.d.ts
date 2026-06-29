declare namespace BMap {
  /**
   * 此类表示地图上所有覆盖物的容器集合，没有构造函数，通过对象字面量形式表示。通过Map的getPanes方法可获得该对象实例。
   */
  interface MapPanes {
    /**
     * 信息窗口所在的容器
     */
    floatPane?: HTMLElement;
    /**
     * 标注点击区域所在的容器
     */
    markerMouseTarget?: HTMLElement;
    /**
     * 信息窗口阴影所在的容器
     */
    floatShadow?: HTMLElement;
    /**
     * 文本标注所在的容器
     */
    labelPane?: HTMLElement;
    /**
     * 标注图标所在的容器
     */
    markerPane?: HTMLElement;
  }
}

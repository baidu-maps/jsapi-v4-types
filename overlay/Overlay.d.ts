declare namespace BMap {
  /**
   * 覆盖物的抽象基类，所有覆盖物均继承基类的方法。此类不可实例化。
   */
  class Overlay {
    /**
     * 抽象生命周期方法，用于初始化覆盖物，当调用map.addOverlay时，API内部将调用此方法。
     *
     * **仅在自定义覆盖物时需要实现此方法**，并返回覆盖物对应的HTML元素。
     * 内置覆盖物（`Marker`、`Polyline`、`Polygon` 等）已在内部实现，用户无需调用也无需重写。
     * @example
     * ```typescript
     * class MyOverlay extends BMap.Overlay {
     *   initialize(map: BMap.Map) {
     *     const div = document.createElement('div');
     *     div.textContent = '自定义覆盖物';
     *     map.getPanes().markerPane.appendChild(div);
     *     return div;
     *   }
     *   draw() {}
     * }
     * ```
     */
    initialize(map: Map): HTMLElement;
    /**
     * 判断覆盖物是否可见
     */
    isVisible(): boolean;
    /**
     * 抽象生命周期方法，当地图状态发生变化时调用，对覆盖物进行绘制。
     *
     * **仅在自定义覆盖物时需要实现此方法**。内置覆盖物已在内部实现，用户无需调用也无需重写。
     */
    draw(): void;
    /**
     * 显示覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为空
     */
    show(): void;
    /**
     * 隐藏覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为none
     */
    hide(): void;
    /**
     * 获取当前覆盖物所在的地图对象
     */
    getMap(): Map;
    /**
     * 析构方法，当确定覆盖物被移除后不再使用时，可显式调用此方法以降低内存使用
     */
    dispose(): void;
  }
}

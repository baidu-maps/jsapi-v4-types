declare namespace BMap {
  /**
   * 覆盖物的抽象基类，所有覆盖物均继承基类的方法。此类不可实例化。
   */
  class Overlay {
    /**
     * 抽象方法，用于初始化覆盖物，当调用map.addOverlay时，API将调用此方法。自定义覆盖物时需要实现此方法。自定义覆盖物时需要将覆盖物对应的HTML元素返回
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
     * 抽象方法，当地图状态发生变化时，由系统调用对覆盖物进行绘制。自定义覆盖物需要实现此方法
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
  }
}

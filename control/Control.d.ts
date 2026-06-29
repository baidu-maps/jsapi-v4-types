declare namespace BMap {
  /**
   * 此类是所有控件的基类，可通过此类实现自定义控件。通过 map.addControl() 方法将控件添加到地图。
   */
  class Control {
    /**
     * 创建控件原型实例，通过该原型可创建自定义控件
     */
    constructor();
    /**
     * 初始化控件，当调用 map.addControl() 时触发。
     * 自定义控件需实现此方法并返回控件的 DOM 元素，DOM 元素需通过 map.getContainer() 添加到地图容器中
     * @param map 地图实例
     * @example
     * ```typescript
     * class MyControl extends BMap.Control {
     *   initialize(map: BMap.Map) {
     *     const div = document.createElement('div');
     *     div.textContent = '自定义控件';
     *     map.getContainer().appendChild(div);
     *     return div;
     *   }
     * }
     * ```
     */
    initialize(map: Map): HTMLElement;
    /**
     * 设置控件停靠位置
     * @param anchor 停靠位置
     * @example
     * ```typescript
     * control.setAnchor(BMAP_ANCHOR_TOP_LEFT);
     * ```
     */
    setAnchor(anchor: ControlAnchor): void;
    /**
     * 返回控件停靠位置
     */
    getAnchor(): ControlAnchor;
    /**
     * 设置控件停靠偏移量
     * @param offset 偏移量
     * @example
     * ```typescript
     * control.setOffset(new BMap.Size(20, 20));
     * ```
     */
    setOffset(offset: Size): void;
    /**
     * 返回控件停靠偏移量
     */
    getOffset(): Size;
    /**
     * 显示控件
     */
    show(): void;
    /**
     * 隐藏控件
     */
    hide(): void;
    /**
     * 返回控件的可见状态
     */
    isVisible(): boolean;
    /**
     * 控件默认停靠位置，自定义控件时需提供此属性
     */
    defaultAnchor: ControlAnchor;
    /**
     * 控件默认偏移量，自定义控件时需提供此属性
     */
    defaultOffset: Size;
  }
}

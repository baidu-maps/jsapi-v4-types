declare namespace BMap {
  /**
   * 可视化图层的样式取值：既可直接给常量，也可给回调按要素逐个求值。
   *
   * 回调签名 `(properties, feature, index) => value`
   * @param properties 要素的 properties
   * @param feature 归一化后的要素
   * @param index 要素序号
     */
  type StyleValue<T> = T | ((properties: any, feature: any, index: number) => T);

  /**
   * 可视化图层的要素拾取事件对象（`click` / `dblclick` / `rightclick` /
   * `mousemove` / `mouseover` / `mouseout`）。
   *
   * 仅在图层 `enablePicked` 为 `true` 时派发；拾取与事件派发由内部统一调度。
     */
  interface VisualPickEvent<T, V> {
    /** 事件类型 */
    type: string;
    /** 触发事件的图层 */
    target: T;
    /** 命中像素坐标 */
    pixel: Pixel;
    /** 命中经纬度 */
    point: Point;
    /** 命中的要素 */
    value: V;
    /** 原始 DOM 事件 */
    domEvent?: Event;
  }
}

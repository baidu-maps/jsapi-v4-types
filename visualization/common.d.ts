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
   * 可视化图层的绘制阶段，图层绘制在该阶段之后（即叠在其上）。`null` / 不设同 `'tilelayer'`。
   * - `'basemap'`：底图之后、其余瓦片 / 自定义图层之前
   * - `'tilelayer'`（默认，`null` / 不设同此）：瓦片之后、覆盖物之前
   * - `'overlay'`：覆盖物之后（`overlayTop: true` 时随覆盖物移到 POI 文字之后）
   * - `'building'`：3D 楼块之后、POI 文字之前
   * - `'poi'`：POI 文字之后
     */
  type RenderStage = 'basemap' | 'tilelayer' | 'overlay' | 'building' | 'poi' | null;

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

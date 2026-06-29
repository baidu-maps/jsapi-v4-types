declare namespace BMap {
  /**
   * 矢量图标类，通过 SVG path 字符串或预定义符号常量创建可缩放的矢量图标。
   * 可用作 Marker 的 icon 参数。
   *
   * 预定义符号常量：`BMap_Symbol_SHAPE_CIRCLE`、`BMap_Symbol_SHAPE_RECTANGLE`、
   * `BMap_Symbol_SHAPE_RHOMBUS`、`BMap_Symbol_SHAPE_STAR`、
   * `BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW`、`BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW`、
   * `BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW`、`BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW`、
   * `BMap_Symbol_SHAPE_POINT`、`BMap_Symbol_SHAPE_PLANE`、`BMap_Symbol_SHAPE_CAMERA`、
   * `BMap_Symbol_SHAPE_WARNING`、`BMap_Symbol_SHAPE_SMILE`、`BMap_Symbol_SHAPE_CLOCK`
   */
  class Symbol {
    /**
     * 创建矢量图标实例
     * @param path SVG path 字符串或预定义符号常量
     * @param opts 可选样式参数
     * @example
     * ```typescript
     * const symbol = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW, {
     *   scale: 5,
     *   fillColor: '#fff',
     *   fillOpacity: 0.9,
     *   strokeColor: '#333',
     * });
     * const marker = new BMap.Marker(new BMap.Point(116.404, 39.915), { icon: symbol });
     * map.addOverlay(marker);
     * ```
     */
    constructor(path: string | SymbolShapeType, opts?: SymbolOptions);
    /**
     * 设置矢量图标的 path
     * @param path SVG path 字符串或预定义符号常量
     * @example 使用预定义符号常量
     * ```typescript
     * symbol.setPath(BMap_Symbol_SHAPE_CIRCLE);
     * ```
     * @example 使用自定义 SVG path 字符串
     * ```typescript
     * symbol.setPath('M 0 -10 L 10 10 L -10 10 Z');
     * ```
     */
    setPath(path: string | SymbolShapeType): void;
    /**
     * 设置矢量图标的锚点，以图标自身坐标系为基准
     * @param anchor 锚点偏移量（单位：像素，以图标中心为原点）
     * @example
     * ```typescript
     * symbol.setAnchor(new BMap.Size(10, 10));
     * ```
     */
    setAnchor(anchor: Size): void;
    /**
     * 设置矢量图标的旋转角度
     * @param rotation 角度，单位度，顺时针方向
     * @example
     * ```typescript
     * symbol.setRotation(45);
     * ```
     */
    setRotation(rotation: number): void;
    /**
     * 设置矢量图标的缩放比例
     * @param scale 缩放比例，默认为 1
     * @example
     * ```typescript
     * symbol.setScale(8);
     * ```
     */
    setScale(scale: number): void;
    /**
     * 设置矢量图标的描边宽度
     * @param strokeWeight 线宽，单位像素
     * @example
     * ```typescript
     * symbol.setStrokeWeight(3);
     * ```
     */
    setStrokeWeight(strokeWeight: number): void;
    /**
     * 设置矢量图标的描边颜色，支持颜色常量字符串、十六进制、RGB、RGBA 等格式
     * @param color 颜色值
     * @example
     * ```typescript
     * symbol.setStrokeColor('#ff0000');
     * ```
     */
    setStrokeColor(color: string): void;
    /**
     * 设置矢量图标描边透明度
     * @param opacity 透明度，取值范围 0 - 1
     * @example
     * ```typescript
     * symbol.setStrokeOpacity(0.3);
     * ```
     */
    setStrokeOpacity(opacity: number): void;
    /**
     * 设置矢量图标填充透明度
     * @param opacity 透明度，取值范围 0 - 1
     * @example
     * ```typescript
     * symbol.setFillOpacity(0.7);
     * ```
     */
    setFillOpacity(opacity: number): void;
    /**
     * 设置矢量图标的填充颜色，支持颜色常量字符串、十六进制、RGB、RGBA 等格式
     * @param color 颜色值
     * @example
     * ```typescript
     * symbol.setFillColor('#0055ff');
     * ```
     */
    setFillColor(color: string): void;
  }
}

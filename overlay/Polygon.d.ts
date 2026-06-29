declare namespace BMap {
  /**
   * 此类表示一个多边形覆盖物。
   */
  class Polygon {
    /**
     * 创建多边形覆盖物对象
     * @param points 多边形的坐标点数组
     * @param opts 可选参数
     * @example
     * ```typescript
     * const polygon = new BMap.Polygon([
     *   new BMap.Point(116.387112, 39.920977),
     *   new BMap.Point(116.385243, 39.913063),
     *   new BMap.Point(116.394226, 39.917988),
     * ]);
     * map.addOverlay(polygon);
     * ```
     * @example 自定义样式
     * ```typescript
     * const polygon = new BMap.Polygon(
     *   [
     *     new BMap.Point(116.387112, 39.920977),
     *     new BMap.Point(116.385243, 39.913063),
     *     new BMap.Point(116.394226, 39.917988),
     *   ],
     *   { strokeColor: '#0055ff', fillColor: '#0055ff', fillOpacity: 0.3 }
     * );
     * map.addOverlay(polygon);
     * ```
     */
    constructor(points: Array<Point>, opts?: PolygonOptions);
    /**
     * 设置多边形的坐标点数组
     * @param path 坐标点数组
     * @example
     * ```typescript
     * polygon.setPath([
     *   new BMap.Point(116.387112, 39.920977),
     *   new BMap.Point(116.385243, 39.913063),
     *   new BMap.Point(116.394226, 39.917988),
     *   new BMap.Point(116.401772, 39.921364),
     * ]);
     * ```
     */
    setPath(path: Array<Point>): void;
    /**
     * 返回多边形的坐标点数组
     */
    getPath(): Point[];
    /**
     * 设置多边形的边线颜色
     * @param color 颜色值，合法的CSS颜色值
     * @example
     * ```typescript
     * polygon.setStrokeColor('#ff0000');
     * ```
     */
    setStrokeColor(color: string): void;
    /**
     * 返回多边形的边线颜色
     */
    getStrokeColor(): string;
    /**
     * 设置多边形的填充颜色，传入空字符串时无填充效果
     * @param color 颜色值，合法的CSS颜色值
     * @example
     * ```typescript
     * polygon.setFillColor('#0055ff');
     * ```
     */
    setFillColor(color: string): void;
    /**
     * 返回多边形的填充颜色
     */
    getFillColor(): string;
    /**
     * 设置多边形边线透明度
     * @param opacity 透明度，取值范围0 - 1
     * @example
     * ```typescript
     * polygon.setStrokeOpacity(0.6);
     * ```
     */
    setStrokeOpacity(opacity: number): void;
    /**
     * 返回多边形边线透明度
     */
    getStrokeOpacity(): number;
    /**
     * 设置多边形填充透明度
     * @param opacity 透明度，取值范围0 - 1
     * @example
     * ```typescript
     * polygon.setFillOpacity(0.3);
     * ```
     */
    setFillOpacity(opacity: number): void;
    /**
     * 返回多边形填充透明度
     */
    getFillOpacity(): number;
    /**
     * 设置多边形边线宽度
     * @param weight 线宽，单位像素，须为大于等于1的整数
     * @example
     * ```typescript
     * polygon.setStrokeWeight(3);
     * ```
     */
    setStrokeWeight(weight: number): void;
    /**
     * 返回多边形边线宽度
     */
    getStrokeWeight(): number;
    /**
     * 设置多边形边线样式
     * @param style 线样式，`'solid'` 实线或 `'dashed'` 虚线
     * @example
     * ```typescript
     * polygon.setStrokeStyle('dashed');
     * ```
     */
    setStrokeStyle(style: string): void;
    /**
     * 返回多边形边线样式
     */
    getStrokeStyle(): string;
    /**
     * 返回覆盖物的地理区域范围
     */
    getBounds(): Bounds;
    /**
     * 开启编辑功能
     */
    enableEditing(): void;
    /**
     * 关闭编辑功能
     */
    disableEditing(): void;
    /**
     * 允许覆盖物在 map.clearOverlays() 方法中被清除
     */
    enableMassClear(): void;
    /**
     * 禁止覆盖物在 map.clearOverlays() 方法中被清除
     */
    disableMassClear(): void;
    /**
     * 修改指定索引处的坐标点，索引从0开始
     * @param index 坐标点索引
     * @param point 新的坐标点
     * @example
     * ```typescript
     * polygon.setPositionAt(1, new BMap.Point(116.390, 39.915));
     * ```
     */
    setPositionAt(index: number, point: Point): void;
    /**
     * 返回覆盖物所在的地图实例
     */
    getMap(): Map;
    /**
     * 添加事件监听函数
     * @param event 事件名称
     * @param handler 事件处理函数
     * @example
     * ```typescript
     * polygon.addEventListener('click', (e) => {
     *   console.log('polygon clicked', e);
     * });
     * ```
     */
    addEventListener(event: string, handler: Function): void;
    /**
     * 移除事件监听函数
     * @param event 事件名称
     * @param handler 事件处理函数
     * @example
     * ```typescript
     * const handler = (e: any) => { console.log(e); };
     * polygon.addEventListener('click', handler);
     * polygon.removeEventListener('click', handler);
     * ```
     */
    removeEventListener(event: string, handler: Function): void;
  }
}

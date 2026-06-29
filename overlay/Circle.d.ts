declare namespace BMap {
  /**
   * 此类表示地图上的圆形覆盖物。
   */
  class Circle {
    /**
     * 创建圆形覆盖物对象
     * @param center 圆心坐标
     * @param radius 半径，单位为米
     * @param opts 可选参数
     * @example
     * ```typescript
     * const circle = new BMap.Circle(new BMap.Point(116.404, 39.915), 1000);
     * map.addOverlay(circle);
     * ```
     * @example 自定义样式
     * ```typescript
     * const circle = new BMap.Circle(
     *   new BMap.Point(116.404, 39.915),
     *   1000,
     *   { strokeColor: '#0055ff', fillColor: '#0055ff', fillOpacity: 0.2 }
     * );
     * map.addOverlay(circle);
     * ```
     */
    constructor(center: Point, radius: number, opts?: CircleOptions);
    /**
     * 设置圆形的中心点坐标
     * @param center 中心点坐标
     * @example
     * ```typescript
     * circle.setCenter(new BMap.Point(116.410, 39.920));
     * ```
     */
    setCenter(center: Point): void;
    /**
     * 返回圆形的中心点坐标
     */
    getCenter(): Point;
    /**
     * 设置圆形的半径
     * @param radius 半径，单位为米
     * @example
     * ```typescript
     * circle.setRadius(2000);
     * ```
     */
    setRadius(radius: number): void;
    /**
     * 返回圆形的半径，单位为米
     */
    getRadius(): number;
    /**
     * 返回圆形的地理区域范围
     */
    getBounds(): Bounds;
    /**
     * 设置圆形的边线颜色
     * @param color 颜色值，合法的CSS颜色值
     * @example
     * ```typescript
     * circle.setStrokeColor('#ff0000');
     * ```
     */
    setStrokeColor(color: string): void;
    /**
     * 返回圆形的边线颜色
     */
    getStrokeColor(): string;
    /**
     * 设置圆形的填充颜色，传入空字符串时无填充效果
     * @param color 颜色值，合法的CSS颜色值
     * @example
     * ```typescript
     * circle.setFillColor('#0055ff');
     * ```
     */
    setFillColor(color: string): void;
    /**
     * 返回圆形的填充颜色
     */
    getFillColor(): string;
    /**
     * 设置圆形边线透明度
     * @param opacity 透明度，取值范围0 - 1
     * @example
     * ```typescript
     * circle.setStrokeOpacity(0.6);
     * ```
     */
    setStrokeOpacity(opacity: number): void;
    /**
     * 返回圆形边线透明度
     */
    getStrokeOpacity(): number;
    /**
     * 设置圆形填充透明度
     * @param opacity 透明度，取值范围0 - 1
     * @example
     * ```typescript
     * circle.setFillOpacity(0.3);
     * ```
     */
    setFillOpacity(opacity: number): void;
    /**
     * 返回圆形填充透明度
     */
    getFillOpacity(): number;
    /**
     * 设置圆形边线宽度
     * @param weight 线宽，单位像素，须为大于等于1的整数
     * @example
     * ```typescript
     * circle.setStrokeWeight(3);
     * ```
     */
    setStrokeWeight(weight: number): void;
    /**
     * 返回圆形边线宽度
     */
    getStrokeWeight(): number;
    /**
     * 设置圆形边线样式
     * @param style 线样式，`'solid'` 实线或 `'dashed'` 虚线
     * @example
     * ```typescript
     * circle.setStrokeStyle('dashed');
     * ```
     */
    setStrokeStyle(style: string): void;
    /**
     * 返回圆形边线样式
     */
    getStrokeStyle(): string;
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
     * 返回覆盖物所在的地图实例
     */
    getMap(): Map;
    /**
     * 添加事件监听函数
     * @param event 事件名称
     * @param handler 事件处理函数
     * @example
     * ```typescript
     * circle.addEventListener('click', (e) => {
     *   console.log('circle clicked', e);
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
     * circle.addEventListener('click', handler);
     * circle.removeEventListener('click', handler);
     * ```
     */
    removeEventListener(event: string, handler: Function): void;
  }
}

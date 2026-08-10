declare namespace BMap {
  /**
   * 此类表示一个矩形覆盖物。
     */
  class Rectangle extends Overlay {
    /**
     * 创建矩形覆盖物对象
     * @param bounds 矩形的地理区域范围，由西南角和东北角定义
     * @param opts 可选参数
     * @example
     * ```typescript
     * const sw = new BMap.Point(116.38, 39.9);
     * const ne = new BMap.Point(116.42, 39.93);
     * const bounds = new BMap.Bounds(sw, ne);
     * const rectangle = new BMap.Rectangle(bounds, {
     *   strokeColor: '#0066ff',
     *   strokeWeight: 2,
     *   strokeOpacity: 0.8,
     *   fillColor: '#0066ff',
     *   fillOpacity: 0.3,
     * });
     * map.addOverlay(rectangle);
     * ```
     */
    constructor(bounds: Bounds, opts?: RectangleOptions);
    /**
     * 设置矩形的地理区域范围
     * @param bounds 矩形的地理区域范围
     * @example
     * ```typescript
     * const sw = new BMap.Point(116.36, 39.88);
     * const ne = new BMap.Point(116.44, 39.95);
     * rectangle.setBounds(new BMap.Bounds(sw, ne));
     * ```
     */
    setBounds(bounds: Bounds): void;
    /**
     * 返回矩形的地理区域范围
     */
    getBounds(): Bounds;
    /**
     * 设置矩形的边线颜色
     * @param color 颜色值，合法的CSS颜色值
     * @example
     * ```typescript
     * rectangle.setStrokeColor('#ff0000');
     * ```
     */
    setStrokeColor(color: string): void;
    /**
     * 返回矩形的边线颜色
     */
    getStrokeColor(): string;
    /**
     * 设置矩形的填充颜色，传入空字符串时无填充效果
     * @param color 颜色值，合法的CSS颜色值
     * @example
     * ```typescript
     * rectangle.setFillColor('#0055ff');
     * ```
     */
    setFillColor(color: string): void;
    /**
     * 返回矩形的填充颜色
     */
    getFillColor(): string;
    /**
     * 设置矩形边线透明度
     * @param opacity 透明度，取值范围0 - 1
     * @example
     * ```typescript
     * rectangle.setStrokeOpacity(0.6);
     * ```
     */
    setStrokeOpacity(opacity: number): void;
    /**
     * 返回矩形边线透明度
     */
    getStrokeOpacity(): number;
    /**
     * 设置矩形填充透明度
     * @param opacity 透明度，取值范围0 - 1
     * @example
     * ```typescript
     * rectangle.setFillOpacity(0.3);
     * ```
     */
    setFillOpacity(opacity: number): void;
    /**
     * 返回矩形填充透明度
     */
    getFillOpacity(): number;
    /**
     * 设置矩形边线宽度
     * @param weight 线宽，单位像素，须为大于等于1的整数
     * @example
     * ```typescript
     * rectangle.setStrokeWeight(3);
     * ```
     */
    setStrokeWeight(weight: number): void;
    /**
     * 返回矩形边线宽度
     */
    getStrokeWeight(): number;
    /**
     * 设置矩形边线样式
     * @param style 线样式
     * @example
     * ```typescript
     * rectangle.setStrokeStyle('dashed');
     * ```
     */
    setStrokeStyle(style: 'solid' | 'dashed' | 'dotted'): void;
    /**
     * 返回矩形边线样式
     */
    getStrokeStyle(): 'solid' | 'dashed' | 'dotted';
    /**
     * 开启编辑功能
     */
    enableEditing(): void;
    /**
     * 关闭编辑功能
     */
    disableEditing(): void;
    /**
     * 设置覆盖物的 zIndex
     * @param zIndex 层叠顺序值
     */
    setZIndex(zIndex: number): void;
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
     * rectangle.addEventListener('click', (e) => {
     *   console.log('rectangle clicked', e);
     * });
     * ```
     */
    addEventListener<K extends keyof RectangleEventMap>(event: K, handler: (e: RectangleEventMap[K]) => void): void;
    /**
     * 移除事件监听函数
     * @param event 事件名称
     * @param handler 事件处理函数
     * @example
     * ```typescript
     * const handler = (e: any) => { console.log(e); };
     * rectangle.addEventListener('click', handler);
     * rectangle.removeEventListener('click', handler);
     * ```
     */
    removeEventListener<K extends keyof RectangleEventMap>(event: K, handler: (e: RectangleEventMap[K]) => void): void;
  }
}

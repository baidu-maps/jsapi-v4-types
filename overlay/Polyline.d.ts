declare namespace BMap {
  /**
   * 使用浏览器的矢量制图工具在地图上绘制折线的覆盖物。
   */
  class Polyline {
    /**
     * 创建折线覆盖物对象
     * @param points 折线的坐标点数组
     * @param opts 可选参数
     * @example
     * ```typescript
     * const polyline = new BMap.Polyline([
     *   new BMap.Point(116.399, 39.910),
     *   new BMap.Point(116.405, 39.920),
     *   new BMap.Point(116.415, 39.915),
     * ]);
     * map.addOverlay(polyline);
     * ```
     * @example 自定义样式
     * ```typescript
     * const polyline = new BMap.Polyline(
     *   [new BMap.Point(116.399, 39.910), new BMap.Point(116.415, 39.915)],
     *   { strokeColor: '#0055ff', strokeWeight: 4, strokeOpacity: 0.8 }
     * );
     * map.addOverlay(polyline);
     * ```
     */
    constructor(points: Array<Point>, opts?: PolylineOptions);
    /**
     * 设置折线的坐标点数组
     * @param path 坐标点数组
     * @example
     * ```typescript
     * polyline.setPath([
     *   new BMap.Point(116.399, 39.910),
     *   new BMap.Point(116.405, 39.920),
     *   new BMap.Point(116.415, 39.915),
     * ]);
     * ```
     */
    setPath(path: Array<Point>): void;
    /**
     * 返回折线的坐标点数组
     */
    getPath(): Point[];
    /**
     * 设置折线颜色
     * @param color 颜色值，格式为 '#xxxxxx'
     * @example
     * ```typescript
     * polyline.setStrokeColor('#ff0000');
     * ```
     */
    setStrokeColor(color: string): void;
    /**
     * 返回折线颜色
     */
    getStrokeColor(): string;
    /**
     * 设置折线透明度
     * @param opacity 透明度，取值范围0 - 1
     * @example
     * ```typescript
     * polyline.setStrokeOpacity(0.6);
     * ```
     */
    setStrokeOpacity(opacity: number): void;
    /**
     * 返回折线透明度
     */
    getStrokeOpacity(): number;
    /**
     * 设置折线线宽
     * @param weight 线宽，单位像素，须为大于等于1的整数
     * @example
     * ```typescript
     * polyline.setStrokeWeight(4);
     * ```
     */
    setStrokeWeight(weight: number): void;
    /**
     * 返回折线线宽
     */
    getStrokeWeight(): number;
    /**
     * 设置折线样式
     * @param style 线样式，`'solid'` 实线或 `'dashed'` 虚线
     * @example
     * ```typescript
     * polyline.setStrokeStyle('dashed');
     * ```
     */
    setStrokeStyle(style: string): void;
    /**
     * 返回折线样式
     */
    getStrokeStyle(): string;
    /**
     * 返回折线的地理区域范围
     */
    getBounds(): Bounds;
    /**
     * 开启折线编辑功能
     */
    enableEditing(): void;
    /**
     * 关闭折线编辑功能
     */
    disableEditing(): void;
    /**
     * 设置覆盖物的 zIndex
     * @param zIndex 层叠顺序值
     * @example
     * ```typescript
     * polyline.setZIndex(10);
     * ```
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
     * 修改指定索引处的坐标点，索引从0开始
     * @param index 坐标点索引
     * @param point 新的坐标点
     * @example
     * ```typescript
     * polyline.setPositionAt(0, new BMap.Point(116.400, 39.912));
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
     * polyline.addEventListener('click', (e) => {
     *   console.log('polyline clicked', e);
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
     * polyline.addEventListener('click', handler);
     * polyline.removeEventListener('click', handler);
     * ```
     */
    removeEventListener(event: string, handler: Function): void;
  }
}

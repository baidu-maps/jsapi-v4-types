declare namespace BMap {
  /**
   * 此类表示一个棱柱覆盖物。
     */
  class Prism {
    /**
     * 创建棱柱覆盖物对象
     * @param points 底面多边形的坐标点数组
     * @param altitude 棱柱高度，单位为米
     * @param opts 可选参数
     * @example
     * ```typescript
     * const prism = new BMap.Prism(
     *   [
     *     new BMap.Point(116.387112, 39.920977),
     *     new BMap.Point(116.385243, 39.913063),
     *     new BMap.Point(116.394226, 39.917988),
     *   ],
     *   500,
     *   { topFillColor: '#4682b4', sideFillColor: '#87ceeb' }
     * );
     * map.addOverlay(prism);
     * ```
     */
    constructor(points: Array<Point>, altitude: number, opts?: PrismOptions);
    /**
     * 设置底面多边形的坐标点数组
     * @param path 坐标点数组
     * @example
     * ```typescript
     * prism.setPath([
     *   new BMap.Point(116.387, 39.921),
     *   new BMap.Point(116.385, 39.913),
     *   new BMap.Point(116.394, 39.918),
     * ]);
     * ```
     */
    setPath(path: Array<Point>): void;
    /**
     * 返回底面多边形的坐标点数组
     */
    getPath(): Point[];
    /**
     * 设置棱柱高度
     * @param altitude 高度，单位为米
     * @example
     * ```typescript
     * prism.setAltitude(800);
     * ```
     */
    setAltitude(altitude: number): void;
    /**
     * 返回棱柱高度，单位为米
     */
    getAltitude(): number;
    /**
     * 设置棱柱顶面填充颜色
     * @param color 颜色值，格式为 '#xxxxxx'
     * @example
     * ```typescript
     * prism.setTopFillColor('#4682b4');
     * ```
     */
    setTopFillColor(color: string): void;
    /**
     * 返回棱柱顶面填充颜色
     */
    getTopFillColor(): string;
    /**
     * 设置棱柱顶面透明度
     * @param opacity 透明度，取值范围0 - 1
     * @example
     * ```typescript
     * prism.setTopFillOpacity(0.8);
     * ```
     */
    setTopFillOpacity(opacity: number): void;
    /**
     * 返回棱柱顶面透明度
     */
    getTopFillOpacity(): number;
    /**
     * 设置棱柱侧面填充颜色
     * @param color 颜色值，格式为 '#xxxxxx'
     * @example
     * ```typescript
     * prism.setSideFillColor('#87ceeb');
     * ```
     */
    setSideFillColor(color: string): void;
    /**
     * 返回棱柱侧面填充颜色
     */
    getSideFillColor(): string;
    /**
     * 设置棱柱侧面透明度
     * @param opacity 透明度，取值范围0 - 1
     * @example
     * ```typescript
     * prism.setSideFillOpacity(0.6);
     * ```
     */
    setSideFillOpacity(opacity: number): void;
    /**
     * 返回棱柱侧面透明度
     */
    getSideFillOpacity(): number;
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
     * prism.addEventListener('click', (e) => {
     *   console.log('prism clicked', e);
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
     * prism.addEventListener('click', handler);
     * prism.removeEventListener('click', handler);
     * ```
     */
    removeEventListener(event: string, handler: Function): void;
  }
}

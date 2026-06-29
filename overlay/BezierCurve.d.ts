declare namespace BMap {
  /**
   * 此类表示一个二阶贝塞尔曲线覆盖物。
     */
  class BezierCurve {
    /**
     * 创建二阶贝塞尔曲线覆盖物
     * @param points 曲线路径点数组
     * @param controlPoints 控制点数组，每两个路径点之间可有1或2个控制点，格式如 `[[cp1, cp2], [cp3]]`
     * @param opts 可选参数
     * @example
     * ```typescript
     * const bezierCurve = new BMap.BezierCurve(
     *   [new BMap.Point(116.399, 39.910), new BMap.Point(116.415, 39.930)],
     *   [[new BMap.Point(116.405, 39.940)]],
     *   { strokeColor: '#0055ff', strokeWeight: 3 }
     * );
     * map.addOverlay(bezierCurve);
     * ```
     */
    constructor(points: Array<Point>, controlPoints: Array<Point>, opts?: BezierCurveOptions);
    /**
     * 设置曲线的路径点数组
     * @param path 路径点数组
     * @example
     * ```typescript
     * bezierCurve.setPath([
     *   new BMap.Point(116.399, 39.910),
     *   new BMap.Point(116.420, 39.935),
     * ]);
     * ```
     */
    setPath(path: Array<Point>): void;
    /**
     * 返回曲线的路径点数组
     */
    getPath(): Point[];
    /**
     * 设置曲线的控制点数组，每两个路径点之间可有1或2个控制点
     * @param path 控制点数组
     * @example
     * ```typescript
     * bezierCurve.setControlPoints([new BMap.Point(116.410, 39.940)]);
     * ```
     */
    setControlPoints(path: Array<Point>): void;
    /**
     * 返回曲线的控制点数组
     */
    getControlPoints(): Point[];
    /**
     * 设置曲线颜色
     * @param color 颜色值，格式为 '#xxxxxx'
     * @example
     * ```typescript
     * bezierCurve.setStrokeColor('#ff0000');
     * ```
     */
    setStrokeColor(color: string): void;
    /**
     * 返回曲线颜色
     */
    getStrokeColor(): string;
    /**
     * 设置曲线透明度
     * @param opacity 透明度，取值范围0 - 1
     * @example
     * ```typescript
     * bezierCurve.setStrokeOpacity(0.7);
     * ```
     */
    setStrokeOpacity(opacity: number): void;
    /**
     * 返回曲线透明度
     */
    getStrokeOpacity(): number;
    /**
     * 设置曲线线宽
     * @param weight 线宽，单位像素，须为大于等于1的整数
     * @example
     * ```typescript
     * bezierCurve.setStrokeWeight(4);
     * ```
     */
    setStrokeWeight(weight: number): void;
    /**
     * 返回曲线线宽
     */
    getStrokeWeight(): number;
    /**
     * 设置曲线样式
     * @param style 线样式，`'solid'` 实线或 `'dashed'` 虚线
     * @example
     * ```typescript
     * bezierCurve.setStrokeStyle('dashed');
     * ```
     */
    setStrokeStyle(style: string): void;
    /**
     * 返回曲线样式
     */
    getStrokeStyle(): string;
    /**
     * 返回覆盖物的地理区域范围
     */
    getBounds(): Bounds;
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
     * bezierCurve.addEventListener('click', (e) => {
     *   console.log('bezierCurve clicked', e);
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
     * bezierCurve.addEventListener('click', handler);
     * bezierCurve.removeEventListener('click', handler);
     * ```
     */
    removeEventListener(event: string, handler: Function): void;
  }
}

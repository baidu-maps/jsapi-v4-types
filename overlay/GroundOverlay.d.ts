declare namespace BMap {
  /**
   * 此类表示地图上的地面叠加层，可叠加图片、视频或 Canvas 内容。
   */
  class GroundOverlay {
    /**
     * 创建地面叠加层覆盖物
     * @param bounds 叠加层显示的矩形区域
     * @param opts 可选参数
     * @example
     * ```typescript
     * const bounds = new BMap.Bounds(
     *   new BMap.Point(116.390, 39.910),
     *   new BMap.Point(116.420, 39.925)
     * );
     * const groundOverlay = new BMap.GroundOverlay(bounds, {
     *   url: 'https://jsapi-demo.bj.bcebos.com/images/markers/marker_demo_all.png',
     *   opacity: 0.8,
     * });
     * map.addOverlay(groundOverlay);
     * ```
     */
    constructor(bounds: Bounds, opts?: GroundOverlayOptions);
    /**
     * 设置图层显示的矩形区域
     * @param bounds 矩形区域
     * @example
     * ```typescript
     * groundOverlay.setBounds(new BMap.Bounds(
     *   new BMap.Point(116.380, 39.900),
     *   new BMap.Point(116.430, 39.930)
     * ));
     * ```
     */
    setBounds(bounds: Bounds): void;
    /**
     * 返回图层显示的矩形区域
     */
    getBounds(): Bounds;
    /**
     * 设置图层透明度
     * @param opacity 透明度，取值范围0 - 1
     * @example
     * ```typescript
     * groundOverlay.setOpacity(0.5);
     * ```
     */
    setOpacity(opacity: number): void;
    /**
     * 返回图层透明度
     */
    getOpacity(): number;
    /**
     * 设置图层图片地址
     * @param url 图片URL
     * @example
     * ```typescript
     * groundOverlay.setImage('https://jsapi-demo.bj.bcebos.com/images/markers/marker_demo_9.png');
     * ```
     */
    setImage(url: string): void;
    /**
     * 返回图层图片地址
     */
    getImageURL(): string;
    /**
     * 设置图层显示的最小缩放级别
     * @param level 最小级别
     * @example
     * ```typescript
     * groundOverlay.setDisplayOnMinLevel(10);
     * ```
     */
    setDisplayOnMinLevel(level: number): void;
    /**
     * 返回图层显示的最小缩放级别
     */
    getDisplayOnMinLevel(): number;
    /**
     * 设置图层显示的最大缩放级别
     * @param level 最大级别
     * @example
     * ```typescript
     * groundOverlay.setDisplayOnMaxLevel(18);
     * ```
     */
    setDisplayOnMaxLevel(level: number): void;
    /**
     * 返回图层显示的最大缩放级别
     */
    getDisplayOnMaxLevel(): number;
  }

  /**
   * 当 GroundOverlayOptions 的 type 为 `'canvas'` 时的扩展配置。
   * @category 配置项
     */
  interface GroundOverlayCanvasOptions {
    /**
     * 是否开启循环重绘
     * @default false
     */
    isReDraw?: boolean;
    /**
     * Canvas 绘制回调函数，初始化时必须设置，通过 `this.canvas` 获取 canvas 对象
     * @default null
     */
    drawHook?: Function;
  }
}

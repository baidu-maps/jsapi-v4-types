declare namespace BMap {
  /**
   * 贴地点覆盖物，继承 GroundOverlay。
     */
  class GroundPoint {
    /**
     * 创建贴地点覆盖物，该覆盖物的大小为墨卡托坐标系下的实际大小，屏幕空间的大小会随着地图的缩放级别变化而变化。
     * @param point 地理坐标点
     * @param opts 可选参数
     * @example
     * ```typescript
     * const groundPoint = new BMap.GroundPoint(
     *   new BMap.Point(116.404, 39.915),
     *   { url: 'https://jsapi-demo.bj.bcebos.com/images/markers/car.png', size: new BMap.Size(30, 60) }
     * );
     * map.addOverlay(groundPoint);
     * ```
     */
    constructor(point: Point, opts?: GroundPointOptions);
    /**
     * 设置覆盖物的地理坐标点
     * @param point 地理坐标
     * @param update 是否立即更新渲染
     * @example
     * ```typescript
     * groundPoint.setPoint(new BMap.Point(116.410, 39.920), true);
     * ```
     */
    setPoint(point: Point, update?: boolean): void;
    /**
     * 设置缩放比例
     * @param scale 缩放比例
     * @param update 是否立即更新渲染
     * @example
     * ```typescript
     * groundPoint.setScale(1.5, true);
     * ```
     */
    setScale(scale: number, update?: boolean): void;
    /**
     * 设置图标尺寸
     * @param size 尺寸，单位像素
     * @param update 是否立即更新渲染
     * @example
     * ```typescript
     * groundPoint.setSize(new BMap.Size(48, 48), true);
     * ```
     */
    setSize(size: Size, update?: boolean): void;
    /**
     * 设置旋转角度
     * @param angle 旋转角度，单位度
     * @param update 是否立即更新渲染
     * @example
     * ```typescript
     * groundPoint.setRotation(90, true);
     * ```
     */
    setRotation(angle: number, update?: boolean): void;
    /**
     * 设置锚点位置
     * @param anchor 锚点偏移量
     * @param update 是否立即更新渲染
     * @example
     * ```typescript
     * groundPoint.setAnchor(new BMap.Size(16, 16), true);
     * ```
     */
    setAnchor(anchor: Size, update?: boolean): void;
    /**
     * 设置偏移量
     * @param offset 偏移量
     * @param update 是否立即更新渲染
     * @example
     * ```typescript
     * groundPoint.setOffset(new BMap.Size(5, -5), true);
     * ```
     */
    setOffset(offset: Size, update?: boolean): void;
  }
}

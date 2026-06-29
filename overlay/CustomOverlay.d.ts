declare namespace BMap {
  /**
   * 自定义覆盖物，通过 DOM 元素实现自定义内容展示。
     */
  class CustomOverlay {
    /**
     * 创建自定义覆盖物
     * @param domCreate DOM 创建函数，返回覆盖物 DOM 元素，函数内可通过 `this` 访问覆盖物实例
     * @param options 可选参数
     * @example
     * ```typescript
     * const customOverlay = new BMap.CustomOverlay(
     *   function () {
     *     const div = document.createElement('div');
     *     div.textContent = '自定义内容';
     *     div.style.cssText = 'background:#fff;padding:4px 8px;border-radius:4px;';
     *     return div;
     *   },
     *   { point: new BMap.Point(116.404, 39.915) }
     * );
     * map.addOverlay(customOverlay);
     * ```
     */
    constructor(domCreate: Function, options?: CustomOverlayOptions);
    /**
     * 设置覆盖物的地理坐标点
     * @param point 地理坐标
     * @param noReCreate 是否跳过重新创建 DOM，默认 false
     * @example
     * ```typescript
     * customOverlay.setPoint(new BMap.Point(116.410, 39.920));
     * ```
     */
    setPoint(point: Point, noReCreate?: boolean): void;
    /**
     * 设置覆盖物旋转角度
     * @param rotation 旋转角度，单位度
     * @example
     * ```typescript
     * customOverlay.setRotation(45);
     * ```
     */
    setRotation(rotation: number): void;
    /**
     * 设置 DOM 覆盖物的初始旋转基准角度（单位：度）。
     * 最终旋转角度 = rotationOrigin + 地图当前朝向（heading），自动跟随地图旋转。
     * @param origin 初始旋转基准角度，负数会自动转为正值，超出 360 取模
     * @example 设置北偏东 30 度为初始基准
     * ```typescript
     * customOverlay.setRotationOrigin(30);
     * ```
     * @example 清除初始基准（恢复到正北方向）
     * ```typescript
     * customOverlay.setRotationOrigin(0);
     * ```
     */
    setRotationOrigin(origin: number): void;
    /**
     * 返回覆盖物旋转角度
     */
    getRotation(): number;
    /**
     * 返回覆盖物的地理坐标点
     */
    getPoint(): Point;
    /**
     * 设置自定义业务属性
     * @param properties 属性对象
     * @example
     * ```typescript
     * customOverlay.setProperties({ id: 'store-001', name: '门店A' });
     * ```
     */
    setProperties(properties: any): void;
    /**
     * 返回自定义业务属性
     */
    getProperties(): any;
  }
}

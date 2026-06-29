declare namespace BMap {
  /**
   * 此类表示地图上的文本标注。
   */
  class Label {
    /**
     * 创建文本标注实例
     * @param content 标注内容，支持HTML
     * @param opts 可选参数
     * @example
     * ```typescript
     * const label = new BMap.Label('Hello BMap', {
     *   position: new BMap.Point(116.404, 39.915),
     *   offset: new BMap.Size(20, -10),
     * });
     * map.addOverlay(label);
     * ```
     */
    constructor(content: string, opts?: LabelOptions);
    /**
     * 设置文本标注的CSS样式，样式作用于标注容器元素
     * @param styles CSS样式对象，属性名使用驼峰命名（如 `backgroundColor`）
     * @example
     * ```typescript
     * label.setStyle({ color: 'red', fontSize: '14px', border: '1px solid blue' });
     * ```
     */
    setStyle(styles: object): void;
    /**
     * 设置文本标注的内容，支持HTML
     * @param content 标注内容
     * @example
     * ```typescript
     * label.setContent('<strong>新内容</strong>');
     * ```
     */
    setContent(content: string): void;
    /**
     * 设置文本标注的地理坐标，仅当通过 map.addOverlay() 添加时有效
     * @param position 地理坐标
     * @example
     * ```typescript
     * label.setPosition(new BMap.Point(116.410, 39.920));
     * ```
     */
    setPosition(position: Point): void;
    /**
     * 返回文本标注的地理坐标
     */
    getPosition(): Point;
    /**
     * 设置文本标注的偏移值
     * @param offset 偏移量
     * @example
     * ```typescript
     * label.setOffset(new BMap.Size(10, -5));
     * ```
     */
    setOffset(offset: Size): void;
    /**
     * 返回文本标注的偏移值
     */
    getOffset(): Size;
    /**
     * 设置文本标注的标题，鼠标悬停时显示
     * @param title 标题文字
     * @example
     * ```typescript
     * label.setTitle('标注标题');
     * ```
     */
    setTitle(title: string): void;
    /**
     * 返回文本标注的标题
     */
    getTitle(): string;
    /**
     * 允许覆盖物在 map.clearOverlays() 方法中被清除
     */
    enableMassClear(): void;
    /**
     * 禁止覆盖物在 map.clearOverlays() 方法中被清除
     */
    disableMassClear(): void;
    /**
     * 设置覆盖物的 zIndex
     * @param zIndex 层叠顺序值
     * @example
     * ```typescript
     * label.setZIndex(100);
     * ```
     */
    setZIndex(zIndex: number): void;
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
     * label.addEventListener('click', (e) => {
     *   console.log('label clicked', e);
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
     * label.addEventListener('click', handler);
     * label.removeEventListener('click', handler);
     * ```
     */
    removeEventListener(event: string, handler: Function): void;
  }
}

declare namespace BMap {
  /**
   * 此类表示地图上的一个图像标注。
   */
  class Marker {
    /**
     * 创建一个图像标注实例
     * @param point 标注所在的地理位置
     * @param opts 可选参数
     * @example
     * ```typescript
     * const marker = new BMap.Marker(new BMap.Point(116.404, 39.915));
     * map.addOverlay(marker);
     * ```
     * @example 自定义图标
     * ```typescript
     * const icon = new BMap.Icon('https://jsapi-demo.bj.bcebos.com/images/markers/marker_demo_1.png', new BMap.Size(30, 30));
     * const marker = new BMap.Marker(new BMap.Point(116.404, 39.915), { icon });
     * map.addOverlay(marker);
     * ```
     */
    constructor(point: Point, opts?: MarkerOptions);
    /**
     * 设置标注所用的图标对象
     * @param icon 图标对象
     * @example 使用图片 URL
     * ```typescript
     * const icon = new BMap.Icon('https://jsapi-demo.bj.bcebos.com/images/markers/marker_demo_2.png', new BMap.Size(30, 30));
     * marker.setIcon(icon);
     * ```
     * @example 使用 dataURL
     * ```typescript
     * // 32x32 红色圆点 PNG
     * const dataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAa0lEQVR4nO3O2w0AIAhDUfdfWh3AV6UFY2jg+55ScuBqv9WHhWUQNEyFWOMmBCt+hWDHIYQqfowIBajjW0QowCs+RSQgAQkIB3gihvEnAB6IZfwJgBJxFFchoDgbcRVnIUxxC4QWRiGy8LdrhvjLbe66frcAAAAASUVORK5CYII=';
     * const icon = new BMap.Icon(dataUrl, new BMap.Size(32, 32));
     * marker.setIcon(icon);
     * ```
     * @example 使用 SVG dataURL
     * ```typescript
     * const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
     *   <circle cx="16" cy="16" r="14" fill="#2563eb" stroke="#fff" stroke-width="2"/>
     * </svg>`;
     * const svgUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
     * const icon = new BMap.Icon(svgUrl, new BMap.Size(32, 32));
     * marker.setIcon(icon);
     * ```
     * @example 设置锚点和图片偏移（CSS Sprites）
     * ```typescript
     * // 原图是一个均匀九宫格图片，大小为300*300
     * // 通过imageSize设置其逻辑大小为90*90
     * // 通过imageOffset设置切图在逻辑大小上的位置起始点，（60，0）对应第一行第三个图标的起始点
     * // 通过anchor设置图标在地图上显示的锚点，（15，30）以图片底边中心作为锚点
     * const icon = new BMap.Icon(
     *   'https://jsapi-demo.bj.bcebos.com/images/markers/marker_demo_all.png',
     *   new BMap.Size(30, 30),
     *   { imageOffset: new BMap.Size(60, 0), imageSize: new BMap.Size(90, 90), anchor: new BMap.Size(15, 30) }
     * );
     * marker.setIcon(icon);
     * ```
     */
    setIcon(icon: Icon): void;
    /**
     * 返回标注所用的图标对象
     */
    getIcon(): Icon;
    /**
     * 设置标注的地理坐标
     * @param position 新的地理坐标
     * @example
     * ```typescript
     * marker.setPosition(new BMap.Point(116.410, 39.920));
     * ```
     */
    setPosition(position: Point): void;
    /**
     * 返回标注的地理坐标
     */
    getPosition(): Point;
    /**
     * 设置标注的偏移值
     * @param offset 偏移量
     * @example
     * ```typescript
     * marker.setOffset(new BMap.Size(10, -20));
     * ```
     */
    setOffset(offset: Size): void;
    /**
     * 返回标注的偏移值
     */
    getOffset(): Size;
    /**
     * 设置标注的标题，当鼠标移至标注上时显示此标题
     * @param title 标题文字
     * @example
     * ```typescript
     * marker.setTitle('天安门');
     * ```
     */
    setTitle(title: string): void;
    /**
     * 返回标注的标题
     */
    getTitle(): string;
    /**
     * 为标注添加文本标注
     * @param label 文本标注对象
     * @example
     * ```typescript
     * const label = new BMap.Label('标注文字', { offset: new BMap.Size(20, -10) });
     * marker.setLabel(label);
     * ```
     */
    setLabel(label: Label): void;
    /**
     * 返回标注关联的文本标注
     */
    getLabel(): Label;
    /**
     * 开启标注拖拽功能
     */
    enableDragging(): void;
    /**
     * 关闭标注拖拽功能
     */
    disableDragging(): void;
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
     * marker.setZIndex(999);
     * ```
     */
    setZIndex(zIndex: number): void;
    /**
     * 返回覆盖物所在的地图实例
     */
    getMap(): Map;
    /**
     * 设置标注的旋转角度
     * @param rotation 旋转角度，单位度
     * @example
     * ```typescript
     * marker.setRotation(45);
     * ```
     */
    setRotation(rotation: number): void;
    /**
     * 获取标注的旋转角度
     */
    getRotation(): number;
    /**
     * 添加事件监听函数
     * @param event 事件名称
     * @param handler 事件处理函数
     * @example
     * ```typescript
     * marker.addEventListener('click', (e) => {
     *   console.log('marker clicked', e);
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
     * marker.addEventListener('click', handler);
     * marker.removeEventListener('click', handler);
     * ```
     */
    removeEventListener(event: string, handler: Function): void;
    /**
     * 打开地点详情窗口
     * @param placeDetail PlaceDetail 实例
     * @example
     * ```typescript
     * const placeDetail = new BMap.PlaceDetail(document.createElement('div'));
     * placeDetail.setData('06d2dffda107b0ef89f15db6');
     * marker.openPlaceDetail(placeDetail);
     * ```
     */
    openPlaceDetail(placeDetail: PlaceDetail): void;
    /**
      * 关闭已打开的地点信息窗口
      */
    closePlaceDetail(): void;
  }
}

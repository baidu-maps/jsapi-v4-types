declare namespace BMap {
  /**
   * DOMLayer 支持的事件名与事件对象类型映射。
   * 事件由图层内部的 DOM 覆盖物派发
     */
  interface DOMLayerEventMap {
    /** 点击图层内的 DOM 覆盖物时触发 */
    click: OverlayMouseEvent<CustomOverlay>;
    /** 鼠标移入图层内的 DOM 覆盖物时触发 */
    mouseover: OverlayMouseEvent<CustomOverlay>;
    /** 鼠标移出图层内的 DOM 覆盖物时触发 */
    mouseout: OverlayMouseEvent<CustomOverlay>;
  }

  /**
   * 自定义DOM覆盖物图层，用于批量管理自定义DOM覆盖物。
   * 通过 map.addLayer() / map.removeLayer() 方法管理。
     */
  class DOMLayer {
    /**
     * 创建自定义DOM覆盖物图层
     * @param createDOM 创建DOM元素的回调函数，接收properties和point参数，返回HTMLElement
     * @param opts 配置选项
     * @example
     * ```typescript
     * const domLayer = new BMap.DOMLayer(function(properties, point) {
     *   const div = document.createElement('div');
     *   div.style.cssText = 'background:#ff5722;color:#fff;padding:4px 8px;border-radius:4px;font-size:12px;white-space:nowrap;';
     *   div.textContent = properties.name;
     *   return div;
     * }, {
     *   minZoom: 5,
     *   maxZoom: 18,
     *   enableDraggingMap: true,
     * });
     * domLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: { name: '天安门' } },
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.397, 39.908] }, properties: { name: '前门' } },
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.391, 39.916] }, properties: { name: '西单' } },
     *   ],
     * });
     * map.addLayer(domLayer);
     * ```
     */
    constructor(createDOM: (properties: object, point: Point) => HTMLElement, opts?: DOMLayerOptions);
    /**
     * 图层家族标志位，运行时真实存在于原型上，`Map.addLayer()` 依据它分发图层
     * @hidden
     */
    readonly isCustomHtmlLayer: true;
    /**
     * 设置图层数据，传入GeoJSON格式的FeatureCollection
     * @param data GeoJSON FeatureCollection对象
     * @example
     * ```typescript
     * domLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: { name: '天安门' } },
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.397, 39.908] }, properties: { name: '前门' } },
     *   ],
     * });
     * ```
     */
    setData(data: object | null): void;
    /**
     * 显示图层
     * @example
     * ```typescript
     * domLayer.show();
     * ```
     */
    show(): void;
    /**
     * 隐藏图层
     * @example
     * ```typescript
     * domLayer.hide();
     * ```
     */
    hide(): void;
    /**
     * 添加事件监听
     * @param event 事件类型
     * @param callback 回调函数
     * @example
     * ```typescript
     * domLayer.addEventListener('click', (e) => {
     *   console.log('点击了覆盖物', e);
     * });
     * ```
     */
    addEventListener<K extends keyof DOMLayerEventMap>(event: K, callback: (e: DOMLayerEventMap[K]) => void): void;
    /**
     * 移除图层上所有的覆盖物
     * @example
     * ```typescript
     * domLayer.removeAllOverlays();
     * ```
     */
    removeAllOverlays(): void;
    /**
     * 移除指定的覆盖物
     * @param cusItem 覆盖物实例或覆盖物id
     * @example
     * ```typescript
     * const overlays = domLayer.getCustomOverlays();
     * domLayer.removeOverlay(overlays[0]);
     * ```
     */
    removeOverlay(cusItem: Overlay | string): void;
    /**
     * 获取当前图层所有的自定义覆盖物
     * @example
     * ```typescript
     * const overlays = domLayer.getCustomOverlays();
     * console.log('覆盖物数量:', overlays.length);
     * ```
     */
    getCustomOverlays(): Overlay[];
    /**
     * 更新图层样式配置
     * @param options 样式配置项
     * @example
     * ```typescript
     * domLayer.setStyleOptions({
     *   minZoom: 8,
     *   maxZoom: 16,
     *   anchors: [0.5, 0.5],
     * });
     * ```
     */
    setStyleOptions(options: Partial<DOMLayerOptions>): void;
  }

  /**
   * DOMLayer 构造函数配置项
   * @category 配置项
     */
  interface DOMLayerOptions {
    /**
     * 最小显示缩放等级
     * @default 3
     */
    minZoom?: number;
    /**
     * 最大显示缩放等级
     * @default 21
     */
    maxZoom?: number;
    /** 图层层叠顺序 */
    zIndex?: number;
    /** 水平偏移量，单位像素 */
    offsetX?: number;
    /** 垂直偏移量，单位像素 */
    offsetY?: number;
    /**
     * 锚点位置，取值范围[0,1]的数组[水平, 垂直]
     * @default [0.5, 1]
     */
    anchors?: [number, number];
    /**
     * 坐标系类型
     * @default 'BD09'
     */
    coordinate?: string;
    /**
     * 是否允许拖动地图
     * @default false
     */
    enableDraggingMap?: boolean;
    /**
     * 是否可见
     * @default true
     */
    visible?: boolean;
    /** 初始数据 */
    data?: object | null;
  }
}

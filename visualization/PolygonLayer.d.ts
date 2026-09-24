declare namespace BMap {
  /**
   * 命中拾取返回的逐多边形几何缓存项（{@link PolygonLayer.hitTest} 与拾取事件的 `value`）。
   * MultiPolygon 的每个子多边形各自成项
     */
  interface PolygonLayerItem {
    /** 环列表 `[外环, 洞1, ...]`，每个环为 `[[lng, lat], ...]` */
    rings: number[][][];
    /** 要素 id（取自 `idKey` 字段，缺省用序号） */
    id: string | number;
    /** 多边形序号 */
    index: number;
    /** 要素的 properties */
    properties: any;
    /** 归一化后的要素 */
    feature: any;
  }

  /**
   * PolygonLayer构造函数options参数。
   *
   * @category 配置项
     */
  interface PolygonLayerOptions {
    /**
     * 填充色，css 字符串
     * @default 'rgba(25, 25, 250, 0.6)'
     */
    fillColor?: StyleValue<string>;
    /**
     * 填充透明度 [0,1]
     * @default 1
     */
    fillOpacity?: StyleValue<number>;

    /**
     * 描边色，css 字符串
     * @default 'rgba(250, 250, 25, 1)'
     */
    strokeColor?: StyleValue<string>;
    /**
     * 描边宽度（px），0 表示不描边
     * @default 0
     */
    strokeWeight?: StyleValue<number>;
    /**
     * 描边透明度 [0,1]
     * @default 1
     */
    strokeOpacity?: number;

    /**
     * 纹理图片地址，非空即启用平铺填充
     * @default ''
     */
    fillTextureUrl?: string;
    /** 平铺时单张图在屏幕上的宽度（px），不传取图片真实宽度 */
    fillTextureSize?: number;
    /**
     * `true` 只用纹理 alpha 做镂空、颜色取 `fillColor`；`false` 用纹理自身颜色
     * @default false
     */
    fillTextureAlphaOnly?: boolean;

    /** 初始数据，同 {@link PolygonLayer.setData} 的入参 */
    data?: any;
    /**
     * 取要素 id 的字段名
     * @default 'id'
     */
    idKey?: string;
    /**
     * 是否开启鼠标交互（命中光标 + 事件派发）
     * @default false
     */
    enablePicked?: boolean;
    /**
     * 命中后是否更换鼠标光标
     * @default true
     */
    mouseStyleChange?: boolean;
    /**
     * 命中容差（css px）
     * @default 4
     */
    pickTolerance?: number;
    /**
     * 命中后是否继续向下层派发
     * @default false
     */
    pickThrough?: boolean;

    /**
     * 是否显示
     * @default true
     */
    visible?: boolean;
    /**
     * 显示层级，小的先画
     * @default 1
     */
    zIndex?: number;
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
    /** 图层参考中心点，规避大坐标浮点抖动 */
    referCenter?: Point;
    /** 绘制阶段，`null` / `'building'` / `'poi'`，不设为默认落点 */
    renderStage?: 'building' | 'poi' | null;
  }

  /**
   * 面可视化图层，用于在地图上批量绘制 GeoJSON 面数据，适合面量较大的场景。
   *
   * 几何类型支持 `Polygon` / `MultiPolygon`（含洞）。可选描边（`strokeWeight > 0`，
   * 内部用 {@link PolylineLayer} 实现）。支持纯色填充与整张图平铺填充，见 {@link PolygonLayerOptions}。
     */
  class PolygonLayer {
    /**
     * 创建面图层
     * @param options 配置项
     * @example
     * ```typescript
     * const layer = new BMap.PolygonLayer({
     *   fillColor: 'rgba(25, 25, 250, 0.6)',
     *   fillOpacity: 1,
     *   strokeColor: 'rgba(250, 250, 25, 1)',
     *   strokeWeight: 2,
     *   referCenter: new BMap.Point(116.404, 39.915)
     * });
     * layer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     {
     *       type: 'Feature',
     *       geometry: {
     *         type: 'Polygon',
     *         coordinates: [[[116.40, 39.91], [116.42, 39.91], [116.42, 39.92], [116.40, 39.91]]]
     *       },
     *       properties: {}
     *     }
     *   ]
     * });
     * map.addLayer(layer);
     * ```
     */
    constructor(options?: PolygonLayerOptions);

    /** @hidden */
    readonly isWebGLLayer: true;

    /**
     * 设置数据，支持 `FeatureCollection` / `Feature` / `Feature[]` / 裸 Geometry。
     * 几何类型支持 `Polygon` / `MultiPolygon`
     * @group 数据
     */
    setData(geojson: any): PolygonLayer;
    /**
     * 返回原始数据
     * @group 数据
     */
    getData(): any;
    /**
     * 清空数据与 GPU 缓冲（含内部描边）
     * @group 数据
     */
    clearData(): PolygonLayer;

    /**
     * 批量更新样式。仅更新已声明的样式键；`visible` / `zIndex` /
     * `renderStage` / `referCenter` / `enablePicked` 转发到对应 setter，其余未知键忽略并告警一次
     * @group 样式
     */
    setOptions(options: PolygonLayerOptions): PolygonLayer;
    /**
     * 返回当前样式对象
     * @group 样式
     */
    getOptions(): PolygonLayerOptions;

    /**
     * 开关鼠标交互（命中光标 + 事件派发）
     * @group 拾取
     */
    setEnablePicked(enable: boolean): PolygonLayer;
    /** @group 拾取 */
    getEnablePicked(): boolean;
    /**
     * 命中测试：容器像素坐标 → 命中的多边形，未命中返回 `null`
     * @param x 容器坐标 x（css px）
     * @param y 容器坐标 y（css px）
     * @group 拾取
     */
    hitTest(x: number, y: number): PolygonLayerItem | null;

    /** @group 显示属性 */
    setVisible(visible: boolean): void;
    /** @group 显示属性 */
    getVisible(): boolean;
    /** @group 显示属性 */
    setZIndex(zIndex: number): void;
    /** @group 显示属性 */
    getZIndex(): number;
    /** @group 显示属性 */
    setRenderStage(stage: 'building' | 'poi' | null): void;
    /** @group 显示属性 */
    getRenderStage(): 'building' | 'poi' | null;
    /** @group 显示属性 */
    setRefCenter(center: Point): void;
    /** @group 显示属性 */
    getRefCenter(): Point | null;

    /**
     * 添加事件监听（需 `enablePicked` 为 `true`）
     * @param event 事件名称
     * @param handler 事件处理函数
     * @group 事件
     */
    addEventListener<K extends keyof PolygonLayerEventMap>(event: K, handler: (e: PolygonLayerEventMap[K]) => void): void;
    /**
     * 移除事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     * @group 事件
     */
    removeEventListener<K extends keyof PolygonLayerEventMap>(event: K, handler: (e: PolygonLayerEventMap[K]) => void): void;
  }

  /**
   * PolygonLayer 支持的事件名与事件对象类型映射。`value` 为命中的 {@link PolygonLayerItem}
     */
  interface PolygonLayerEventMap {
    click: VisualPickEvent<PolygonLayer, PolygonLayerItem>;
    dblclick: VisualPickEvent<PolygonLayer, PolygonLayerItem>;
    rightclick: VisualPickEvent<PolygonLayer, PolygonLayerItem>;
    mousemove: VisualPickEvent<PolygonLayer, PolygonLayerItem>;
    mouseover: VisualPickEvent<PolygonLayer, PolygonLayerItem>;
    mouseout: VisualPickEvent<PolygonLayer, PolygonLayerItem>;
  }
}

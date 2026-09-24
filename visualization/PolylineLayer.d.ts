declare namespace BMap {
  /**
   * 命中拾取返回的逐要素几何缓存项（{@link PolylineLayer.hitTest} 与拾取事件的 `value`）
     */
  interface PolylineLayerItem {
    /** 线的经纬度点串，一条要素可含多段 `[[[lng, lat], ...], ...]` */
    paths: number[][][];
    /** 线宽（px） */
    weight: number;
    /** 要素 id（取自 `idKey` 字段，缺省用序号） */
    id: string | number;
    /** 要素序号 */
    index: number;
    /** 要素的 properties */
    properties: any;
    /** 归一化后的要素 */
    feature: any;
  }

  /**
   * PolylineLayer构造函数options参数。
   *
   * @category 配置项
     */
  interface PolylineLayerOptions {
    /**
     * 线颜色，css 字符串。
     * 注意：虚线模式（`strokeStyle` 为 `dashed` / `dotted`）下走 uniform 染色，回调不生效
     * @default 'rgba(25, 25, 250, 1)'
     */
    strokeColor?: StyleValue<string>;
    /**
     * 线宽（屏幕 px，全宽）。
     * 注意：传回调时，沿线长度换算（虚线圆间距、纹理图案尺寸）仍按默认值 4 计算
     * @default 4
     */
    strokeWeight?: StyleValue<number>;
    /**
     * 线透明度 [0,1]，与线色 alpha、图层级 `opacity` 相乘
     * @default 1
     */
    strokeOpacity?: number;
    /**
     * 拐角连接样式。纹理/虚线线不建议用 `miter`（锐角处会被剪切拉歪）
     * @default 'round'
     */
    strokeLineJoin?: StyleValue<'miter' | 'bevel' | 'round'>;
    /**
     * 线端点样式
     * @default 'round'
     */
    strokeLineCap?: StyleValue<'butt' | 'round' | 'square'>;

    /**
     * 线型：`solid` 实线、`dashed` 虚线、`dotted` 点线
     * @default 'solid'
     */
    strokeStyle?: 'solid' | 'dashed' | 'dotted';
    /**
     * 实线段/间隙的屏幕像素长度，同 SVG `stroke-dasharray` 口径，奇数个自动翻倍
     * @default [8, 4]
     */
    dashArray?: number[];

    /**
     * 纹理图片地址，必须是竖图（x 跨线宽、y 沿线方向）。非空时优先级高于 `strokeStyle`
     * @default ''
     */
    strokeTextureUrl?: string;
    /**
     * 原图宽（px），只参与沿线长度换算，不传取图片真实尺寸
     */
    strokeTextureWidth?: number;
    /**
     * 原图高（px），同上，不传取图片真实尺寸
     */
    strokeTextureHeight?: number;
    /**
     * `true` 按 `strokeTextureGap` 间隔平铺（箭头串）；`false` 沿线连续拉伸
     * @default false
     */
    strokeTextureSpaced?: boolean;
    /**
     * 相邻纹理间隔（px），仅 `strokeTextureSpaced` 为 `true` 时生效
     * @default 16
     */
    strokeTextureGap?: number;
    /**
     * 纹理叠加色（rgb 相乘），仅配了 `strokeTextureUrl` 时生效
     * @default 'rgba(255, 255, 255, 1)'
     */
    strokeTextureColor?: string;

    /** 初始数据，同 {@link PolylineLayer.setData} 的入参 */
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
     * 图层级透明度 [0,1]，与线色 alpha、`strokeOpacity` 相乘
     * @default 1
     */
    opacity?: number;
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
    /**
     * 绘制阶段，图层绘制在该阶段之后（即叠在其上）。
     * 不设表示默认落点：覆盖物之后、3D 楼块之前
     */
    renderStage?: 'building' | 'poi' | null;
  }

  /**
   * 折线可视化图层，用于在地图上批量绘制 GeoJSON 折线数据，适合线量较大的场景。
   *
   * 几何类型支持 `LineString` / `MultiLineString`。支持实线、虚线、纹理贴图
   * 三种渲染模式，见 {@link PolylineLayerOptions}。
     */
  class PolylineLayer {
    /**
     * 创建折线图层
     * @param options 配置项
     * @example
     * ```typescript
     * const layer = new BMap.PolylineLayer({
     *   strokeColor: 'rgba(25, 25, 250, 1)',
     *   strokeWeight: 4,
     *   referCenter: new BMap.Point(116.404, 39.915)
     * });
     * layer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     {
     *       type: 'Feature',
     *       geometry: { type: 'LineString', coordinates: [[116.40, 39.91], [116.42, 39.92]] },
     *       properties: {}
     *     }
     *   ]
     * });
     * map.addLayer(layer);
     * ```
     */
    constructor(options?: PolylineLayerOptions);

    /** @hidden */
    readonly isWebGLLayer: true;

    /**
     * 设置数据，支持 `FeatureCollection` / `Feature` / `Feature[]` / 裸 Geometry。
     * 几何类型支持 `LineString` / `MultiLineString`
     * @group 数据
     */
    setData(geojson: any): PolylineLayer;
    /**
     * 返回原始数据
     * @group 数据
     */
    getData(): any;
    /**
     * 清空数据与 GPU 缓冲
     * @group 数据
     */
    clearData(): PolylineLayer;

    /**
     * 批量更新样式。仅更新已声明的样式键；`opacity` / `visible` / `zIndex` /
     * `renderStage` / `referCenter` / `enablePicked` 转发到对应 setter，其余未知键忽略并告警一次
     * @group 样式
     */
    setOptions(options: PolylineLayerOptions): PolylineLayer;
    /**
     * 返回当前样式对象
     * @group 样式
     */
    getOptions(): PolylineLayerOptions;

    /**
     * 开关鼠标交互（命中光标 + 事件派发）
     * @group 拾取
     */
    setEnablePicked(enable: boolean): PolylineLayer;
    /** @group 拾取 */
    getEnablePicked(): boolean;
    /**
     * 命中测试：容器像素坐标 → 命中的要素，未命中返回 `null`
     * @param x 容器坐标 x（css px）
     * @param y 容器坐标 y（css px）
     * @group 拾取
     */
    hitTest(x: number, y: number): PolylineLayerItem | null;

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
    addEventListener<K extends keyof PolylineLayerEventMap>(event: K, handler: (e: PolylineLayerEventMap[K]) => void): void;
    /**
     * 移除事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     * @group 事件
     */
    removeEventListener<K extends keyof PolylineLayerEventMap>(event: K, handler: (e: PolylineLayerEventMap[K]) => void): void;
  }

  /**
   * PolylineLayer 支持的事件名与事件对象类型映射。`value` 为命中的 {@link PolylineLayerItem}
     */
  interface PolylineLayerEventMap {
    click: VisualPickEvent<PolylineLayer, PolylineLayerItem>;
    dblclick: VisualPickEvent<PolylineLayer, PolylineLayerItem>;
    rightclick: VisualPickEvent<PolylineLayer, PolylineLayerItem>;
    mousemove: VisualPickEvent<PolylineLayer, PolylineLayerItem>;
    mouseover: VisualPickEvent<PolylineLayer, PolylineLayerItem>;
    mouseout: VisualPickEvent<PolylineLayer, PolylineLayerItem>;
  }
}

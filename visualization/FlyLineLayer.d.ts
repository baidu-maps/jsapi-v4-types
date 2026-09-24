declare namespace BMap {
  /**
   * FlyLineLayer构造函数options参数。
   *
   * 一条飞线 = 一段抬升的弧线 + 沿弧循环流动的亮带。字段命名与 {@link PolylineLayer} 对齐。
   * 曲线形态由 `mode` 决定，不由数据点数决定。
   * @category 配置项
     */
  interface FlyLineLayerOptions {
    /**
     * 线颜色，css 字符串
     * @default 'rgba(255, 71, 26, 0.9)'
     */
    strokeColor?: string;
    /**
     * 线宽（屏幕 px，全宽）
     * @default 4
     */
    strokeWeight?: number;
    /**
     * 线透明度 [0,1]，与线色 alpha、图层级 `opacity` 相乘
     * @default 1
     */
    strokeOpacity?: number;
    /**
     * 拐角连接样式
     * @default 'round'
     */
    strokeLineJoin?: 'miter' | 'bevel' | 'round';
    /**
     * 线端点样式
     * @default 'round'
     */
    strokeLineCap?: 'butt' | 'round' | 'square';

    /**
     * 曲线形态：`'arc'` 只取首末两点生成弧线（忽略中间点）；`'path'` 原样使用所有点、只叠加高度
     * @default 'arc'
     */
    mode?: 'arc' | 'path';
    /**
     * 弧顶高度占首末点直线距离的比例，0 即贴地不抬升
     * @default 0.2
     */
    arcHeight?: number;
    /**
     * 水平弯曲程度（控制点沿垂线偏移占直线距离的比例），0 即不弯。**仅 `mode: 'arc'` 生效**
     * @default 0.15
     */
    curvature?: number;
    /**
     * 每条弧的采样段数。**仅 `mode: 'arc'` 生效**
     * @default 32
     */
    segments?: number;

    /**
     * 是否流动，`false` 退化成静态弧线层
     * @default true
     */
    animation?: boolean;
    /**
     * 一圈秒数
     * @default 2
     */
    duration?: number;
    /**
     * 粒子间距占全线比例，粒子数 = 1 / interval；取 1 即单个彗星
     * @default 0.25
     */
    interval?: number;
    /**
     * 拖尾长度占间隔的比例
     * @default 0.6
     */
    trailLength?: number;
    /**
     * 底线常显透明度，0 则只见流动亮点、整条弧不可见
     * @default 0.25
     */
    baseOpacity?: number;
    /**
     * 每条线是否随机相位，`false` 则所有线齐步走
     * @default true
     */
    randomPhase?: boolean;
    /**
     * 混合模式：`'lighter'` 为加性混合，只在深色底图上有意义
     * @default 'default'
     */
    blend?: 'default' | 'lighter';

    /** 初始数据，同 {@link FlyLineLayer.setData} 的入参 */
    data?: any;
    /**
     * 取要素 id 的字段名
     * @default 'id'
     */
    idKey?: string;

    /**
     * 是否显示
     * @default true
     */
    visible?: boolean;
    /**
     * 图层级透明度 [0,1]
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
    /** 绘制阶段，`null` / `'building'` / `'poi'`，不设为默认落点 */
    renderStage?: 'building' | 'poi' | null;
  }

  /**
   * 飞线可视化图层，在地图上批量绘制抬升的流动弧线，适合 OD（起讫点）关系展示。
   *
   * 几何类型支持 `LineString` / `MultiLineString`（一条 OD 即一条两点的 `LineString`）。
   * 曲线形态由 `mode` 决定：`'arc'` 首末两点成弧、`'path'` 沿原始折线抬升，见 {@link FlyLineLayerOptions}。
     */
  class FlyLineLayer {
    /**
     * 创建飞线图层
     * @param options 配置项
     * @example
     * ```typescript
     * const layer = new BMap.FlyLineLayer({ strokeColor: 'rgba(255, 71, 26, 0.9)', arcHeight: 0.2 });
     * layer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'LineString', coordinates: [[116.40, 39.91], [117.20, 39.13]] }, properties: {} }
     *   ]
     * });
     * map.addLayer(layer);
     * ```
     */
    constructor(options?: FlyLineLayerOptions);

    /** @hidden */
    readonly isWebGLLayer: true;

    /**
     * 设置数据，支持 `FeatureCollection` / `Feature` / `Feature[]` / 裸 Geometry。
     * 几何类型支持 `LineString` / `MultiLineString`
     * @group 数据
     */
    setData(geojson: any): FlyLineLayer;
    /**
     * 返回原始数据
     * @group 数据
     */
    getData(): any;
    /**
     * 清空数据与 GPU 缓冲
     * @group 数据
     */
    clearData(): FlyLineLayer;

    /**
     * 批量更新样式
     * @group 样式
     */
    setOptions(options: FlyLineLayerOptions): FlyLineLayer;
    /**
     * 返回当前样式对象
     * @group 样式
     */
    getOptions(): FlyLineLayerOptions;

    /** @group 显示属性 */
    setVisible(visible: boolean): void;
    /** @group 显示属性 */
    getVisible(): boolean;
    /** @group 显示属性 */
    setOpacity(opacity: number): void;
    /** @group 显示属性 */
    getOpacity(): number;
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
  }
}

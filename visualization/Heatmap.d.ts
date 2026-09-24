declare namespace BMap {
  /**
   * Heatmap构造函数options参数。
   * @category 配置项
     */
  interface HeatmapOptions {
    /**
     * 热力核半径，单位由 `unit` 决定
     * @default 20
     */
    size?: number;
    /**
     * 半径单位：`'px'` 屏幕像素 / `'m'` 墨卡托米
     * @default 'px'
     */
    unit?: 'px' | 'm';
    /**
     * 权重归一化上界
     * @default 100
     */
    max?: number;
    /**
     * 权重归一化下界
     * @default 0
     */
    min?: number;
    /**
     * 最小透明度 [0,1]
     * @default 0
     */
    minOpacity?: number;
    /**
     * 最大透明度 [0,1]
     * @default 1
     */
    maxOpacity?: number;
    /**
     * 渐变色，如 `{ 0.25: 'rgba(0,0,255,1)', 1: 'rgba(255,0,0,1)' }`。
     * 键为 [0,1] 的位置，值为 css 颜色
     */
    gradient?: { [stop: number]: string };
    /**
     * 权重字段名（取 `properties[weightField]` 作为点权重）
     * @default 'count'
     */
    weightField?: string;

    /** 初始数据，同 {@link Heatmap.setData} 的入参 */
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
   * 热力图可视化图层，把点数据按权重渲染成热力分布，适合密度/热度展示。
   *
   * 几何类型支持 `Point` / `MultiPoint`，点权重取 `properties[weightField]`（默认字段 `count`）。
   * 是旧 `BMapGL.Heatmap` 的原地平替，用法不变。
     */
  class Heatmap {
    /**
     * 创建热力图图层
     * @param options 配置项
     * @example
     * ```typescript
     * const layer = new BMap.Heatmap({ size: 20, max: 100 });
     * layer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: { count: 30 } }
     *   ]
     * });
     * map.addLayer(layer);
     * ```
     */
    constructor(options?: HeatmapOptions);

    /** @hidden */
    readonly isWebGLLayer: true;

    /**
     * 设置数据，支持 `FeatureCollection` / `Feature` / `Feature[]` / 裸 Geometry。
     * 几何类型支持 `Point` / `MultiPoint`
     * @group 数据
     */
    setData(geojson: any): Heatmap;
    /**
     * 返回原始数据
     * @group 数据
     */
    getData(): any;
    /**
     * 清空数据与 GPU 缓冲
     * @group 数据
     */
    clearData(): Heatmap;

    /**
     * 批量更新样式
     * @group 样式
     */
    setOptions(options: HeatmapOptions): Heatmap;
    /**
     * 返回当前样式对象
     * @group 样式
     */
    getOptions(): HeatmapOptions;
    /**
     * 设置渐变色
     * @group 样式
     */
    setGradient(gradient: { [stop: number]: string }): Heatmap;
    /**
     * 设置热力核半径
     * @group 样式
     */
    setRadius(radius: number): Heatmap;

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

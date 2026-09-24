declare namespace BMap {
  /**
   * 柱体分段样式取值：标量（整柱共用）、数组（按分段下标取），
   * 或回调 `(value, index, values) => T`（按分段求值）
     */
  type BarSegmentValue<T> = T | T[] | ((value: number, index: number, values: number[]) => T);

  /**
   * BarLayer构造函数options参数。
   *
   * 每个点竖一根多棱柱，可按 `properties.value` 数组分段堆叠。每根柱的分段量值 / 高度 /
   * 半径 / 颜色优先取 feature 的 `properties`（`value` / `height` / `size` / `color`），
   * 缺省回落到这里的 options。
   * @category 配置项
     */
  interface BarLayerOptions {
    /**
     * 柱体颜色，css 字符串。数组按分段取色，回调按分段求值
     * @default 'rgba(0, 180, 0, 1)'
     */
    color?: BarSegmentValue<string>;
    /**
     * 柱体半径基准，单位由 `unit` 决定
     * @default 50000
     */
    size?: number;
    /**
     * 柱体高度。number 作为总高按各段量值占比分配；number[] 逐段绝对高；回调按分段求值
     * @default 100000
     */
    height?: BarSegmentValue<number>;
    /**
     * 棱数，调大（如 50）趋近圆柱
     * @default 4
     */
    edgeCount?: number;
    /**
     * 尺寸单位：`'m'` 墨卡托米（物理尺寸不随缩放变）/ `'px'` 屏幕像素（随缩放变）
     * @default 'm'
     */
    unit?: 'm' | 'px';

    /** 初始数据，同 {@link BarLayer.setData} 的入参 */
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
   * 三维柱状图可视化图层，在每个数据点上竖起一根多棱柱，适合展示分布量。
   *
   * 一根柱子可按 `value` 数组分成多段堆叠，每段单独的高度与颜色，用来表达
   * 「一个位置上的多类别量」。几何类型支持 `Point` / `MultiPoint`。
     */
  class BarLayer {
    /**
     * 创建柱状图图层
     * @param options 配置项
     * @example
     * ```typescript
     * const layer = new BMap.BarLayer({
     *   color: 'rgba(0, 180, 0, 1)',
     *   size: 50000,
     *   height: 100000,
     *   referCenter: new BMap.Point(116.404, 39.915)
     * });
     * layer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: { value: [3, 5, 2] } }
     *   ]
     * });
     * map.addLayer(layer);
     * ```
     */
    constructor(options?: BarLayerOptions);

    /** @hidden */
    readonly isWebGLLayer: true;

    /**
     * 设置数据，支持 `FeatureCollection` / `Feature` / `Feature[]` / 裸 Geometry。
     * 几何类型支持 `Point` / `MultiPoint`
     * @group 数据
     */
    setData(geojson: any): BarLayer;
    /**
     * 返回原始数据
     * @group 数据
     */
    getData(): any;
    /**
     * 清空数据与 GPU 缓冲
     * @group 数据
     */
    clearData(): BarLayer;

    /**
     * 批量更新样式。仅更新已声明的样式键；`opacity` / `visible` / `zIndex` /
     * `renderStage` / `referCenter` 转发到对应 setter，其余未知键忽略并告警一次
     * @group 样式
     */
    setOptions(options: BarLayerOptions): BarLayer;
    /**
     * 返回当前样式对象
     * @group 样式
     */
    getOptions(): BarLayerOptions;

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

declare namespace BMap {
  /**
   * 聚合图层鼠标事件（`click` / `mouseover` / `mouseout`）的 `value`
     */
  interface ClusterClickValue {
    /** 是否是聚合点 */
    isCluster: boolean;
    /** 聚合点 id，仅聚合点有 */
    clusterId?: number;
    /** 父聚合点 id */
    parentId?: number;
    /** 点数：聚合点为成员数，单点为 1 */
    pointCount: number;
    /** 命中点经纬度 */
    point: Point;
    /** 成员点经纬度外包框 [minLng, minLat, maxLng, maxLat]，单点为 `null` */
    bbox: [number, number, number, number] | null;
    /** 要素 properties */
    properties: any;
  }

  /**
   * 聚合图层 `change` 事件的 `value`，每次刷新后派发
     */
  interface ClusterChangeValue {
    /** 当前视野内的单点要素 */
    singles: any[];
    /** 当前视野内的聚合点要素 */
    clusters: any[];
    /** 当前层级 */
    zoom: number;
  }

  /**
   * 聚合图层刷新事件对象
     */
  interface ClusterChangeEvent {
    /** 事件类型 */
    type: string;
    /** 触发事件的图层 */
    target: ClusterLayer;
    /** 刷新后的聚合结果 */
    value: ClusterChangeValue;
  }

  /**
   * ClusterLayer 支持的事件名与事件对象类型映射
     */
  interface ClusterLayerEventMap {
    /** 点击单点/聚合点。点击聚合点默认自动调整视野（见 `fitViewOnClick`） */
    click: VisualPickEvent<ClusterLayer, ClusterClickValue>;
    /** 鼠标移入单点/聚合点 */
    mouseover: VisualPickEvent<ClusterLayer, ClusterClickValue>;
    /** 鼠标移出单点/聚合点 */
    mouseout: VisualPickEvent<ClusterLayer, ClusterClickValue>;
    /** 每次聚合刷新后触发 */
    change: ClusterChangeEvent;
  }

  /**
   * ClusterLayer构造函数options参数。
   * @category 配置项
     */
  interface ClusterLayerOptions {
    /**
     * 聚合半径（px）
     * @default 60
     */
    clusterRadius?: number;
    /**
     * 成簇最小点数
     * @default 2
     */
    clusterMinPoints?: number;
    /**
     * 聚合起始层级
     * @default 3
     */
    clusterMinZoom?: number;
    /**
     * 聚合结束层级，大于该层级不再聚合
     * @default 16
     */
    clusterMaxZoom?: number;
    /**
     * 瓦片尺寸，参与半径归一化
     * @default 256
     */
    tileSize?: number;

    /**
     * 点击聚合点是否自动调整视野
     * @default true
     */
    fitViewOnClick?: boolean;
    /**
     * 调整视野的边距 [上, 右, 下, 左]
     * @default [12, 12, 12, 12]
     */
    fitViewMargin?: [number, number, number, number];
    /**
     * `true` 拖动/缩放过程中实时刷新（按 `waitTime` 节流）；`false` 仅在地图静止后刷新
     * @default false
     */
    updateRealTime?: boolean;
    /**
     * 实时刷新节流间隔（ms）
     * @default 300
     */
    waitTime?: number;
    /**
     * 是否开启鼠标交互。**默认 `true`**（点击聚合点 fitView 依赖它），与其他可视化图层不同
     * @default true
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
     * 聚合点图标，`(properties) => 图标源`，不设用内置气泡（按占比着色 + 数字）
     */
    clusterIcon?: (properties: any) => PointIconSource;
    /**
     * 聚合点图标尺寸，`(properties) => [w, h] | number`，不设与内置气泡一致
     */
    clusterIconSize?: (properties: any) => [number, number] | number;
    /**
     * 单点样式，透传给内部 {@link PointLayer} 的 options（`shape` / `size` / `fillColor` / `icon` …）
     */
    singleStyle?: PointLayerOptions;

    /** 初始数据，同 {@link ClusterLayer.setData} 的入参 */
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
   * 点聚合可视化图层，把密集点数据按屏幕距离逐级聚合，适合大量点位的展示。
   *
   * 渲染复用两个内部 {@link PointLayer}：聚合点走图标模式（canvas 画气泡数字），
   * 单点走图元模式（圆点）。几何类型支持 `Point` / `MultiPoint`。
     */
  class ClusterLayer {
    /**
     * 创建点聚合图层
     * @param options 配置项
     * @example
     * ```typescript
     * const layer = new BMap.ClusterLayer({ clusterRadius: 60 });
     * layer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: {} }
     *   ]
     * });
     * map.addLayer(layer);
     * layer.addEventListener('click', (e) => console.log(e.value));
     * ```
     */
    constructor(options?: ClusterLayerOptions);

    /** @hidden */
    readonly isWebGLLayer: true;

    /**
     * 设置数据，支持 `FeatureCollection` / `Feature` / `Feature[]` / 裸 Geometry。
     * 几何类型支持 `Point` / `MultiPoint`
     * @group 数据
     */
    setData(geojson: any): ClusterLayer;
    /**
     * 返回原始数据
     * @group 数据
     */
    getData(): any;
    /**
     * 清空数据与 GPU 缓冲
     * @group 数据
     */
    clearData(): ClusterLayer;

    /**
     * 批量更新配置/样式。聚合参数变更会重算索引，样式变更只刷新
     * @group 样式
     */
    setOptions(options: ClusterLayerOptions): ClusterLayer;
    /**
     * 返回当前配置对象
     * @group 样式
     */
    getOptions(): ClusterLayerOptions;

    /**
     * 按当前视野与层级重新计算并渲染聚合结果
     * @group 聚合
     */
    redraw(): void;
    /**
     * 取内部聚合点图层（图标模式 {@link PointLayer}）
     * @group 聚合
     */
    getClusterLayer(): PointLayer;
    /**
     * 取内部单点图层（图元模式 {@link PointLayer}）
     * @group 聚合
     */
    getSingleLayer(): PointLayer;

    /**
     * 开关鼠标交互（命中光标 + 事件派发）
     * @group 拾取
     */
    setEnablePicked(enable: boolean): ClusterLayer;
    /** @group 拾取 */
    getEnablePicked(): boolean;

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

    /**
     * 添加事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     * @group 事件
     */
    addEventListener<K extends keyof ClusterLayerEventMap>(event: K, handler: (e: ClusterLayerEventMap[K]) => void): void;
    /**
     * 移除事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     * @group 事件
     */
    removeEventListener<K extends keyof ClusterLayerEventMap>(event: K, handler: (e: ClusterLayerEventMap[K]) => void): void;
  }
}

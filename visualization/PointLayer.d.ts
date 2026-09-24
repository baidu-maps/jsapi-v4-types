declare namespace BMap {
  /**
   * 形状类型。形状模式（未配置 `icon`）下有效，与内置着色器的形状分支一一对应
     */
  type PointShape =
    | 'circle'
    | 'square'
    | 'triangle'
    | 'diamond'
    | 'cross'
    | 'arrow'
    | 'arrowTail'
    | 'star'
    | 'waterdrop';

  /**
   * 锚点位置，决定坐标点落在形状的哪个位置
     */
  type PointAnchor =
    | 'center'
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'rightCenter'
    | 'bottomRight'
    | 'bottomCenter'
    | 'bottomLeft'
    | 'leftCenter';

  /**
   * 图标源。图片 url、canvas，或带业务 id 的 canvas（`id` 用于图集去重）
     */
  type PointIconSource = string | HTMLCanvasElement | { canvas: HTMLCanvasElement; id?: string | number };

  /**
   * 命中拾取返回的逐点几何缓存项（{@link PointLayer.hitTest} 与拾取事件的 `value`）
     */
  interface PointLayerItem {
    /** 命中点经纬度（bd09ll） */
    point: Point;
    /** 尺寸（px）。图标模式下为宽高中的较大值 */
    size: number;
    /** 图标显示宽度（px），仅图标模式 */
    width?: number;
    /** 图标显示高度（px），仅图标模式 */
    height?: number;
    /** 锚点向量 [-1,1]，仅图标模式 */
    anchor?: [number, number];
    /** 缩放比例 */
    scale: number;
    /** 像素偏移 [x, y] */
    offset: [number, number];
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
   * PointLayer构造函数options参数。
   *
   * @category 配置项
     */
  interface PointLayerOptions {
    /**
     * 形状类型
     * @default 'circle'
     */
    shape?: StyleValue<PointShape>;
    /**
     * 形状大小（px）
     * @default 20
     */
    size?: StyleValue<number>;
    /**
     * 填充色，css 字符串
     * @default 'rgba(50, 50, 255, 1)'
     */
    fillColor?: StyleValue<string>;
    /**
     * 填充透明度 [0,1]，与图层级 `opacity` 相乘
     * @default 1
     */
    fillOpacity?: StyleValue<number>;
    /**
     * 描边色，css 字符串
     * @default 'rgba(255, 255, 255, 1)'
     */
    strokeColor?: StyleValue<string>;
    /**
     * 描边宽度（px），0 表示不描边
     * @default 0
     */
    strokeWeight?: StyleValue<number>;
    /**
     * 缩放比例
     * @default 1
     */
    scale?: StyleValue<number>;
    /**
     * 旋转角度（度）
     * @default 0
     */
    rotation?: StyleValue<number>;
    /**
     * 像素偏移 [x, y]
     * @default [0, 0]
     */
    offset?: StyleValue<[number, number]>;
    /**
     * 锚点，决定坐标点落在形状的哪个位置
     * @default 'center'
     */
    anchor?: PointAnchor;
    /**
     * `true` 贴地（大小随缩放变化）；`false` 屏幕固定像素大小
     * @default false
     */
    isFlat?: boolean;

    /**
     * 图标：图片 url、canvas（可用来画文字/数字），或 `{canvas, id}`。
     * 配置后进入图标模式，与形状模式互斥
     * @default null
     */
    icon?: StyleValue<PointIconSource>;
    /**
     * 图标显示尺寸 `[w, h]` 或 number（px），不设则用图片/canvas 自身尺寸
     * @default null
     */
    iconSize?: StyleValue<[number, number] | number>;

    /** 初始数据，同 {@link PointLayer.setData} 的入参 */
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
     * 图层级透明度 [0,1]，与逐点 `fillOpacity` 相乘
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
   * 点可视化图层，用于在地图上批量绘制 GeoJSON 点数据，适合点量较大的场景。
   * 几何类型支持 `Point` / `MultiPoint`。
   * 两种绘制模式（由 `icon` 是否配置决定，二者互斥）：
   * - **形状模式**（默认）：画纯几何形状（圆、方、三角、星形等），样式见 {@link PointShape}；
   * - **图标模式**（配置 `icon`）：用图片或 canvas 出图，`icon` 可以是图片 url，
   *   也可以是 canvas（用它来画文字/数字）。
     */
  class PointLayer {
    /**
     * 创建点图层
     * @param options 配置项
     * @example
     * ```typescript
     * const layer = new BMap.PointLayer({
     *   shape: 'circle',
     *   size: 20,
     *   fillColor: 'rgba(50, 50, 255, 1)',
     *   referCenter: new BMap.Point(116.404, 39.915)
     * });
     * layer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: {} }
     *   ]
     * });
     * map.addLayer(layer);
     * ```
     */
    constructor(options?: PointLayerOptions);

    /**
     * 形状类型枚举
     * @group 枚举
     */
    static readonly ShapeType: {
      circle: 0;
      square: 1;
      triangle: 2;
      diamond: 3;
      cross: 4;
      arrow: 5;
      arrowTail: 6;
      star: 7;
      waterdrop: 9;
    };
    /**
     * 形状模式锚点枚举
     * @group 枚举
     */
    static readonly Anchor: {
      center: 0;
      topLeft: 1;
      topCenter: 2;
      topRight: 3;
      rightCenter: 4;
      bottomRight: 5;
      bottomCenter: 6;
      bottomLeft: 7;
      leftCenter: 8;
    };
    /**
     * 图标模式锚点枚举，用 [-1,1] 区间的向量表达
     * @group 枚举
     */
    static readonly IconAnchor: {
      center: [0, 0];
      topLeft: [-1, 1];
      topCenter: [0, 1];
      topRight: [1, 1];
      rightCenter: [1, 0];
      bottomRight: [1, -1];
      bottomCenter: [0, -1];
      bottomLeft: [-1, -1];
      leftCenter: [-1, 0];
    };

    /** @hidden */
    readonly isWebGLLayer: true;

    /**
     * 设置数据，支持 `FeatureCollection` / `Feature` / `Feature[]` / 裸 Geometry。
     * 几何类型支持 `Point` / `MultiPoint`
     * @group 数据
     */
    setData(geojson: any): PointLayer;
    /**
     * 返回原始数据
     * @group 数据
     */
    getData(): any;
    /**
     * 清空数据与 GPU 缓冲
     * @group 数据
     */
    clearData(): PointLayer;

    /**
     * 批量更新样式。仅更新已声明的样式键；`opacity` / `visible` / `zIndex` /
     * `renderStage` / `referCenter` / `enablePicked` 转发到对应 setter，其余未知键忽略并告警一次
     * @group 样式
     */
    setOptions(options: PointLayerOptions): PointLayer;
    /**
     * 返回当前样式对象
     * @group 样式
     */
    getOptions(): PointLayerOptions;

    /**
     * 开关鼠标交互（命中光标 + 事件派发）
     * @group 拾取
     */
    setEnablePicked(enable: boolean): PointLayer;
    /** @group 拾取 */
    getEnablePicked(): boolean;
    /**
     * 命中测试：容器像素坐标 → 命中的点，未命中返回 `null`
     * @param x 容器坐标 x（css px）
     * @param y 容器坐标 y（css px）
     * @group 拾取
     */
    hitTest(x: number, y: number): PointLayerItem | null;

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
    addEventListener<K extends keyof PointLayerEventMap>(event: K, handler: (e: PointLayerEventMap[K]) => void): void;
    /**
     * 移除事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     * @group 事件
     */
    removeEventListener<K extends keyof PointLayerEventMap>(event: K, handler: (e: PointLayerEventMap[K]) => void): void;
  }

  /**
   * PointLayer 支持的事件名与事件对象类型映射。`value` 为命中的 {@link PointLayerItem}
     */
  interface PointLayerEventMap {
    click: VisualPickEvent<PointLayer, PointLayerItem>;
    dblclick: VisualPickEvent<PointLayer, PointLayerItem>;
    rightclick: VisualPickEvent<PointLayer, PointLayerItem>;
    mousemove: VisualPickEvent<PointLayer, PointLayerItem>;
    mouseover: VisualPickEvent<PointLayer, PointLayerItem>;
    mouseout: VisualPickEvent<PointLayer, PointLayerItem>;
  }
}

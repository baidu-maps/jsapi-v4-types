declare namespace BMap {
  /**
   * MVT矢量瓦片图层，用于添加MVT标准图层
     */
  class MVTLayer {
    /**
     * 实例化MVTLayer，通过options设置图层瓦片请求地址、显示等级、显示范围、显示图层、图层样式等
     * @example
     * ```typescript
     * const mvtLayer = new BMap.MVTLayer({
     *   tileUrlTemplate: 'https://example.com/tiles/{z}/{x}/{y}.pbf',
     *   minZoom: 3,
     *   maxZoom: 18,
     * });
     * map.addLayer(mvtLayer);
     * ```
     */
    constructor(options?: MVTLayerOptions);
    /**
     * 更新图层状态
     * @param keys 要素标识或标识数组
     * @param params 状态对象
     * @param ifAppend 是否追加状态
     * @example
     * ```typescript
     * mvtLayer.updateState(['feature-1'], { color: '#ff0000' }, false);
     * ```
     */
    updateState(keys: string | Array<string>, params: object, ifAppend?: boolean): void;
    /** 清除图层状态 */
    clearState(): void;
    /** 设置图层层级
     * @example
     * ```typescript
     * mvtLayer.setZIndex(5);
     * ```
     */
    setZIndex(zIndex: number): void;
    /** 获取图层层级 */
    getZIndex(): number;
    /** 设置图层置顶 */
    setZIndexTop(): void;
    /** 提升一级 */
    setUpLevel(): void;
    /** 降低一级 */
    setDownLevel(): void;
    /** 设置图层样式
     * @example
     * ```typescript
     * mvtLayer.setStyle({
     *   polyline: { strokeColor: '#0055ff', strokeWeight: 3 }
     * });
     * ```
     */
    setStyle(style: MVTLayerStyle): void;
  }

  /**
   * MVT矢量瓦片图层配置项
   * @category 配置项
     */
  interface MVTLayerOptions {
    /** 瓦片URL模板，支持[z]、[x]、[y]占位符 */
    tileUrlTemplate?: string;
    /** 坐标转换配置 */
    transform?: { source?: string; target?: string };
    /** 网格模型，默认为百度Web墨卡托 */
    gridModel?: number;
    /** 跨级别 */
    spanLevel?: number;
    /** 是否关闭碰撞检测，默认true */
    noCollision?: boolean;
    /** 是否使用缩略图填充，默认true */
    useThumb?: boolean;
    /** 最小缩放级别，默认3 */
    minZoom?: number;
    /** 最大缩放级别，默认23 */
    maxZoom?: number;
    /** 是否加密 */
    encrypt?: boolean;
    /** 要素标识属性名 */
    idProperty?: string;
    /** 图层配置列表 */
    layers?: Array<MVTLayerConfig>;
    /** 图层样式 */
    style?: MVTLayerStyle;
    /** 点击回调 */
    onclick?: (e: { value: Array<object> }) => void;
    /** 双击回调 */
    ondblclick?: (e: { value: Array<object> }) => void;
    /** 鼠标移入回调 */
    onmousemove?: (e: { value: Array<object> }) => void;
    /** 鼠标移出回调 */
    onmouseout?: (e: { value: Array<object> }) => void;
  }

  /**
   * MVT图层中单个图层的配置
   * @category 配置项
     */
  interface MVTLayerConfig {
    /** 图层名称 */
    layerName?: string;
    /** 图层类型 */
    type?: string;
    /** 是否可见 */
    visible?: boolean;
    /** 最小缩放级别 */
    minZoom?: number;
    /** 最大缩放级别 */
    maxZoom?: number;
    /** 绘制配置 */
    painter?: object;
  }

  /**
   * MVT图层样式配置项
   * @category 配置项
     */
  interface MVTLayerStyle {
    /** 点样式 */
    point?: MVTPointStyle;
    /** 线样式 */
    polyline?: MVTPolylineStyle;
    /** 面样式 */
    polygon?: MVTPolygonStyle;
  }

  /**
   * MVT点样式配置
   * @category 配置项
     */
  interface MVTPointStyle {
    /** 文字，默认空 */
    name?: string | Array<any>;
    /** 文字大小，默认22 */
    fontSize?: number | Array<any>;
    /** 文字颜色，默认#0d20c9 */
    color?: string | Array<any>;
    /** 文字描边大小，默认2 */
    haloSize?: number | Array<any>;
    /** 文字描边颜色，默认#fff */
    strokeColor?: string | Array<any>;
    /** 图标地址 */
    icon?: string | Array<any>;
    /** 图标大小，默认[32, 32] */
    iconSize?: Array<number> | Array<any>;
    /** svg图标Path */
    symbolPath?: string | Array<any>;
    /** svg图标填充色，默认#000 */
    symbolFillColor?: string | Array<any>;
    /** svg图标填充色透明度，默认1 */
    symbolFillOpacity?: number | Array<any>;
    /** svg图标缩放比例，默认1 */
    symbolScale?: number | Array<any>;
    /** svg图标旋转角度，默认0 */
    symbolRotation?: number | Array<any>;
    /** svg图标描边色，默认#000 */
    symbolStrokeColor?: string | Array<any>;
    /** svg图标描边透明度，默认0 */
    symbolStrokeOpacity?: number | Array<any>;
    /** svg图标描边宽度，默认0 */
    symbolStrokeWeight?: number | Array<any>;
    /** 是否有文字背景图标，默认false */
    textOnIcon?: boolean | Array<any>;
    /** 文字背景图标大小，默认[32, 32] */
    textOnIconSize?: Array<number> | Array<any>;
    /** 文字背景图标地址 */
    textOnIconUrl?: string | Array<any>;
    /** 对象距离坐标的位置偏移，默认0 */
    textMargin?: number | Array<any>;
    /** 文字位于图标的方向：0-bottom,1-right,2-top,3-left,4-center */
    direction?: number | Array<any>;
    /** 是否显示 */
    visibility?: boolean | Array<any>;
  }

  /**
   * MVT线样式配置
   * @category 配置项
     */
  interface MVTPolylineStyle {
    /** 线连接处类型：miter, round, bevel */
    strokeLineJoin?: string | Array<any>;
    /** 线端头类型：round, butt, square */
    strokeLineCap?: string | Array<any>;
    /** 线颜色，默认#142655 */
    strokeColor?: string | Array<any>;
    /** 线宽度，默认2 */
    strokeWeight?: number | Array<any>;
    /** 线透明度，默认1 */
    strokeOpacity?: number | Array<any>;
    /** 线类型：solid, dashed, dotted */
    strokeStyle?: string | Array<any>;
    /** 虚线设置，默认[8,4] */
    dashArray?: Array<number> | Array<any>;
    /** 是否显示 */
    visibility?: boolean | Array<any>;
  }

  /**
   * MVT面样式配置
   * @category 配置项
     */
  interface MVTPolygonStyle {
    /** 面填充颜色，默认#142655 */
    fillColor?: string | Array<any>;
    /** 面填充透明度，默认1 */
    fillOpacity?: number | Array<any>;
    /** 描边线连接处类型：miter, round, bevel */
    strokeLineJoin?: string | Array<any>;
    /** 描边线端头类型：round, butt, square */
    strokeLineCap?: string | Array<any>;
    /** 描边线颜色，默认#dec41b */
    strokeColor?: string | Array<any>;
    /** 描边线宽度，默认0 */
    strokeWeight?: number | Array<any>;
    /** 描边线透明度，默认1 */
    strokeOpacity?: number | Array<any>;
    /** 描边线类型：solid, dashed, dotted */
    strokeStyle?: string | Array<any>;
    /** 虚线设置，默认[8,4] */
    dashArray?: Array<number> | Array<any>;
    /** 是否显示 */
    visibility?: boolean | Array<any>;
  }

  /**
   * MVT图层中的实体对象
     */
  class Entity {
    constructor(id: string, layerName: string);
    /** 要素标识 */
    id: string;
    /** 图层名称 */
    layerName: string;
    /** 要素属性 */
    properties: object;
  }
}

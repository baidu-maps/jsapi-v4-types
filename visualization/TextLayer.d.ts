declare namespace BMap {
  /**
   * 锚点位置，决定坐标点落在文字的哪个位置
     */
  type TextAnchor =
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
   * 命中拾取返回的逐条文字缓存项（{@link TextLayer.hitTest} 与拾取事件的 `value`）
     */
  interface TextLayerItem {
    /** 命中点经纬度（bd09ll） */
    point: Point;
    /** 文案 */
    text: string;
    /** 文字显示宽度（px） */
    width: number;
    /** 文字显示高度（px） */
    height: number;
    /** 要素 id（取自 `idKey` 字段，缺省用序号） */
    id: string | number;
    /** 要素的 properties */
    properties: any;
  }

  /**
   * TextLayer构造函数options参数。
   *
   * @category 配置项
     */
  interface TextLayerOptions {
    /**
     * 文案，不设则读要素的 `properties.text`
     */
    text?: StyleValue<string>;
    /**
     * 字号（px）
     * @default 14
     */
    fontSize?: StyleValue<number>;
    /**
     * 字体
     * @default '微软雅黑'
     */
    fontFamily?: StyleValue<string>;
    /**
     * 字重
     * @default 'normal'
     */
    fontWeight?: StyleValue<string | number>;
    /**
     * 文字颜色，css 字符串
     * @default '#333'
     */
    color?: StyleValue<string>;
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
     * 超过该宽度（px）换行，0 表示不换行
     * @default 0
     */
    textMaxWidth?: number;
    /**
     * 行高（px）
     * @default 20
     */
    lineHeight?: number;
    /**
     * 多行时的对齐方式
     * @default 'center'
     */
    textAlign?: 'center' | 'left' | 'right';
    /**
     * 像素偏移 [x, y]
     * @default [0, 0]
     */
    offset?: StyleValue<[number, number]>;
    /**
     * 锚点，决定坐标点落在文字的哪个位置
     * @default 'center'
     */
    anchor?: StyleValue<TextAnchor>;
    /**
     * 旋转角度（度）
     * @default 0
     */
    rotation?: StyleValue<number>;
    /**
     * 缩放比例
     * @default 1
     */
    scale?: StyleValue<number>;
    /**
     * 透明度 [0,1]，与图层级 `opacity` 相乘
     * @default 1
     */
    fillOpacity?: StyleValue<number>;
    /**
     * `true` 贴地（大小随缩放变化）；`false` 屏幕固定像素大小
     * @default false
     */
    isFlat?: boolean;

    /**
     * 是否开启碰撞剔除（密集时自动隐藏互相压盖的文字）
     * @default true
     */
    collides?: boolean;
    /**
     * 碰撞剔除的节流间隔（ms）
     * @default 200
     */
    waitTime?: number;
    /**
     * 图集槽位内边距 [x, y]
     * @default [2, 2]
     */
    padding?: [number, number];
    /**
     * 碰撞盒外扩 [x, y]，控制文字之间的最小间距
     * @default [0, 0]
     */
    margin?: [number, number];

    /** 初始数据，同 {@link TextLayer.setData} 的入参 */
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
     * 图层级透明度 [0,1]，与逐条 `fillOpacity` 相乘
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
   * 文本可视化图层，用于在地图上批量绘制文字标注，适合文本量较大的场景。
   * 几何类型支持 `Point` / `MultiPoint`。
     */
  class TextLayer {
    /**
     * 创建文本图层
     * @param options 配置项
     * @example
     * ```typescript
     * const layer = new BMap.TextLayer({
     *   text: (properties) => properties.name,
     *   fontSize: 14,
     *   color: '#333',
     *   referCenter: new BMap.Point(116.404, 39.915)
     * });
     * layer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: { name: '北京' } }
     *   ]
     * });
     * map.addLayer(layer);
     * ```
     */
    constructor(options?: TextLayerOptions);

    /**
     * 锚点枚举，用 [-1,1] 区间的向量表达
     * @group 枚举
     */
    static readonly Anchor: {
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
    setData(geojson: any): TextLayer;
    /**
     * 返回原始数据
     * @group 数据
     */
    getData(): any;
    /**
     * 清空数据与 GPU 缓冲
     * @group 数据
     */
    clearData(): TextLayer;

    /**
     * 批量更新样式。仅更新已声明的样式键；`opacity` / `visible` / `zIndex` /
     * `renderStage` / `referCenter` / `enablePicked` 转发到对应 setter，其余未知键忽略并告警一次
     * @group 样式
     */
    setOptions(options: TextLayerOptions): TextLayer;
    /**
     * 返回当前样式对象
     * @group 样式
     */
    getOptions(): TextLayerOptions;

    /**
     * 开关鼠标交互（命中光标 + 事件派发）
     * @group 拾取
     */
    setEnablePicked(enable: boolean): TextLayer;
    /** @group 拾取 */
    getEnablePicked(): boolean;
    /**
     * 命中测试：容器像素坐标 → 命中的文字，未命中返回 `null`
     * @param x 容器坐标 x（css px）
     * @param y 容器坐标 y（css px）
     * @group 拾取
     */
    hitTest(x: number, y: number): TextLayerItem | null;

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
     * 添加事件监听（需 `enablePicked` 为 `true`）
     * @param event 事件名称
     * @param handler 事件处理函数
     * @group 事件
     */
    addEventListener<K extends keyof TextLayerEventMap>(event: K, handler: (e: TextLayerEventMap[K]) => void): void;
    /**
     * 移除事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     * @group 事件
     */
    removeEventListener<K extends keyof TextLayerEventMap>(event: K, handler: (e: TextLayerEventMap[K]) => void): void;
  }

  /**
   * TextLayer 支持的事件名与事件对象类型映射。`value` 为命中的 {@link TextLayerItem}
     */
  interface TextLayerEventMap {
    click: VisualPickEvent<TextLayer, TextLayerItem>;
    dblclick: VisualPickEvent<TextLayer, TextLayerItem>;
    rightclick: VisualPickEvent<TextLayer, TextLayerItem>;
    mousemove: VisualPickEvent<TextLayer, TextLayerItem>;
    mouseover: VisualPickEvent<TextLayer, TextLayerItem>;
    mouseout: VisualPickEvent<TextLayer, TextLayerItem>;
  }
}

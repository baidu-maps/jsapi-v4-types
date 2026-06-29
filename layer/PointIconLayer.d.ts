declare namespace BMap {
  /**
   * PointIconLayer构造函数options参数
   * @category 配置项
     */
  interface PointIconLayerOptions {
    /**
     * 是否是贴地图标
     * @default true
     */
    isFlat?: boolean;
    /**
     * 是否保持图标跟随地图层级改变而尺寸不变
     * @default true
     */
    isFixed?: boolean;
    /** 点图标显示样式配置对象 */
    style?: PointIconStyle;
    /** 数据项属性key */
    idKey?: string;
    /**
     * 来源坐标系，可选BD09LL、BD09MC、GCJ02
     * @default 'BD09LL'
     */
    crs?: string;
    /**
     * 选中数据索引
     * @default -1
     */
    selectedIndex?: number;
    /**
     * 选中数据颜色
     * @default 'rgba(20, 20, 200, 1.0)'
     */
    selectedColor?: string;
    /**
     * 是否显示
     * @default true
     */
    visible?: boolean;
    /**
     * 透明度，取值范围0 - 1
     * @default 1
     */
    opacity?: number;
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
    /**
     * 显示层级
     * @default 1
     */
    zIndex?: number;
    /**
     * 是否允许鼠标点击事件
     * @default false
     */
    enablePicked?: boolean;
    /**
     * 是否允许鼠标悬浮事件
     * @default false
     */
    autoSelect?: boolean;
    /**
     * 事件是否冒泡
     * @default true
     */
    popEvent?: boolean;
    /**
     * 点击拾取矩形宽，单位像素
     * @default 30
     */
    pickWidth?: number;
    /**
     * 点击拾取矩形高，单位像素
     * @default 30
     */
    pickHeight?: number;
  }

  /**
   * 点图标样式配置
   * @category 配置项
     */
  interface PointIconStyle {
    /** 图标地址URL */
    icon?: string | StyleExpress;
    /** 通过函数形式返回图标，id代表图标标识，canvas代表图标来源 */
    iconObj?: (style: object, properties: object) => { id: number; canvas: HTMLCanvasElement };
    /** 点的大小 [宽, 高] */
    sizes?: [number, number];
    /** 点的宽度 */
    width?: number | StyleExpress;
    /** 点的高度 */
    height?: number | StyleExpress;
    /**
     * 是否使用sizes的宽高，而非width和height
     * @default true
     */
    userSizes?: boolean;
    /** 坐标点对应的锚点，中间点为[0,0]，取值范围[-1,1] */
    anchors?: [number, number];
    /** 偏移量 [x, y]，单位像素 */
    offset?: [number, number];
    /** 缩放比例 */
    scale?: number | StyleExpress;
    /** 旋转角度，单位度 */
    rotation?: number | StyleExpress;
    /** 透明度，取值范围0 - 1 */
    opacity?: number | StyleExpress;
  }

  /**
   * 点图标图层，支持点图标的渲染
     */
  class PointIconLayer {
    /**
     * 创建点图标图层实例
     * @param options 配置项
     * @example
     * ```typescript
     * // 简单用法：贴地固定大小图标
     * const pointIconLayer = new BMap.PointIconLayer({
     *   style: { icon: 'https://jsapi-demo.bj.bcebos.com/images/markers/marker_demo_1.png', width: 25, height: 25 },
     * });
     * map.addLayer(pointIconLayer);
     * pointIconLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: { id: 1 } },
     *   ],
     * });
     * ```
     * @example
     * ```typescript
     * // 非贴地 + 跟随缩放 + 偏移锚点
     * const pointIconLayer = new BMap.PointIconLayer({
     *   isFlat: false,
     *   isFixed: false,
     *   style: { icon: 'https://jsapi-demo.bj.bcebos.com/images/markers/marker_demo_2.png', width: 48, height: 48, anchors: [0, -1], offset: [0, -24] },
     * });
     * map.addLayer(pointIconLayer);
     * pointIconLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: { id: 1 } },
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.414, 39.905] }, properties: { id: 2 } },
     *   ],
     * });
     * ```
     * @example
     * ```typescript
     * // 可点击 + 数据驱动旋转和缩放
     * const pointIconLayer = new BMap.PointIconLayer({
     *   enablePicked: true,
     *   selectedColor: 'rgba(255, 0, 0, 1.0)',
     *   isFlat: true,
     *   isFixed: true,
     *   style: {
     *     icon: 'https://jsapi-demo.bj.bcebos.com/images/markers/marker_demo_1.png',
     *     width: 32,
     *     height: 32,
     *     rotation: (properties) => properties.heading || 0,
     *     scale: (properties) => properties.level > 3 ? 1.5 : 1.0,
     *     opacity: 0.9,
     *   },
     * });
     * map.addLayer(pointIconLayer);
     * pointIconLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: { id: 1, heading: 45, level: 5 } },
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.414, 39.905] }, properties: { id: 2, heading: 120, level: 2 } },
     *   ],
     * });
     * ```
     */
    constructor(options?: PointIconLayerOptions);
    /**
     * 设置数据源为GeoJSON数据对象
     * @param data GeoJSON数据
     * @example
     * ```typescript
     * pointIconLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: { id: 1 } },
     *   ],
     * });
     * ```
     */
    setData(data: object): void;
    /** 获取数据源 */
    getData(): object;
    /**
     * 根据id设置要素状态，状态会参与样式表达式的求值（如feature-state条件判断）。状态变更会触发数据重新解析和重绘
     * @param keys 数据id或id数组（对应idKey字段的值）
     * @param params 状态对象，可包含任意键值对，在样式表达式中通过feature-state访问
     * @param ifAppend 是否追加合并。true=将params合并到已有状态；false=用params替换该要素的整个状态对象
     * @example
     * ```typescript
     * pointIconLayer.updateState([1, 2], { hovered: true }, true);
     * ```
     */
    updateState(keys: string | number | Array<string | number>, params: object, ifAppend?: boolean): void;
    /**
     * 根据id移除对象状态
     * @param keys 数据id或id数组
     * @example
     * ```typescript
     * pointIconLayer.removeState([1, 2]);
     * ```
     */
    removeState(keys: string | number | Array<string | number>): void;
    /** 清空对象状态 */
    clearState(): void;
    /**
     * 全量替换所有要素状态
     * @param inputs id到状态对象的映射
     * @example
     * ```typescript
     * pointIconLayer.replaceAllState({ 1: { hovered: true }, 2: { hovered: false } });
     * ```
     */
    replaceAllState(inputs: object): void;
    /** 获取所有要素状态 */
    getAllState(): object;
    /**
     * 添加不显示数据索引
     * @param index 数据索引
     * @example
     * ```typescript
     * pointIconLayer.addDelIndex(3);
     * ```
     */
    addDelIndex(index: number): void;
    /**
     * 移除不显示数据索引
     * @param index 数据索引
     * @example
     * ```typescript
     * pointIconLayer.removeDelIndex(3);
     * ```
     */
    removeDelIndex(index: number): void;
    /** 清空不显示数据索引 */
    clearDelIndex(): void;
    /**
     * 运行时修改图层基础配置项（如坐标系、拾取设置等），合并到现有配置。不会自动触发重绘，如需生效可调用doOnceDraw()
     * @param options 要合并的配置项
     * @example
     * ```typescript
     * pointIconLayer.setBaseOptions({ crs: 'GCJ02', enablePicked: true, selectedColor: 'rgba(255,0,0,1)' });
     * pointIconLayer.doOnceDraw();
     * ```
     */
    setBaseOptions(options: PointIconLayerOptions): void;
    /** 获取图层基础配置项 */
    getBaseOptions(): PointIconLayerOptions;
    /**
     * 运行时修改图层样式配置项，合并到现有样式。修改后需调用doOnceDraw()触发重绘才能看到效果
     * @param options 要合并的样式配置项
     * @example
     * ```typescript
     * pointIconLayer.setStyleOptions({ icon: 'https://jsapi-demo.bj.bcebos.com/images/markers/marker_demo_2.png', width: 32, height: 32 });
     * pointIconLayer.doOnceDraw();
     * ```
     */
    setStyleOptions(options: PointIconStyle): void;
    /** 获取图层样式配置项 */
    getStyleOptions(): PointIconStyle;
    /**
     * 根据数据索引获取数据项
     * @param index 数据索引
     * @param model 取值 `'onmousemove'` 或 `'onclick'`
     * @example
     * ```typescript
     * const item = pointIconLayer.getPickedItem(0, 'onclick');
     * ```
     */
    getPickedItem(index: number, model: string): { dataIndex: number; dataItem: object } | null;
    /** 触发图层重绘 */
    doOnceDraw(): void;
    /**
     * 设置图层叠加顺序
     * @param zIndex 层级值
     * @example
     * ```typescript
     * pointIconLayer.setZIndex(10);
     * ```
     */
    setZIndex(zIndex: number): void;
    /** 将当前图层设置为最上层 */
    setZIndexTop(): void;
    /** 向上移动一层 */
    setUpLevel(): void;
    /** 向下移动一层 */
    setDownLevel(): void;
    /** 返回图层层级 */
    getZIndex(): number;
    /**
     * 设置图层显示/隐藏
     * @param visible 是否显示
     * @example
     * ```typescript
     * pointIconLayer.setVisible(false);
     * ```
     */
    setVisible(visible: boolean): void;
    /** 返回图层显示/隐藏状态 */
    getVisible(): boolean;
    /**
     * 设置图层透明度
     * @param opacity 透明度，取值范围0 - 1
     * @example
     * ```typescript
     * pointIconLayer.setOpacity(0.5);
     * ```
     */
    setOpacity(opacity: number): void;
    /** 返回图层透明度 */
    getOpacity(): number;
    /**
     * 设置图层最小显示等级
     * @param zoom 最小缩放等级
     * @example
     * ```typescript
     * pointIconLayer.setMinZoom(5);
     * ```
     */
    setMinZoom(zoom: number): void;
    /** 返回图层最小显示等级 */
    getMinZoom(): number;
    /**
     * 设置图层最大显示等级
     * @param zoom 最大缩放等级
     * @example
     * ```typescript
     * pointIconLayer.setMaxZoom(18);
     * ```
     */
    setMaxZoom(zoom: number): void;
    /** 返回图层最大显示等级 */
    getMaxZoom(): number;
  }
}

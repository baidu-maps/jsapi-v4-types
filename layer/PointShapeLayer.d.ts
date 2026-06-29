declare namespace BMap {
  /**
   * PointShapeLayer构造函数options参数
   * @category 配置项
     */
  interface PointShapeLayerOptions {
    /**
     * 是否贴地渲染
     * @default true
     */
    isFlat?: boolean;
    /** 点形状显示样式配置对象 */
    style?: PointShapeStyle;
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
   * 点形状样式配置
   * @category 配置项
     */
  interface PointShapeStyle {
    /**
     * 是否显示该节点
     * @default true
     */
    visibility?: boolean | StyleExpress;
    /**
     * 图形类型，取值参考PointShapeLayer.ShapeType枚举
     * @default 0
     */
    shapeType?: number | StyleExpress;
    /**
     * 坐标点对应的锚点位置，取值参考PointShapeLayer.Anchor枚举
     * @default 0
     */
    anchor?: number | StyleExpress;
    /**
     * 点的大小，单位像素
     * @default 32
     */
    size?: number | StyleExpress;
    /**
     * 点的缩放比例
     * @default 1
     */
    scale?: number | StyleExpress;
    /**
     * 点的旋转角度，单位度
     * @default 0
     */
    rotation?: number | StyleExpress;
    /**
     * 点的偏移 [x, y]，单位像素
     * @default [0, 0]
     */
    offset?: [number, number];
    /**
     * 填充颜色
     * @default '#0d20c9'
     */
    color?: string | StyleExpress;
    /**
     * 填充透明度，取值范围0-1
     * @default 1
     */
    opacity?: number | StyleExpress;
    /**
     * 描边颜色
     * @default '#fff'
     */
    strokeColor?: string | StyleExpress;
    /**
     * 描边宽度，单位像素
     * @default 0
     */
    strokeWeight?: number | StyleExpress;
  }

  /**
   * 点形状图层，使用2D几何图形（圆形、方形、三角形等）渲染点数据
     */
  class PointShapeLayer {
    /**
     * 创建点形状图层实例
     * @param options 配置项
     * @example
     * ```typescript
     * // 简单用法：默认圆形点
     * const pointShapeLayer = new BMap.PointShapeLayer({
     *   style: { size: 20, color: '#ff0000', opacity: 0.8 },
     * });
     * map.addLayer(pointShapeLayer);
     * pointShapeLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: { id: 1 } },
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.414, 39.905] }, properties: { id: 2 } },
     *   ],
     * });
     * ```
     * @example
     * ```typescript
     * // 五角星形状 + 描边 + 可点击
     * const pointShapeLayer = new BMap.PointShapeLayer({
     *   enablePicked: true,
     *   selectedColor: 'rgba(255, 0, 0, 1.0)',
     *   style: {
     *     shapeType: 7,
     *     size: 40,
     *     color: '#ffcc00',
     *     opacity: 1,
     *     strokeColor: '#ff6600',
     *     strokeWeight: 2,
     *   },
     * });
     * map.addLayer(pointShapeLayer);
     * pointShapeLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: { id: 1 } },
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.414, 39.910] }, properties: { id: 2 } },
     *   ],
     * });
     * ```
     * @example
     * ```typescript
     * // 数据驱动：不同要素显示不同形状和颜色
     * const pointShapeLayer = new BMap.PointShapeLayer({
     *   enablePicked: true,
     *   isFlat: true,
     *   style: {
     *     shapeType: ['match', ['get', 'type'], 'warning', 2, 'info', 0, 0],
     *     size: 28,
     *     color: ['match', ['get', 'type'], 'warning', '#ff3300', 'info', '#0099ff', '#999999'],
     *     rotation: ['get', 'heading'],
     *     scale: 1,
     *     strokeColor: '#ffffff',
     *     strokeWeight: 1,
     *   },
     * });
     * map.addLayer(pointShapeLayer);
     * pointShapeLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: { id: 1, type: 'warning', heading: 45 } },
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.414, 39.905] }, properties: { id: 2, type: 'info', heading: 0 } },
     *   ],
     * });
     * ```
     */
    constructor(options?: PointShapeLayerOptions);

    /** 锚点位置枚举 */
    static Anchor: {
      /** 中心 */
      CENTER: 0;
      /** 左上 */
      TOP_LEFT: 1;
      /** 上中 */
      TOP_CENTER: 2;
      /** 右上 */
      TOP_RIGHT: 3;
      /** 右中 */
      RIGHT_CENTER: 4;
      /** 右下 */
      BOTTOM_RIGHT: 5;
      /** 下中 */
      BOTTOM_CENTER: 6;
      /** 左下 */
      BOTTOM_LEFT: 7;
      /** 左中 */
      LEFT_CENTER: 8;
    };

    /** 图形类型枚举 */
    static ShapeType: {
      /** 圆形 */
      CIRCLE: 0;
      /** 正方形 */
      SQUARE: 1;
      /** 三角形 */
      TRIANGLE: 2;
      /** 菱形 */
      DIAMOND: 3;
      /** 十字 */
      CROSS: 4;
      /** 箭头 */
      ARROW: 5;
      /** 箭头+尾巴 */
      ARROW_TAIL: 6;
      /** 五角星 */
      STAR: 7;
      /** 水滴形 */
      WATERDROP: 9;
    };

    /**
     * 设置数据源为GeoJSON数据对象
     * @param data GeoJSON数据
     * @example
     * ```typescript
     * pointShapeLayer.setData({
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
     * pointShapeLayer.updateState([1, 2], { hovered: true }, true);
     * ```
     */
    updateState(keys: string | number | Array<string | number>, params: object, ifAppend?: boolean): void;
    /**
     * 根据id移除对象状态
     * @param keys 数据id或id数组
     * @example
     * ```typescript
     * pointShapeLayer.removeState([1, 2]);
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
     * pointShapeLayer.replaceAllState({ 1: { hovered: true }, 2: { hovered: false } });
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
     * pointShapeLayer.addDelIndex(3);
     * ```
     */
    addDelIndex(index: number): void;
    /**
     * 移除不显示数据索引
     * @param index 数据索引
     * @example
     * ```typescript
     * pointShapeLayer.removeDelIndex(3);
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
     * pointShapeLayer.setBaseOptions({ crs: 'GCJ02', enablePicked: true, selectedColor: 'rgba(255,0,0,1)' });
     * pointShapeLayer.doOnceDraw();
     * ```
     */
    setBaseOptions(options: PointShapeLayerOptions): void;
    /** 获取图层基础配置项 */
    getBaseOptions(): PointShapeLayerOptions;
    /**
     * 运行时修改图层样式配置项，合并到现有样式。修改后需调用doOnceDraw()触发重绘才能看到效果
     * @param options 要合并的样式配置项
     * @example
     * ```typescript
     * pointShapeLayer.setStyleOptions({ shapeType: 7, size: 40, color: '#ffcc00' });
     * pointShapeLayer.doOnceDraw();
     * ```
     */
    setStyleOptions(options: PointShapeStyle): void;
    /** 获取图层样式配置项 */
    getStyleOptions(): PointShapeStyle;
    /**
     * 根据数据索引获取数据项
     * @param index 数据索引
     * @param model 取值 `'onmousemove'` 或 `'onclick'`
     * @example
     * ```typescript
     * const item = pointShapeLayer.getPickedItem(0, 'onclick');
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
     * pointShapeLayer.setZIndex(10);
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
     * pointShapeLayer.setVisible(false);
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
     * pointShapeLayer.setOpacity(0.5);
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
     * pointShapeLayer.setMinZoom(5);
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
     * pointShapeLayer.setMaxZoom(18);
     * ```
     */
    setMaxZoom(zoom: number): void;
    /** 返回图层最大显示等级 */
    getMaxZoom(): number;
  }
}

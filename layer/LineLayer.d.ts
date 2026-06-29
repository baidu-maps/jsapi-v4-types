declare namespace BMap {
  /**
   * LineLayer构造函数options参数
   * @category 配置项
     */
  interface LineLayerOptions {
    /** 线图层显示样式配置对象 */
    style?: LineStyle;
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
   * 线样式配置
   * @category 配置项
     */
  interface LineStyle {
    /**
     * 是否采用间隔填充纹理
     * @default false
     */
    sequence?: boolean;
    /**
     * 间隔距离，单位像素
     * @default 16
     */
    marginLength?: number;
    /**
     * 是否描边覆盖填充。true 会出现描边被线填充覆盖现象；false 不会压盖但不允许使用图像纹理模式
     * @default true
     */
    borderCovered?: boolean;
    /**
     * 是否受内部填充区域掩膜，如果存在 borderWeight 小于 0 则自动切换 false
     * @default true
     */
    borderMask?: boolean;
    /**
     * 描边宽度，单位像素
     * @default 0
     */
    borderWeight?: number | StyleExpress;
    /**
     * 描边颜色
     * @default 'rgba(27, 142, 236, 1)'
     */
    borderColor?: string | StyleExpress;
    /** 填充纹理图片地址。图片需要是竖向表达，在填充时会自动横向处理 */
    strokeTextureUrl?: string | StyleExpress;
    /** 填充纹理图片宽度，需要是2的n次方 */
    strokeTextureWidth?: number | StyleExpress;
    /** 填充纹理图片高度，需要是2的n次方 */
    strokeTextureHeight?: number | StyleExpress;
    /**
     * 线连接处类型，可选 `'miter'`、`'round'`、`'bevel'`
     * @default 'round'
     */
    strokeLineJoin?: string | StyleExpress;
    /**
     * 线端头类型，可选 `'round'`、`'butt'`、`'square'`
     * @default 'square'
     */
    strokeLineCap?: string | StyleExpress;
    /**
     * 线颜色
     * @default 'rgba(25, 25, 250, 1)'
     */
    strokeColor?: string | StyleExpress;
    /**
     * 线宽度，单位像素
     * @default 2
     */
    strokeWeight?: number | StyleExpress;
    /**
     * 线透明度，取值范围0 - 1
     * @default 1
     */
    strokeOpacity?: number | StyleExpress;
    /**
     * 线类型，可选 `'solid'`、`'dashed'`、`'dotted'`
     * @default 'solid'
     */
    strokeStyle?: string | StyleExpress;
    /**
     * 虚线设置，实线部分和间隙部分长度数组
     * @default [8, 4]
     */
    dashArray?: number[] | StyleExpress;
    /**
     * MultiLineString 是否以多段线形式组成一条线，可以通过 strokeColorControl 设置每段的颜色
     * @default false
     */
    linksLine?: boolean;
    /** 输入参数是第几条路线、第几段，输出是颜色字符串 */
    strokeColorControl?: (line: number, segment: number) => string;
    /**
     * 痕迹是否使用消失模式。false 代表使用 traceControl 设置颜色
     * @default false
     */
    traceDisappear?: boolean;
    /**
     * 是否从起点开始处理痕迹，否则从终点开始处理
     * @default true
     */
    traceStart?: boolean;
    /** 痕迹距离设置函数，输入参数是路线数组，输出是距起点的痕迹长度数组，单位米 */
    traceControl?: (line: number[]) => number[];
    /** 痕迹颜色（RGB值，取值范围0-255） */
    traceColor?: [number, number, number];
    /**
     * 线图层高度
     * @default 0
     */
    height?: number | StyleExpress;
  }

  /**
   * 线图层，支持实线、虚线、描边线、纹理贴图线、间隔图标填充
     */
  class LineLayer {
    /**
     * 创建线图层实例
     * @param options 配置项
     * @example
     * ```typescript
     * // 简单实线
     * const lineLayer = new BMap.LineLayer({
     *   style: { strokeColor: '#0055ff', strokeWeight: 4 },
     * });
     * map.addLayer(lineLayer);
     * lineLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'LineString', coordinates: [[116.38, 39.91], [116.40, 39.93], [116.42, 39.91]] }, properties: { id: 1 } },
     *   ],
     * });
     * ```
     * @example
     * ```typescript
     * // 虚线 + 描边
     * const lineLayer = new BMap.LineLayer({
     *   style: { strokeColor: '#ff6600', strokeWeight: 5, strokeStyle: 'dashed', dashArray: [12, 6], borderColor: '#333333', borderWeight: 2 },
     * });
     * map.addLayer(lineLayer);
     * lineLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'LineString', coordinates: [[116.35, 39.90], [116.38, 39.93], [116.42, 39.90], [116.45, 39.93]] }, properties: { id: 1 } },
     *   ],
     * });
     * ```
     * @example
     * ```typescript
     * // 纹理贴图线 + 可点击 + 数据驱动颜色
     * const lineLayer = new BMap.LineLayer({
     *   enablePicked: true,
     *   selectedColor: 'rgba(255, 0, 0, 1.0)',
     *   style: {
     *     strokeColor: (properties) => properties.speed > 60 ? '#00cc00' : '#ff0000',
     *     strokeWeight: 6,
     *     strokeLineCap: 'round',
     *     strokeLineJoin: 'round',
     *     strokeTextureUrl: 'https://jsapi-demo.bj.bcebos.com/images/patterns/arrow_up.png',
     *     strokeTextureWidth: 32,
     *     strokeTextureHeight: 64,
     *   },
     * });
     * map.addLayer(lineLayer);
     * lineLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'LineString', coordinates: [[116.38, 39.91], [116.40, 39.93], [116.42, 39.91]] }, properties: { id: 1, speed: 80 } },
     *   ],
     * });
     * ```
     */
    constructor(options?: LineLayerOptions);
    /**
     * 设置数据源为GeoJSON数据对象
     * @param data GeoJSON数据
     * @example
     * ```typescript
     * lineLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'LineString', coordinates: [[116.38, 39.91], [116.42, 39.93]] }, properties: { id: 1 } },
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
     * lineLayer.updateState([1, 2], { highlighted: true, color: 'red' }, true);
     * ```
     */
    updateState(keys: string | number | Array<string | number>, params: object, ifAppend?: boolean): void;
    /**
     * 根据id移除对象状态
     * @param keys 数据id或id数组
     * @example
     * ```typescript
     * lineLayer.removeState([1, 2]);
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
     * lineLayer.replaceAllState({ 1: { highlighted: true }, 2: { highlighted: false } });
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
     * lineLayer.addDelIndex(3);
     * ```
     */
    addDelIndex(index: number): void;
    /**
     * 移除不显示数据索引
     * @param index 数据索引
     * @example
     * ```typescript
     * lineLayer.removeDelIndex(3);
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
     * lineLayer.setBaseOptions({ crs: 'GCJ02', enablePicked: true, selectedColor: 'rgba(255,0,0,1)' });
     * lineLayer.doOnceDraw();
     * ```
     */
    setBaseOptions(options: LineLayerOptions): void;
    /** 获取图层基础配置项 */
    getBaseOptions(): LineLayerOptions;
    /**
     * 运行时修改图层样式配置项，合并到现有样式。修改后需调用doOnceDraw()触发重绘才能看到效果
     * @param options 要合并的样式配置项
     * @example
     * ```typescript
     * lineLayer.setStyleOptions({ strokeColor: '#ff0000', strokeWeight: 6 });
     * lineLayer.doOnceDraw();
     * ```
     */
    setStyleOptions(options: LineStyle): void;
    /** 获取图层样式配置项 */
    getStyleOptions(): LineStyle;
    /**
     * 根据数据索引获取数据项
     * @param index 数据索引
     * @param model 取值 `'onmousemove'` 或 `'onclick'`
     * @example
     * ```typescript
     * const item = lineLayer.getPickedItem(0, 'onclick');
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
     * lineLayer.setZIndex(10);
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
     * lineLayer.setVisible(false);
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
     * lineLayer.setOpacity(0.5);
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
     * lineLayer.setMinZoom(5);
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
     * lineLayer.setMaxZoom(18);
     * ```
     */
    setMaxZoom(zoom: number): void;
    /** 返回图层最大显示等级 */
    getMaxZoom(): number;
  }
}

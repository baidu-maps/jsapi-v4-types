declare namespace BMap {
  /**
   * FillLayer构造函数options参数
   * @category 配置项
     */
  interface FillLayerOptions {
    /**
     * 是否显示描边
     * @default true
     */
    border?: boolean;
    /** 面图层显示样式配置对象 */
    style?: FillLayerStyle;
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
   * 面填充样式配置
   * @category 配置项
     */
  interface FillLayerStyle {
    /**
     * 填充颜色。当pattern=true时：patternMask=true（掩膜模式）下纹理不透明区域显示该颜色；patternMask=false（贴图模式）下该颜色不生效，被纹理图片颜色替换
     * @default '#142655'
     */
    fillColor?: string | StyleExpress;
    /**
     * 填充透明度。该值直接参与最终alpha计算：finalAlpha = fillOpacity * texture.alpha。若设为较低值（如0.3），纹理图案会非常淡；设为0则纹理完全不可见。纹理模式下建议设为1以保证图案清晰可见
     * @default 1
     */
    fillOpacity?: number | StyleExpress;
    /**
     * 是否采用纹理填充形式。开启后需同时设置patternUrl提供纹理图片，并确保patternMapping的宽高不超过图片实际像素尺寸
     * @default false
     */
    pattern?: boolean;
    /**
     * 纹理渲染模式。true=掩膜模式：用纹理alpha通道裁剪fillColor（不透明处显示fillColor，透明处不显示）；false=贴图模式：直接显示纹理图片的RGB颜色（fillColor仅在picked状态生效）。两种模式都受fillOpacity影响最终透明度
     * @default true
     */
    patternMask?: boolean;
    /**
     * 纹理雪碧图地址（需支持跨域访问）。图片以gl.REPEAT方式平铺，通过patternMapping指定使用图片中的哪个区域。建议使用无透明背景的纹理图片以获得最佳平铺效果
     * @default ''
     */
    patternUrl?: string;
    /**
     * 雪碧图中纹理区域的位置和尺寸，格式'x, y, width, height'（像素）。x/y为左上角偏移，width/height为裁剪尺寸。注意：width和height不能超过patternUrl图片的实际像素尺寸，否则会采样到错误区域导致纹理显示异常（如全黑）。若图片本身就是完整纹理，设为'0, 0, 图片宽度, 图片高度'
     * @default '0, 0, 32, 32'
     */
    patternMapping?: string | StyleExpress;
    /**
     * 纹理缩放比例，基于zoom=18为基准。实际平铺尺寸 = patternMapping的宽高 * patternScale * 2^(18-当前zoom)。值越小纹理越密集图案越多，值过大会导致整个区域只能看到图片的一小部分（可能是纯色或透明）。建议值范围0.1~1
     * @default 1
     */
    patternScale?: number | StyleExpress;
    /**
     * 纹理UV偏移量，格式'u, v'，取值范围[0,1]，用于微调纹理平铺的起始位置
     * @default '0, 0'
     */
    patternOffset?: string | StyleExpress;
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
     * 是否描边覆盖填充
     * @default true
     */
    borderCovered?: boolean;
    /**
     * 是否受内部填充区域掩膜
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
    /** 填充纹理图片地址 */
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
     * 描边线颜色
     * @default 'rgba(25, 25, 250, 1)'
     */
    strokeColor?: string | StyleExpress;
    /**
     * 描边线宽度，单位像素
     * @default 2
     */
    strokeWeight?: number | StyleExpress;
    /**
     * 描边线透明度，取值范围0 - 1
     * @default 1
     */
    strokeOpacity?: number | StyleExpress;
    /**
     * 描边线类型，可选 `'solid'`、`'dashed'`、`'dotted'`
     * @default 'solid'
     */
    strokeStyle?: string | StyleExpress;
    /**
     * 虚线设置，实线部分和间隙部分长度数组
     * @default [8, 4]
     */
    dashArray?: number[] | StyleExpress;
    /**
     * 面图层高度
     * @default 0
     */
    height?: number | StyleExpress;
  }

  /**
   * 面填充图层，支持纯色填充、描边、纹理（掩膜或贴图）填充
     */
  class FillLayer {
    /**
     * 创建面填充图层实例
     * @param options 配置项
     * @example
     * ```typescript
     * // 简单用法：纯色填充
     * const fillLayer = new BMap.FillLayer({
     *   style: { fillColor: 'rgba(0, 100, 255, 0.4)', fillOpacity: 0.6 },
     * });
     * map.addLayer(fillLayer);
     * fillLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[116.30, 39.91], [116.34, 39.91], [116.34, 39.94], [116.30, 39.94], [116.30, 39.91]]] }, properties: { id: 1 } },
     *   ],
     * });
     * ```
     * @example
     * ```typescript
     * // 带描边的面填充
     * const fillLayer = new BMap.FillLayer({
     *   border: true,
     *   style: { fillColor: 'rgba(255, 200, 0, 0.5)', fillOpacity: 0.8, strokeColor: '#ff6600', strokeWeight: 3, strokeStyle: 'dashed' },
     * });
     * map.addLayer(fillLayer);
     * fillLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[116.36, 39.91], [116.40, 39.91], [116.40, 39.94], [116.36, 39.94], [116.36, 39.91]]] }, properties: { id: 1 } },
     *   ],
     * });
     * ```
     * @example
     * ```typescript
     * // 纹理填充（默认掩膜模式）：纹理图案区域显示fillColor，透明区域不显示
     * const fillLayer = new BMap.FillLayer({
     *   enablePicked: true,
     *   autoSelect: true,
     *   pickWidth: 30,
     *   pickHeight: 30,
     *   border: true,
     *   style: {
     *     pattern: true,
     *     patternUrl: 'https://jsapi-demo.bj.bcebos.com/images/patterns/fill_pattern.png',
     *     patternMapping: '128, 128, 128, 128',
     *     patternScale: 0.5,
     *     patternOffset: '0, 0',
     *     fillColor: 'orange',
     *     fillOpacity: 1,
     *     strokeWeight: 1,
     *     strokeColor: 'blue',
     *   },
     * });
     * map.addLayer(fillLayer);
     * fillLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[116.42, 39.91], [116.46, 39.91], [116.46, 39.94], [116.42, 39.94], [116.42, 39.91]]] }, properties: { name: 'area1' } },
     *   ],
     * });
     * ```
     * @example
     * ```typescript
     * // 纹理贴图模式（patternMask=false）：直接显示纹理图片原始颜色
     * const fillLayer = new BMap.FillLayer({
     *   border: true,
     *   style: {
     *     pattern: true,
     *     patternMask: false,
     *     patternUrl: 'https://jsapi-demo.bj.bcebos.com/images/patterns/fill_pattern.png',
     *     patternMapping: '128, 128, 128, 128',
     *     patternScale: 0.5,
     *     patternOffset: '0, 0',
     *     fillColor: 'orange',
     *     fillOpacity: 1,
     *     strokeWeight: 1,
     *     strokeColor: 'blue',
     *   },
     * });
     * map.addLayer(fillLayer);
     * fillLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[116.48, 39.91], [116.52, 39.91], [116.52, 39.94], [116.48, 39.94], [116.48, 39.91]]] }, properties: { id: 1 } },
     *   ],
     * });
     * ```
     */
    constructor(options?: FillLayerOptions);
    /**
     * 设置数据源为GeoJSON数据对象
     * @param data GeoJSON数据
     * @example
     * ```typescript
     * fillLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[116.38, 39.91], [116.42, 39.91], [116.42, 39.94], [116.38, 39.94], [116.38, 39.91]]] }, properties: { id: 1 } },
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
     * fillLayer.updateState([1, 2], { picked: true }, true);
     * ```
     */
    updateState(keys: string | number | Array<string | number>, params: object, ifAppend?: boolean): void;
    /**
     * 根据id移除对象状态
     * @param keys 数据id或id数组
     * @example
     * ```typescript
     * fillLayer.removeState([1, 2]);
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
     * fillLayer.replaceAllState({ 1: { picked: true }, 2: { picked: false } });
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
     * fillLayer.addDelIndex(3);
     * ```
     */
    addDelIndex(index: number): void;
    /**
     * 移除不显示数据索引
     * @param index 数据索引
     * @example
     * ```typescript
     * fillLayer.removeDelIndex(3);
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
     * fillLayer.setBaseOptions({ crs: 'GCJ02', enablePicked: true, selectedColor: 'rgba(255,0,0,1)' });
     * fillLayer.doOnceDraw();
     * ```
     */
    setBaseOptions(options: FillLayerOptions): void;
    /** 获取图层基础配置项 */
    getBaseOptions(): FillLayerOptions;
    /**
     * 运行时修改图层样式配置项，合并到现有样式。修改后需调用doOnceDraw()触发重绘才能看到效果
     * @param options 要合并的样式配置项
     * @example
     * ```typescript
     * fillLayer.setStyleOptions({ fillColor: '#ff0000', fillOpacity: 0.5 });
     * fillLayer.doOnceDraw();
     * ```
     */
    setStyleOptions(options: FillLayerStyle): void;
    /** 获取图层样式配置项 */
    getStyleOptions(): FillLayerStyle;
    /**
     * 根据数据索引获取数据项
     * @param index 数据索引
     * @param model 取值 `'onmousemove'` 或 `'onclick'`
     * @example
     * ```typescript
     * const item = fillLayer.getPickedItem(0, 'onclick');
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
     * fillLayer.setZIndex(10);
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
     * fillLayer.setVisible(false);
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
     * fillLayer.setOpacity(0.5);
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
     * fillLayer.setMinZoom(5);
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
     * fillLayer.setMaxZoom(18);
     * ```
     */
    setMaxZoom(zoom: number): void;
    /** 返回图层最大显示等级 */
    getMaxZoom(): number;
  }
}

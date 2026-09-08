declare namespace BMap {
  /**
   * DistrictLayer 点击事件。事件可能由内部 GeoJSONLayer 或对应的 Polygon 派发
     */
  interface DistrictLayerClickEvent extends OverlayMouseEvent<Polygon | GeoJSONLayer> {
    features?: Overlay[] | null;
  }

  /**
   * DistrictLayer 鼠标移出事件。Polygon 的内部命中切换可能只提供基础事件字段
     */
  type DistrictLayerMouseOutEvent = GraphMouseOutEvent<Polygon> | GeoJSONLayerMouseOutEvent;

  /**
   * DistrictLayer 支持的事件名与事件对象类型映射。
   * 事件由行政区内部的 GeoJSONLayer 和 Polygon 派发
     */
  interface DistrictLayerEventMap {
    /** 点击行政区时触发 */
    click: DistrictLayerClickEvent;
    /** 鼠标移入行政区时触发 */
    mouseover: OverlayMouseEvent<Polygon>;
    /** 鼠标移出行政区时触发 */
    mouseout: DistrictLayerMouseOutEvent;
  }

  /**
   * 行政区图层类，用于在地图上展示行政区划数据。
   * 通过 map.addLayer() / map.removeLayer() 方法管理。
     */
  class DistrictLayer {
    /**
     * 创建行政区图层
     * @param options 配置选项，name 为行政区名称
     * @example 基础用法 - 展示单个行政区
     * ```typescript
     * const districtLayer = new BMap.DistrictLayer({
     *   name: '北京',
     *   strokeColor: '#0055ff',
     *   fillColor: '#0055ff',
     *   fillOpacity: 0.3,
     * });
     * map.addLayer(districtLayer);
     * ```
     * @example 多行政区合并为大区
     * ```typescript
     * const districtLayer = new BMap.DistrictLayer({
     *   name: '北京,天津,河北',
     *   strokeColor: '#daeafa',
     *   fillColor: '#5e8bff',
     *   fillOpacity: 0.8,
     * });
     * map.addLayer(districtLayer);
     * ```
     * @example 下钻展示 - kind:1 展示省内各市边界
     * ```typescript
     * const districtLayer = new BMap.DistrictLayer({
     *   name: '山东省',
     *   kind: 1,
     *   strokeColor: '#daeafa',
     *   fillColor: '#618bf8',
     *   fillOpacity: 0.6,
     *   autoViewport: true,
     * });
     * map.addLayer(districtLayer);
     * ```
     * @example 自动适配视野 + 鼠标交互高亮
     * ```typescript
     * const districtLayer = new BMap.DistrictLayer({
     *   name: '广东省',
     *   kind: 2,
     *   strokeColor: '#fff',
     *   strokeWeight: 2,
     *   fillColor: '#5e8bff',
     *   fillOpacity: 0.5,
     *   autoViewport: true,
     * });
     * map.addLayer(districtLayer);
     * districtLayer.addEventListener('mouseover', (e) => {
     *   e.currentTarget.setFillColor('#9169db');
     * });
     * districtLayer.addEventListener('mouseout', (e) => {
     *   if (e.currentTarget instanceof BMap.Polygon) {
     *     e.currentTarget.setFillColor('#5e8bff');
     *   }
     * });
     * ```
     * @example 使用adcode指定行政区（优先级高于name）
     * ```typescript
     * const districtLayer = new BMap.DistrictLayer({
     *   adcode: '110000,120000',
     *   fillColor: '#5e8bff',
     *   fillOpacity: 0.6,
     * });
     * map.addLayer(districtLayer);
     * ```
    */
    constructor(options?: DistrictLayerOptions);
    /**
     * 图层家族标志位，运行时真实存在于原型上，`Map.addLayer()` 依据它分发图层
     * @hidden
     */
    readonly isDistrictLayer: true;

    /**
     * 添加事件监听
     * @param event 事件类型
     * @param handler 回调函数
     * @example
     * ```typescript
     * districtLayer.addEventListener('click', (e) => {
     *   console.log('行政区点击', e.latLng);
     *   if (e.currentTarget instanceof BMap.Polygon) {
     *     e.currentTarget.setFillColor('#9169db');
     *   }
     * });
     * ```
     */
    addEventListener<K extends keyof DistrictLayerEventMap>(event: K, handler: (e: DistrictLayerEventMap[K]) => void): void;
    /**
     * 移除事件监听
     * @param event 事件类型
     * @param handler 回调函数
     */
    removeEventListener<K extends keyof DistrictLayerEventMap>(event: K, handler: (e: DistrictLayerEventMap[K]) => void): void;
  }

  /**
   * 行政区图层配置选项
   * @category 配置项
     */
  interface DistrictLayerOptions {
    /**
     * 行政区名称，多个名称用逗号分隔表示合并为一个大区，如 '北京,天津,河北' 会将这些行政区边界合并展示。
     * 需要注意：多区合并仅在kind=0时有效，下钻模式只能传入一个名称，下不支持多区合并。
     */
    name?: string;
    /**
     * 行政区id编码，多个用逗号分隔表示合并为一个大区。优先级高于 name
     */
    adcode?: string;
    /**
     * 行政区划展示层级。0为当前层级（如传入省名则展示省轮廓），1为下钻一个层级（展示省内各市边界），2为下钻两个层级（展示各区县边界）
     * @default 0
     */
    kind?: number;
    /**
     * 是否自动调整视野以适应行政区边界范围
     * @default false
     */
    autoViewport?: boolean;
    /**
     * 边框颜色
     * @default '#00f'
     */
    strokeColor?: string;
    /**
     * 边框宽度，单位像素
     * @default 1
     */
    strokeWeight?: number;
    /**
     * 边框透明度，取值范围0 - 1
     * @default 1
     */
    strokeOpacity?: number;
    /**
     * 填充颜色
     * @default '#ff0'
     */
    fillColor?: string;
    /**
     * 填充透明度，取值范围0 - 1
     * @default 0.6
     */
    fillOpacity?: number;
    /**
     * 行政区边界数据请求完成并绘制到地图后的回调
     */
    onComplete?: () => void;
  }
}

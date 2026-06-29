declare namespace BMap {
  /**
   * GeoJSON 覆盖物组合图层，用于在地图上展示 GeoJSON 格式的地理数据。
   * 通过 map.addLayer() / map.removeLayer() 方法管理。
     */
  class GeoJSONLayer {
    /**
     * 创建 GeoJSON 覆盖物组合图层
     * @param layerName 图层名称，每个覆盖物都将写入此名称作为属性
     * @param options 可选参数
     * @example
     * ```typescript
     * const geoJSONLayer = new BMap.GeoJSONLayer('roads', {
     *   polylineStyle: { strokeColor: '#0055ff', strokeWeight: 3 },
     * });
     * map.addLayer(geoJSONLayer);
     * geoJSONLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'LineString', coordinates: [[116.39, 39.91], [116.42, 39.93]] }, properties: {} },
     *   ],
     * });
     * ```
     * @example
     * ```typescript
     * const geoJSONLayer = new BMap.GeoJSONLayer('pois', {
     *   dataSource: {
     *     type: 'FeatureCollection',
     *     features: [
     *       { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: { name: '天安门' } },
     *     ],
     *   },
     *   markerStyle: { title: '标记点' },
     * });
     * map.addLayer(geoJSONLayer);
     * ```
     */
    constructor(layerName: string, options?: GeoJSONLayerOptions);
    /**
     * 设置图层显示的 GeoJSON 数据源
     * @param geojson GeoJSON 结构数据
     * @example
     * ```typescript
     * geoJSONLayer.setData({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: {} }
     *   ]
     * });
     * ```
     */
    setData(geojson: object): void;
    /**
     * 返回覆盖物对象集合
     */
    getData(): Array<Overlay>;
    /**
     * 清空地图上的覆盖物数据及覆盖物对象集合
     */
    clearData(): void;
    /**
     * 重置样式到图层初始化状态
     */
    resetStyle(): void;
    /**
     * 通过事件获取包含当前点的覆盖物集合
     * @param e 地图事件对象
     * @example
     * ```typescript
     * map.addEventListener('click', (e) => {
     *   const overlays = geoJSONLayer.pickOverlays(e);
     *   console.log('picked overlays:', overlays);
     * });
     * ```
     */
    pickOverlays(e: Event): Array<Overlay> | null;
    /**
     * 设置显示层级
     * @param z 显示层级
     * @example
     * ```typescript
     * geoJSONLayer.setLevel(-50);
     * ```
     */
    setLevel(z: number): void;
    /**
     * 返回显示层级
     */
    getLevel(): number;
    /**
     * 设置图层显示/隐藏
     * @param v 是否显示
     * @example
     * ```typescript
     * geoJSONLayer.setVisible(false);
     * ```
     */
    setVisible(v: boolean): void;
    /**
     * 返回图层显示状态
     */
    getVisible(): boolean;
    /**
     * 销毁图层，清空覆盖物数据及关联的 map 对象
     */
    destroy(): void;
    /**
     * 添加事件监听
     * @param type 事件类型，支持 `'click'`、`'mousemove'`、`'mouseout'`
     * @param handler 回调函数，Event 对象中 features 属性为触发的要素实例集合
     * @example
     * ```typescript
     * geoJSONLayer.addEventListener('click', (e) => {
     *   console.log('features:', e.features);
     * });
     * ```
     */
    addEventListener(type: string, handler: Function): void;
    /**
     * 移除事件监听
     * @param type 事件类型
     * @param handler 定义的回调函数
     * @example
     * ```typescript
     * const handler = (e: any) => { console.log(e); };
     * geoJSONLayer.addEventListener('click', handler);
     * geoJSONLayer.removeEventListener('click', handler);
     * ```
     */
    removeEventListener(type: string, handler: Function): void;
  }

  /**
   * GeoJSONLayer 构造函数的可选参数。
   * @category 配置项
     */
  interface GeoJSONLayerOptions {
    /**
     * GeoJSON 结构数据
     */
    dataSource?: object;
    /**
     * 来源数据坐标系，可选 `'BD09LL'`、`'BD09MC'`、`'EPSG3857'`、`'GCJ02'`、`'WGS84'`
     * @default 'BD09LL'
     */
    reference?: string;
    /**
     * 点类型数据样式，详见 MarkerOptions
     */
    markerStyle?: MarkerOptions | ((properties: object) => MarkerOptions);
    /**
     * 线类型数据样式，详见 PolylineOptions
     */
    polylineStyle?: PolylineOptions | ((properties: object) => PolylineOptions);
    /**
     * 面类型数据样式，详见 PolygonOptions
     */
    polygonStyle?: PolygonOptions | ((properties: object) => PolygonOptions);
    /**
     * 最小显示层级
     * @default 3
     */
    minZoom?: number;
    /**
     * 最大显示层级
     * @default 21
     */
    maxZoom?: number;
    /**
     * 显示层级，负数越大层级越高
     * @default -99
     */
    level?: number;
    /**
     * 图层是否显示
     * @default true
     */
    visible?: boolean;
  }
}

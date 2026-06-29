declare namespace BMap {
  /**
   * 此类满足用户将geojson数据解析为符合百度地图坐标的Overlay数据，用户可得到Overlay属性、坐标数据，进行覆盖物实例化或者其他处理。
     * @category 工具类
   */
  class GeoJSONParse {
    /**
     * 构建GeoJSON解析类。输入坐标支持options的reference设置类型，输出统一为百度09经纬度。
     * @param options 配置选项
     * @example
     * ```typescript
     * const geoJSONParse = new BMap.GeoJSONParse({ reference: 'WGS84' });
     * // 解析点、线、面并添加到地图
     * const overlays = geoJSONParse.readFeaturesFromObject({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: {} },
     *     { type: 'Feature', geometry: { type: 'LineString', coordinates: [[116.39, 39.91], [116.42, 39.93]] }, properties: {} },
     *     { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[116.38, 39.91], [116.42, 39.91], [116.42, 39.94], [116.38, 39.94], [116.38, 39.91]]] }, properties: {} },
     *   ],
     * });
     * overlays.forEach((overlay) => map.addOverlay(overlay));
     * ```
     */
    constructor(options?: GeoJSONParseOptions);
    /**
     * 解析单个GeoJSON Feature对象。
     * 如果设置了options.reference，则优先使用方法的options.reference。
     * 如果isPoints为false，且不设置样式，则使用覆盖物默认样式。
     * 如果设置了类型样式，则优先使用类型样式，无则使用统一样式。
     * @param geojson_feature GeoJSON {"type":"Feature"}数据
     * @param options 配置选项，包含reference/isPoints/markerStyle/polylineStyle/polygonStyle等
     * @returns 如果isPoints为false，返回实例化的覆盖物（muti几何要素返回多个覆盖物，否则返回单个覆盖物）；如果isPoints为true，返回Object的points为坐标序列点；属性存储在Object.properties中
     * @example
     * ```typescript
     * // 解析点要素，返回覆盖物并添加到地图
     * const markerOverlay = geoJSONParse.readFeatureFromObject({
     *   type: 'Feature',
     *   geometry: { type: 'Point', coordinates: [116.404, 39.915] },
     *   properties: { name: '天安门' },
     * });
     * map.addOverlay(markerOverlay);
     * ```
     * @example
     * ```typescript
     * // 解析线要素，自定义样式并添加到地图
     * const lineOverlay = geoJSONParse.readFeatureFromObject({
     *   type: 'Feature',
     *   geometry: { type: 'LineString', coordinates: [[116.39, 39.91], [116.42, 39.93]] },
     *   properties: {},
     * }, { polylineStyle: { strokeColor: '#ff0000', strokeWeight: 3 } });
     * map.addOverlay(lineOverlay);
     * ```
     * @example
     * ```typescript
     * // 解析面要素，自定义样式并添加到地图
     * const polygonOverlay = geoJSONParse.readFeatureFromObject({
     *   type: 'Feature',
     *   geometry: { type: 'Polygon', coordinates: [[[116.38, 39.91], [116.42, 39.91], [116.42, 39.94], [116.38, 39.94], [116.38, 39.91]]] },
     *   properties: {},
     * }, { polygonStyle: { fillColor: 'rgba(0, 100, 255, 0.3)', strokeColor: '#0055ff' } });
     * map.addOverlay(polygonOverlay);
     * ```
     * @example
     * ```typescript
     * // isPoints=true：只返回坐标数据，不创建覆盖物
     * const result = geoJSONParse.readFeatureFromObject({
     *   type: 'Feature',
     *   geometry: { type: 'LineString', coordinates: [[116.39, 39.91], [116.42, 39.93]] },
     *   properties: { name: '路线' },
     * }, { isPoints: true });
     * console.log(result.points);     // [{ lng, lat }, { lng, lat }]
     * console.log(result.properties); // { name: '路线' }
     * ```
     */
    readFeatureFromObject(geojson_feature: object, options?: GeoJSONParseReadOptions): any;
    /**
     * 解析GeoJSON FeatureCollection对象。
     * 如果设置了options.reference，则优先使用方法的options.reference。
     * 如果isPoints为false，且不设置样式，则使用覆盖物默认样式。
     * 如果设置了类型样式，则优先使用类型样式，无则使用统一样式。
     * @param geojson GeoJSON {"type":"FeatureCollection"}数据
     * @param options 配置选项，包含reference/isPoints/markerStyle/polylineStyle/polygonStyle等
     * @param callback 回调函数，参数为Overlay或Object
     * @returns 如果isPoints为false，返回实例化的覆盖物Overlay集合；如果isPoints为true，返回Object集合，Object.points为坐标序列点，Object.properties为属性
     * @example
     * ```typescript
     * // 解析点线面混合数据，通过callback逐个添加到地图
     * geoJSONParse.readFeaturesFromObject({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: {} },
     *     { type: 'Feature', geometry: { type: 'LineString', coordinates: [[116.39, 39.91], [116.42, 39.93]] }, properties: {} },
     *     { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[116.38, 39.91], [116.42, 39.91], [116.42, 39.94], [116.38, 39.94], [116.38, 39.91]]] }, properties: {} },
     *   ],
     * }, {}, (overlay) => { map.addOverlay(overlay); });
     * ```
     * @example
     * ```typescript
     * // 使用返回值批量添加，并自定义各类型样式
     * const overlays = geoJSONParse.readFeaturesFromObject({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: {} },
     *     { type: 'Feature', geometry: { type: 'LineString', coordinates: [[116.39, 39.91], [116.42, 39.93]] }, properties: {} },
     *   ],
     * }, {
     *   markerStyle: { title: '标记点' },
     *   polylineStyle: { strokeColor: '#ff0000', strokeWeight: 3 },
     * });
     * overlays.forEach((overlay) => map.addOverlay(overlay));
     * ```
     * @example
     * ```typescript
     * // isPoints=true：只返回坐标数据，不创建覆盖物
     * const results = geoJSONParse.readFeaturesFromObject({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: { name: '天安门' } },
     *     { type: 'Feature', geometry: { type: 'LineString', coordinates: [[116.39, 39.91], [116.42, 39.93]] }, properties: { name: '路线' } },
     *   ],
     * }, { isPoints: true });
     * results.forEach((result) => {
     *   console.log(result.points);     // 坐标数组
     *   console.log(result.properties); // 属性对象
     * });
     * ```
     */
    readFeaturesFromObject(geojson: object, options?: GeoJSONParseReadOptions, callback?: Function): any[];
  }

  /**
   * GeoJSONParse构造函数配置参数
     */
  interface GeoJSONParseOptions {
    /**
     * 来源数据的坐标系，可选择：BD09LL｜BD09MC｜EPSG3857｜GCJ02｜WGS84
     * @default 'BD09LL'
     */
    reference?: string;
  }

  /**
   * GeoJSONParse解析方法配置参数
     */
  interface GeoJSONParseReadOptions {
    /** 来源数据的坐标系，同构造函数reference，优先使用方法级别的reference */
    reference?: string;
    /**
     * 是否为点集合
     * @default false
     */
    isPoints?: boolean;
    /** 点类型数据样式，可以是函数形式(properties)=>MarkerOptions或MarkerOptions对象 */
    markerStyle?: Function | object;
    /** 线类型数据样式，可以是函数形式(properties)=>PolylineOptions或PolylineOptions对象 */
    polylineStyle?: Function | object;
    /** 面类型数据样式，可以是函数形式(properties)=>PolygonOptions或PolygonOptions对象 */
    polygonStyle?: Function | object;
  }
}

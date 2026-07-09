/**
 * 百度墨卡托坐标系
 */
declare const BMAP_COORD_MERCATOR: 'BMAP_COORD_MERCATOR';

/**
 * 火星坐标系（GCJ-02），高德、腾讯、Google中国使用
 */
declare const BMAP_COORD_GCJ02: 'BMAP_COORD_GCJ02';

/**
 * 百度经纬度坐标系（BD-09），默认值
 */
declare const BMAP_COORD_BD09: 'BMAP_COORD_BD09';

/**
 * 火星墨卡托坐标系（GCJ-02 Mercator）
 */
declare const BMAP_COORD_GCJ02MERCATOR: 'BMAP_COORD_GCJ02MERCATOR';

/**
 * 国际标准坐标系（WGS-84），GPS 原始坐标
 */
declare const BMAP_COORD_WGS84: 'BMAP_COORD_WGS84';

/**
 * EPSG:3857 Web墨卡托坐标系
 */
declare const BMAP_COORD_EPSG3857: 'BMAP_COORD_EPSG3857';

/**
 * 坐标系类型，用于设置地图全局坐标系或覆盖物坐标系。
 * 设置后 API 会自动完成用户坐标与内部 BD09 坐标的互转。
 *
 * 使用场景：
 * - 全局设置：`BMap.coordType = BMAP_COORD_GCJ02`
 * - 覆盖物单独设置：`new BMap.Marker(point, { coordType: BMAP_COORD_WGS84 })`
 *
 * @example 设置全局坐标系为 GCJ02
 * ```typescript
 * BMap.coordType = BMAP_COORD_GCJ02;
 * const map = new BMap.Map('container');
 * map.centerAndZoom(new BMap.Point(116.397, 39.908), 12); // 按 GCJ02 坐标解析
 * ```
 *
 * @example 覆盖物单独指定坐标系（优先级高于全局）
 * ```typescript
 * BMap.coordType = BMAP_COORD_GCJ02;
 * // 该 Marker 使用 WGS84 坐标，忽略全局的 GCJ02 设置
 * const marker = new BMap.Marker(new BMap.Point(116.39, 39.90), {
 *   coordType: BMAP_COORD_WGS84
 * });
 * ```
 */
type CoordType =
  | typeof BMAP_COORD_MERCATOR
  | typeof BMAP_COORD_GCJ02
  | typeof BMAP_COORD_BD09
  | typeof BMAP_COORD_GCJ02MERCATOR
  | typeof BMAP_COORD_WGS84
  | typeof BMAP_COORD_EPSG3857;

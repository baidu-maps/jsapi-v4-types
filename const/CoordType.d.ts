/**
 * 百度墨卡托坐标系
 */
declare const BMAP_COORD_MERCATOR: 'BMAP_COORD_MERCATOR';

/**
 * 火星坐标系（GCJ-02）
 */
declare const BMAP_COORD_GCJ02: 'BMAP_COORD_GCJ02';

/**
 * 百度经纬度坐标系（BD-09）
 */
declare const BMAP_COORD_BD09: 'BMAP_COORD_BD09';

/**
 * 火星墨卡托坐标系（GCJ-02 Mercator）
 */
declare const BMAP_COORD_GCJ02MERCATOR: 'BMAP_COORD_GCJ02MERCATOR';

/**
 * 国际标准坐标系（WGS-84）
 */
declare const BMAP_COORD_WGS84: 'BMAP_COORD_WGS84';

/**
 * EPSG:3857 球形墨卡托坐标系
 */
declare const BMAP_COORD_EPSG3857: 'BMAP_COORD_EPSG3857';

/**
 * 坐标系类型，使用 `BMAP_COORD_*` 常量传入
 * @example
 * ```typescript
 * convertor.translate(points, BMAP_COORD_WGS84, BMAP_COORD_BD09, callback);
 * ```
 */
type CoordType =
  | typeof BMAP_COORD_MERCATOR
  | typeof BMAP_COORD_GCJ02
  | typeof BMAP_COORD_BD09
  | typeof BMAP_COORD_GCJ02MERCATOR
  | typeof BMAP_COORD_WGS84
  | typeof BMAP_COORD_EPSG3857;

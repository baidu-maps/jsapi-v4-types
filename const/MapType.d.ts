/**
 * 普通街道地图
 */
declare const BMAP_NORMAL_MAP: string;

/**
 * 卫星地图
 */
declare const BMAP_SATELLITE_MAP: string;

/**
 * 卫星与路网混合地图
 */
declare const BMAP_HYBRID_MAP: string;

/**
 * 地球卫星视图
 */
declare const BMAP_EARTH_MAP: string;

/**
 * 无底图模式
 */
declare const BMAP_NONE_MAP: string;

/**
 * 地图类型，使用 `BMAP_*_MAP` 常量传入
 * @example
 * ```typescript
 * map.setMapType(BMAP_SATELLITE_MAP);
 * ```
 */
type MapType =
  | typeof BMAP_NORMAL_MAP
  | typeof BMAP_SATELLITE_MAP
  | typeof BMAP_HYBRID_MAP
  | typeof BMAP_EARTH_MAP
  | typeof BMAP_NONE_MAP;

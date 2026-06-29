/**
 * POI 类型：普通 POI
 */
declare const BMAP_POI_TYPE_NORMAL: 0;

/**
 * POI 类型：公交站点
 */
declare const BMAP_POI_TYPE_BUSSTOP: 1;

/**
 * POI 类型：公交线路
 */
declare const BMAP_POI_TYPE_BUSLINE: 2;

/**
 * POI 类型：地铁站点
 */
declare const BMAP_POI_TYPE_SUBSTOP: 3;

/**
 * POI 类型：地铁线路
 */
declare const BMAP_POI_TYPE_SUBLINE: 4;

/**
 * POI 类型，使用 `BMAP_POI_TYPE_*` 常量
 */
type POIType =
  | typeof BMAP_POI_TYPE_NORMAL
  | typeof BMAP_POI_TYPE_BUSSTOP
  | typeof BMAP_POI_TYPE_BUSLINE
  | typeof BMAP_POI_TYPE_SUBSTOP
  | typeof BMAP_POI_TYPE_SUBLINE;

/**
 * 路线类型：步行
 */
declare const BMAP_ROUTE_TYPE_WALKING: 2;

/**
 * 路线类型：驾车
 */
declare const BMAP_ROUTE_TYPE_DRIVING: 3;

/**
 * 路线类型：骑行
 */
declare const BMAP_ROUTE_TYPE_RIDING: 6;

/**
 * 路线类型，使用 `BMAP_ROUTE_TYPE_*` 常量
 */
type RouteType =
  | typeof BMAP_ROUTE_TYPE_WALKING
  | typeof BMAP_ROUTE_TYPE_DRIVING
  | typeof BMAP_ROUTE_TYPE_RIDING;

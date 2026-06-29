/**
 * 路线状态：正常
 */
declare const BMAP_ROUTE_STATUS_NORMAL: 0;

/**
 * 路线状态：结果为空
 */
declare const BMAP_ROUTE_STATUS_EMPTY: 1;

/**
 * 路线状态：仅返回地址信息
 */
declare const BMAP_ROUTE_STATUS_ADDRESS: 2;

/**
 * 路线规划结果状态，使用 `BMAP_ROUTE_STATUS_*` 常量
 */
type RouteStatus =
  | typeof BMAP_ROUTE_STATUS_NORMAL
  | typeof BMAP_ROUTE_STATUS_EMPTY
  | typeof BMAP_ROUTE_STATUS_ADDRESS;

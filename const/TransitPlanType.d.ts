/**
 * 公交方案节点类型：步行段
 */
declare const BMAP_TRANSIT_PLAN_TYPE_ROUTE: 0;

/**
 * 公交方案节点类型：乘车段（公交/地铁/火车/飞机等）
 */
declare const BMAP_TRANSIT_PLAN_TYPE_LINE: 1;

/**
 * 公交方案节点类型，使用 `BMAP_TRANSIT_PLAN_TYPE_*` 常量
 */
type TransitPlanType =
  | typeof BMAP_TRANSIT_PLAN_TYPE_ROUTE
  | typeof BMAP_TRANSIT_PLAN_TYPE_LINE;

/**
 * 跨城交通方式：火车
 */
declare const BMAP_TRANSIT_TYPE_POLICY_TRAIN: 0;

/**
 * 跨城交通方式：飞机
 */
declare const BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: 1;

/**
 * 跨城交通方式：大巴
 */
declare const BMAP_TRANSIT_TYPE_POLICY_COACH: 2;

/**
 * 跨城交通方式，使用 `BMAP_TRANSIT_TYPE_POLICY_*` 常量传入
 * @example
 * ```typescript
 * new BMap.TransitRoute(map, { transitVehicleType: BMAP_TRANSIT_TYPE_POLICY_TRAIN });
 * ```
 */
type TransitVehicleType =
  | typeof BMAP_TRANSIT_TYPE_POLICY_TRAIN
  | typeof BMAP_TRANSIT_TYPE_POLICY_AIRPLANE
  | typeof BMAP_TRANSIT_TYPE_POLICY_COACH;

/**
 * 市内公交策略：推荐方案
 */
declare const BMAP_TRANSIT_POLICY_RECOMMEND: 0;

/**
 * 市内公交策略：最少换乘
 */
declare const BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 1;

/**
 * 市内公交策略：最少步行
 */
declare const BMAP_TRANSIT_POLICY_LEAST_WALKING: 2;

/**
 * 市内公交策略：不乘地铁
 */
declare const BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 3;

/**
 * 市内公交策略：最少时间
 */
declare const BMAP_TRANSIT_POLICY_LEAST_TIME: 4;

/**
 * 市内公交策略：地铁优先
 */
declare const BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: 5;

/**
 * 市内公交换乘策略，使用 `BMAP_TRANSIT_POLICY_*` 常量传入
 * @example
 * ```typescript
 * new BMap.TransitRoute(map, { policy: BMAP_TRANSIT_POLICY_LEAST_TRANSFER });
 * ```
 */
type TransitPolicy =
  | typeof BMAP_TRANSIT_POLICY_RECOMMEND
  | typeof BMAP_TRANSIT_POLICY_LEAST_TRANSFER
  | typeof BMAP_TRANSIT_POLICY_LEAST_WALKING
  | typeof BMAP_TRANSIT_POLICY_AVOID_SUBWAYS
  | typeof BMAP_TRANSIT_POLICY_LEAST_TIME
  | typeof BMAP_TRANSIT_POLICY_FIRST_SUBWAYS;

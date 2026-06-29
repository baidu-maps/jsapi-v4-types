/**
 * 跨城换乘策略：时间最短
 */
declare const BMAP_INTERCITY_POLICY_LEAST_TIME: 0;

/**
 * 跨城换乘策略：出发时间最早
 */
declare const BMAP_INTERCITY_POLICY_EARLY_START: 1;

/**
 * 跨城换乘策略：价格最低
 */
declare const BMAP_INTERCITY_POLICY_CHEAP_PRICE: 2;

/**
 * 跨城公交换乘策略，使用 `BMAP_INTERCITY_POLICY_*` 常量传入
 * @example
 * ```typescript
 * new BMap.TransitRoute(map, { intercityPolicy: BMAP_INTERCITY_POLICY_CHEAP_PRICE });
 * ```
 */
type IntercityPolicy =
  | typeof BMAP_INTERCITY_POLICY_LEAST_TIME
  | typeof BMAP_INTERCITY_POLICY_EARLY_START
  | typeof BMAP_INTERCITY_POLICY_CHEAP_PRICE;

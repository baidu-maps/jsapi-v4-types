/**
 * 驾车策略：默认（通常为时间最短）
 */
declare const BMAP_DRIVING_POLICY_DEFAULT: 0;

/**
 * 驾车策略：距离最短
 */
declare const BMAP_DRIVING_POLICY_DESTANCE: 2;

/**
 * 驾车策略：避开高速
 */
declare const BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 3;

/**
 * 驾车策略：优先高速
 */
declare const BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: 4;

/**
 * 驾车策略：避开拥堵
 */
declare const BMAP_DRIVING_POLICY_AVOID_CONGESTION: 5;

/**
 * 驾车策略：避开收费
 */
declare const BMAP_DRIVING_POLICY_AVOID_PAY: 6;

/**
 * 驾车策略：高速优先且避开拥堵
 */
declare const BMAP_DRIVING_POLICY_HIGHWAYS_AVOID_CONGESTION: 7;

/**
 * 驾车策略：避开高速和拥堵
 */
declare const BMAP_DRIVING_POLICY_AVOID_HIGHWAYS_CONGESTION: 8;

/**
 * 驾车策略：避开拥堵和收费
 */
declare const BMAP_DRIVING_POLICY_AVOID_CONGESTION_PAY: 9;

/**
 * 驾车策略：避开高速、拥堵和收费
 */
declare const BMAP_DRIVING_POLICY_AVOID_HIGHWAYS_CONGESTION_PAY: 10;

/**
 * 驾车策略：避开高速和收费
 */
declare const BMAP_DRIVING_POLICY_AVOID_HIGHWAYS_PAY: 11;

/**
 * 驾车策略：距离优先
 */
declare const BMAP_DRIVING_POLICY_DISTANCE_PRIORITY: 12;

/**
 * 驾车策略：时间优先
 */
declare const BMAP_DRIVING_POLICY_TIME_PRIORITY: 13;

/**
 * 驾车方案策略，使用 `BMAP_DRIVING_POLICY_*` 常量传入
 * @example
 * ```typescript
 * new BMap.DrivingRoute(map, { policy: BMAP_DRIVING_POLICY_AVOID_HIGHWAYS });
 * ```
 */
type DrivingPolicy =
  | typeof BMAP_DRIVING_POLICY_DEFAULT
  | typeof BMAP_DRIVING_POLICY_DESTANCE
  | typeof BMAP_DRIVING_POLICY_AVOID_HIGHWAYS
  | typeof BMAP_DRIVING_POLICY_FIRST_HIGHWAYS
  | typeof BMAP_DRIVING_POLICY_AVOID_CONGESTION
  | typeof BMAP_DRIVING_POLICY_AVOID_PAY
  | typeof BMAP_DRIVING_POLICY_HIGHWAYS_AVOID_CONGESTION
  | typeof BMAP_DRIVING_POLICY_AVOID_HIGHWAYS_CONGESTION
  | typeof BMAP_DRIVING_POLICY_AVOID_CONGESTION_PAY
  | typeof BMAP_DRIVING_POLICY_AVOID_HIGHWAYS_CONGESTION_PAY
  | typeof BMAP_DRIVING_POLICY_AVOID_HIGHWAYS_PAY
  | typeof BMAP_DRIVING_POLICY_DISTANCE_PRIORITY
  | typeof BMAP_DRIVING_POLICY_TIME_PRIORITY;

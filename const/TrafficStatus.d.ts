/**
 * 路况：无路况信息
 */
declare const BMAP_TRAFFICE_STATUS_NONE: 0;

/**
 * 路况：畅通
 */
declare const BMAP_TRAFFICE_STATUS_NORMAL: 1;

/**
 * 路况：缓行
 */
declare const BMAP_TRAFFICE_STATUS_SLOW: 2;

/**
 * 路况：拥堵
 */
declare const BMAP_TRAFFICE_STATUS_JAM: 3;

/**
 * 路况状态，使用 `BMAP_TRAFFICE_STATUS_*` 常量
 */
type TrafficStatus =
  | typeof BMAP_TRAFFICE_STATUS_NONE
  | typeof BMAP_TRAFFICE_STATUS_NORMAL
  | typeof BMAP_TRAFFICE_STATUS_SLOW
  | typeof BMAP_TRAFFICE_STATUS_JAM;

/**
 * 换乘类型：市内换乘
 */
declare const BMAP_TRANSIT_TYPE_IN_CITY: 0;

/**
 * 换乘类型：跨城换乘
 */
declare const BMAP_TRANSIT_TYPE_CROSS_CITY: 1;

/**
 * 公交换乘类型，使用 `BMAP_TRANSIT_TYPE_*` 常量
 */
type TransitType =
  | typeof BMAP_TRANSIT_TYPE_IN_CITY
  | typeof BMAP_TRANSIT_TYPE_CROSS_CITY;

/**
 * 海量点尺寸：极小（直径 2px）
 */
declare const BMAP_POINT_SIZE_TINY: 1;

/**
 * 海量点尺寸：更小（直径 4px）
 */
declare const BMAP_POINT_SIZE_SMALLER: 2;

/**
 * 海量点尺寸：小（直径 8px）
 */
declare const BMAP_POINT_SIZE_SMALL: 3;

/**
 * 海量点尺寸：正常（直径 10px）
 */
declare const BMAP_POINT_SIZE_NORMAL: 4;

/**
 * 海量点尺寸：大（直径 16px）
 */
declare const BMAP_POINT_SIZE_BIG: 5;

/**
 * 海量点尺寸：更大（直径 20px）
 */
declare const BMAP_POINT_SIZE_BIGGER: 6;

/**
 * 海量点尺寸：超大（直径 30px）
 */
declare const BMAP_POINT_SIZE_HUGE: 7;

/**
 * 海量点尺寸类型，使用 `BMAP_POINT_SIZE_*` 常量传入
 * @example
 * ```typescript
 * new BMap.PointCollection(points, { size: BMAP_POINT_SIZE_NORMAL });
 * ```
 */
type SizeType =
  | typeof BMAP_POINT_SIZE_TINY
  | typeof BMAP_POINT_SIZE_SMALLER
  | typeof BMAP_POINT_SIZE_SMALL
  | typeof BMAP_POINT_SIZE_NORMAL
  | typeof BMAP_POINT_SIZE_BIG
  | typeof BMAP_POINT_SIZE_BIGGER
  | typeof BMAP_POINT_SIZE_HUGE;

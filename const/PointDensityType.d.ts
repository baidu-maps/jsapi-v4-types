/**
 * 海量点密度：高密度（200）
 */
declare const BMAP_POINT_DENSITY_HIGH: 200;

/**
 * 海量点密度：中密度（100）
 */
declare const BMAP_POINT_DENSITY_MEDIUM: 100;

/**
 * 海量点密度：低密度（50）
 */
declare const BMAP_POINT_DENSITY_LOW: 50;

/**
 * 海量点密度，使用 `BMAP_POINT_DENSITY_*` 常量传入
 * @example
 * ```typescript
 * new BMap.PointCollection(points, { density: BMAP_POINT_DENSITY_HIGH });
 * ```
 */
type PointDensityType =
  | typeof BMAP_POINT_DENSITY_HIGH
  | typeof BMAP_POINT_DENSITY_MEDIUM
  | typeof BMAP_POINT_DENSITY_LOW;

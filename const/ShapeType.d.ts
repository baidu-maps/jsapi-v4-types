/**
 * 海量点形状：五角星
 */
declare const BMAP_POINT_SHAPE_STAR: 1;

/**
 * 海量点形状：水滴形
 */
declare const BMAP_POINT_SHAPE_WATERDROP: 2;

/**
 * 海量点形状：圆形
 */
declare const BMAP_POINT_SHAPE_CIRCLE: 3;

/**
 * 海量点形状：正方形
 */
declare const BMAP_POINT_SHAPE_SQUARE: 4;

/**
 * 海量点形状：菱形
 */
declare const BMAP_POINT_SHAPE_RHOMBUS: 5;

/**
 * 海量点形状类型，使用 `BMAP_POINT_SHAPE_*` 常量传入
 * @example
 * ```typescript
 * new BMap.PointCollection(points, { shape: BMAP_POINT_SHAPE_CIRCLE });
 * ```
 */
type ShapeType =
  | typeof BMAP_POINT_SHAPE_STAR
  | typeof BMAP_POINT_SHAPE_WATERDROP
  | typeof BMAP_POINT_SHAPE_CIRCLE
  | typeof BMAP_POINT_SHAPE_SQUARE
  | typeof BMAP_POINT_SHAPE_RHOMBUS;

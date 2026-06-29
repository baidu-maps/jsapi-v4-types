/**
 * Marker3D 形状：圆形
 */
declare const BMAP_SHAPE_CIRCLE: 1;

/**
 * Marker3D 形状：矩形
 */
declare const BMAP_SHAPE_RECT: 2;

/**
 * Marker3D 形状类型，使用 `BMAP_SHAPE_*` 常量传入
 * @example
 * ```typescript
 * new BMap.Marker3D(point, 100, { shape: BMAP_SHAPE_CIRCLE });
 * ```
 */
type Marker3DShapeType =
  | typeof BMAP_SHAPE_CIRCLE
  | typeof BMAP_SHAPE_RECT;

/**
 * 停靠在左上角
 */
declare const BMAP_ANCHOR_TOP_LEFT: 0;

/**
 * 停靠在右上角
 */
declare const BMAP_ANCHOR_TOP_RIGHT: 1;

/**
 * 停靠在左下角
 */
declare const BMAP_ANCHOR_BOTTOM_LEFT: 2;

/**
 * 停靠在右下角
 */
declare const BMAP_ANCHOR_BOTTOM_RIGHT: 3;

/**
 * 停靠在顶部居中
 */
declare const BMAP_ANCHOR_TOP_CENTER: 4;

/**
 * 停靠在左侧居中
 */
declare const BMAP_ANCHOR_MIDDLE_LEFT: 5;

/**
 * 停靠在正中心
 */
declare const BMAP_ANCHOR_CENTER: 6;

/**
 * 停靠在右侧居中
 */
declare const BMAP_ANCHOR_MIDDLE_RIGHT: 7;

/**
 * 停靠在底部居中
 */
declare const BMAP_ANCHOR_BOTTOM_CENTER: 8;

/**
 * 锚点/停靠位置枚举，使用 `BMAP_ANCHOR_*` 常量传入
 * @example
 * ```typescript
 * label.setAnchor(BMAP_ANCHOR_BOTTOM_CENTER);
 * ```
 */
type ControlAnchor =
  | typeof BMAP_ANCHOR_TOP_LEFT
  | typeof BMAP_ANCHOR_TOP_RIGHT
  | typeof BMAP_ANCHOR_BOTTOM_LEFT
  | typeof BMAP_ANCHOR_BOTTOM_RIGHT
  | typeof BMAP_ANCHOR_TOP_CENTER
  | typeof BMAP_ANCHOR_MIDDLE_LEFT
  | typeof BMAP_ANCHOR_CENTER
  | typeof BMAP_ANCHOR_MIDDLE_RIGHT
  | typeof BMAP_ANCHOR_BOTTOM_CENTER;

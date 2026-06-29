/**
 * 控件停靠在地图容器的左上角
 */
declare const BMAP_ANCHOR_TOP_LEFT: 0;

/**
 * 控件停靠在地图容器的右上角
 */
declare const BMAP_ANCHOR_TOP_RIGHT: 1;

/**
 * 控件停靠在地图容器的左下角
 */
declare const BMAP_ANCHOR_BOTTOM_LEFT: 2;

/**
 * 控件停靠在地图容器的右下角
 */
declare const BMAP_ANCHOR_BOTTOM_RIGHT: 3;

/**
 * 控件停靠位置，使用 `BMAP_ANCHOR_*` 常量传入
 * @example
 * ```typescript
 * control.setAnchor(BMAP_ANCHOR_TOP_RIGHT);
 * ```
 */
type ControlAnchor =
  | typeof BMAP_ANCHOR_TOP_LEFT
  | typeof BMAP_ANCHOR_TOP_RIGHT
  | typeof BMAP_ANCHOR_BOTTOM_LEFT
  | typeof BMAP_ANCHOR_BOTTOM_RIGHT;

/**
 * 完整的大型导航控件（含方向键和缩放）
 */
declare const BMAP_NAVIGATION_CONTROL_LARGE: 0;

/**
 * 小型导航控件（仅方向键）
 */
declare const BMAP_NAVIGATION_CONTROL_SMALL: 1;

/**
 * 仅平移控件
 */
declare const BMAP_NAVIGATION_CONTROL_PAN: 2;

/**
 * 仅缩放控件
 */
declare const BMAP_NAVIGATION_CONTROL_ZOOM: 3;

/**
 * 导航控件类型，使用 `BMAP_NAVIGATION_CONTROL_*` 常量传入
 * @example
 * ```typescript
 * new BMap.NavigationControl({ type: BMAP_NAVIGATION_CONTROL_SMALL });
 * ```
 */
type NavigationControlType =
  | typeof BMAP_NAVIGATION_CONTROL_LARGE
  | typeof BMAP_NAVIGATION_CONTROL_SMALL
  | typeof BMAP_NAVIGATION_CONTROL_PAN
  | typeof BMAP_NAVIGATION_CONTROL_ZOOM;

/**
 * 高亮模式：突出显示关键节点位置
 */
declare const BMAP_HIGHLIGHT_STEP: 1;

/**
 * 高亮模式：突出显示路段
 */
declare const BMAP_HIGHLIGHT_ROUTE: 2;

/**
 * 路线高亮模式，使用 `BMAP_HIGHLIGHT_*` 常量
 * @example
 * ```typescript
 * drivingRoute.setHighlightMode(BMAP_HIGHLIGHT_ROUTE);
 * ```
 */
type HighlightMode =
  | typeof BMAP_HIGHLIGHT_STEP
  | typeof BMAP_HIGHLIGHT_ROUTE;

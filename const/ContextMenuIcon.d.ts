/**
 * 内置右键菜单图标：放大
 */
declare const BMAP_CONTEXT_MENU_ICON_ZOOMIN: string;

/**
 * 内置右键菜单图标：缩小
 */
declare const BMAP_CONTEXT_MENU_ICON_ZOOMOUT: string;

/**
 * 内置右键菜单图标，使用 `BMAP_CONTEXT_MENU_ICON_*` 常量传入
 * @example
 * ```typescript
 * new BMap.MenuItem('放大', handler, { iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN });
 * ```
 */
type ContextMenuIcon =
  | typeof BMAP_CONTEXT_MENU_ICON_ZOOMIN
  | typeof BMAP_CONTEXT_MENU_ICON_ZOOMOUT;

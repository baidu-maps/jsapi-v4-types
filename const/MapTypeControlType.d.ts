/**
 * 地图类型控件：水平排列
 */
declare const BMAP_MAPTYPE_CONTROL_HORIZONTAL: 0;

/**
 * 地图类型控件：下拉菜单
 */
declare const BMAP_MAPTYPE_CONTROL_DROPDOWN: 1;

/**
 * 地图类型控件：图标形式
 */
declare const BMAP_MAPTYPE_CONTROL_MAP: 2;

/**
 * 地图类型控件外观样式，使用 `BMAP_MAPTYPE_CONTROL_*` 常量传入
 * @example
 * ```typescript
 * new BMap.MapTypeControl({ type: BMAP_MAPTYPE_CONTROL_DROPDOWN });
 * ```
 */
type MapTypeControlType =
  | typeof BMAP_MAPTYPE_CONTROL_HORIZONTAL
  | typeof BMAP_MAPTYPE_CONTROL_DROPDOWN
  | typeof BMAP_MAPTYPE_CONTROL_MAP;

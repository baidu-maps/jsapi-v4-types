/**
 * 检索模式：驾车
 */
declare const BMAP_MODE_DRIVING: 'driving';

/**
 * 检索模式：公交
 */
declare const BMAP_MODE_TRANSIT: 'transit';

/**
 * 检索模式：步行
 */
declare const BMAP_MODE_WALKING: 'walking';

/**
 * 检索模式：导航
 */
declare const BMAP_MODE_NAVIGATION: 'navigation';

/**
 * 检索模式，使用 `BMAP_MODE_*` 常量
 */
type Mode =
  | typeof BMAP_MODE_DRIVING
  | typeof BMAP_MODE_TRANSIT
  | typeof BMAP_MODE_WALKING
  | typeof BMAP_MODE_NAVIGATION;

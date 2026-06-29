/**
 * 标注掉落动画
 */
declare const BMAP_ANIMATION_DROP: 1;

/**
 * 标注反弹动画
 */
declare const BMAP_ANIMATION_BOUNCE: 2;

/**
 * 标注升起动画（拖拽开始时）
 */
declare const BMAP_ANIMATION_RAISEUP: 3;

/**
 * 标注下落动画（拖拽结束时）
 */
declare const BMAP_ANIMATION_DROPDOWN: 4;

/**
 * 标注动画类型，使用 `BMAP_ANIMATION_*` 常量传入
 * @example
 * ```typescript
 * marker.setAnimation(BMAP_ANIMATION_BOUNCE);
 * ```
 */
type MarkerAnimation =
  | typeof BMAP_ANIMATION_DROP
  | typeof BMAP_ANIMATION_BOUNCE
  | typeof BMAP_ANIMATION_RAISEUP
  | typeof BMAP_ANIMATION_DROPDOWN;

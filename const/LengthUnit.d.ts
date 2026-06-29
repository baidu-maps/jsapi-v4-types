/**
 * 公制单位（米/千米）
 */
declare const BMAP_UNIT_METRIC: 'metric';

/**
 * 英制单位（英里/英尺）
 */
declare const BMAP_UNIT_IMPERIAL: 'us';

/**
 * 比例尺长度单位，使用 `BMAP_UNIT_*` 常量传入
 * @example
 * ```typescript
 * new BMap.ScaleControl({ unit: BMAP_UNIT_IMPERIAL });
 * ```
 */
type LengthUnit =
  | typeof BMAP_UNIT_METRIC
  | typeof BMAP_UNIT_IMPERIAL;

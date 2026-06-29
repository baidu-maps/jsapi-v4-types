/**
 * 公交线路类型：公共汽车
 */
declare const BMAP_LINE_TYPE_BUS: 0;

/**
 * 公交线路类型：地铁
 */
declare const BMAP_LINE_TYPE_SUBWAY: 1;

/**
 * 公交线路类型：渡轮
 */
declare const BMAP_LINE_TYPE_FERRY: 2;

/**
 * 公交线路类型：火车
 */
declare const BMAP_LINE_TYPE_TRAIN: 3;

/**
 * 公交线路类型：飞机
 */
declare const BMAP_LINE_TYPE_AIRPLANE: 4;

/**
 * 公交线路类型：大巴
 */
declare const BMAP_LINE_TYPE_COACH: 5;

/**
 * 公交线路类型，使用 `BMAP_LINE_TYPE_*` 常量
 */
type LineType =
  | typeof BMAP_LINE_TYPE_BUS
  | typeof BMAP_LINE_TYPE_SUBWAY
  | typeof BMAP_LINE_TYPE_FERRY
  | typeof BMAP_LINE_TYPE_TRAIN
  | typeof BMAP_LINE_TYPE_AIRPLANE
  | typeof BMAP_LINE_TYPE_COACH;

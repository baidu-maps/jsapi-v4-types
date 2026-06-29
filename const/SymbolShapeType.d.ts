/**
 * 矢量图标：圆形（默认半径 1px）
 */
declare const BMap_Symbol_SHAPE_CIRCLE: 1;

/**
 * 矢量图标：矩形（默认宽 4px，高 2px）
 */
declare const BMap_Symbol_SHAPE_RECTANGLE: 2;

/**
 * 矢量图标：菱形（外接圆半径 10px）
 */
declare const BMap_Symbol_SHAPE_RHOMBUS: 3;

/**
 * 矢量图标：五角星（外接圆半径 10px）
 */
declare const BMap_Symbol_SHAPE_STAR: 4;

/**
 * 矢量图标：向下的闭合箭头
 */
declare const BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5;

/**
 * 矢量图标：向上的闭合箭头
 */
declare const BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6;

/**
 * 矢量图标：向下的非闭合箭头
 */
declare const BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7;

/**
 * 矢量图标：向上的非闭合箭头
 */
declare const BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8;

/**
 * 矢量图标：定位点图标
 */
declare const BMap_Symbol_SHAPE_POINT: 9;

/**
 * 矢量图标：飞机形状
 */
declare const BMap_Symbol_SHAPE_PLANE: 10;

/**
 * 矢量图标：相机形状
 */
declare const BMap_Symbol_SHAPE_CAMERA: 11;

/**
 * 矢量图标：警告符号
 */
declare const BMap_Symbol_SHAPE_WARNING: 12;

/**
 * 矢量图标：笑脸形状
 */
declare const BMap_Symbol_SHAPE_SMILE: 13;

/**
 * 矢量图标：钟表形状
 */
declare const BMap_Symbol_SHAPE_CLOCK: 14;

/**
 * 矢量图标预设形状，使用 `BMap_Symbol_SHAPE_*` 常量传入
 * @example
 * ```typescript
 * const symbol = new BMap.Symbol(BMap_Symbol_SHAPE_CIRCLE, { scale: 5 });
 * ```
 */
type SymbolShapeType =
  | typeof BMap_Symbol_SHAPE_CIRCLE
  | typeof BMap_Symbol_SHAPE_RECTANGLE
  | typeof BMap_Symbol_SHAPE_RHOMBUS
  | typeof BMap_Symbol_SHAPE_STAR
  | typeof BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW
  | typeof BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW
  | typeof BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW
  | typeof BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW
  | typeof BMap_Symbol_SHAPE_POINT
  | typeof BMap_Symbol_SHAPE_PLANE
  | typeof BMap_Symbol_SHAPE_CAMERA
  | typeof BMap_Symbol_SHAPE_WARNING
  | typeof BMap_Symbol_SHAPE_SMILE
  | typeof BMap_Symbol_SHAPE_CLOCK;

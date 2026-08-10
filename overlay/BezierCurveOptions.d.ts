declare namespace BMap {
  /**
   * BezierCurve 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
     */
  interface BezierCurveOptions {
    /**
     * 曲线颜色，格式为 '#xxxxxx'
     * @default 跟随主题色（CSS 变量 `--bmap-color-primary`，缺省为 '#1677ff'）
     */
    strokeColor?: string;
    /**
     * 曲线宽度，以像素为单位
     * @default 2
     */
    strokeWeight?: number;
    /**
     * 曲线透明度，取值范围0 - 1
     * @default 1
     */
    strokeOpacity?: number;
    /**
     * 曲线样式
     * @default 'solid'
     */
    strokeStyle?: 'solid' | 'dashed' | 'dotted';
    /**
     * 是否在调用 map.clearOverlays() 时清除此覆盖物
     * @default true
     */
    enableMassClear?: boolean;
    /**
     * 是否响应点击事件
     * @default true
     */
    enableClicking?: boolean;
    /**
     * 虚线样式配置，如 [8, 4] 表示实线部分长8像素、间隙部分长4像素。
     * 默认虚线中实线和空隙的长度均为线宽的2倍
     */
    dashArray?: number[];
    /**
     * 覆盖物的初始层叠顺序，也可通过 `setZIndex()` 方法修改
     * @default 0
     */
    zIndex?: number;
  }
}

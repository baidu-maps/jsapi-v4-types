declare namespace BMap {
  /**
   * BezierCurve 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
     */
  interface BezierCurveOptions {
    /**
     * 曲线颜色，格式为 '#xxxxxx'
     * @default '#000'
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
     * 曲线样式，支持 `'solid'` 实线或 `'dashed'` 虚线
     * @default 'solid'
     */
    strokeStyle?: string;
    /**
     * 是否在调用 map.clearOverlays() 时清除此覆盖物
     * @default true
     */
    enableMassClear?: boolean;
  }
}

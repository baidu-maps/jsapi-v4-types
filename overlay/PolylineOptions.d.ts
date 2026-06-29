declare namespace BMap {
  /**
   * 此类表示Polyline构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface PolylineOptions {
    /**
     * 折线颜色，格式为 '#xxxxxx'
     * @default '#000'
     */
    strokeColor?: string;
    /**
     * 折线的宽度，以像素为单位
     * @default 2
     */
    strokeWeight?: number;
    /**
     * 折线的透明度，取值范围0 - 1
     * @default 1
     */
    strokeOpacity?: number;
    /**
     * 折线的样式，支持 `'solid'`、`'dashed'`、`'dotted'`
     * @default 'solid'
     */
    strokeStyle?: string;
    /**
     * 描边线端头类型，可选 `'round'`、`'butt'`、`'square'`
     * @default 'round'
     */
    strokeLineCap?: string;
    /**
     * 是否在调用 map.clearOverlays() 时清除此覆盖物
     * @default true
     */
    enableMassClear?: boolean;
    /**
     * 是否启用线编辑
     * @default false
     */
    enableEditing?: boolean;
    /**
     * 是否响应点击事件
     * @default true
     */
    enableClicking?: boolean;
    /**
     * 是否开启大地线模式，为 true 时两点连线将以大地线的形式呈现
     * @default false
     */
    geodesic?: boolean;
    /**
     * 跨180度经线时走右侧
     * @default false
     */
    linkRight?: boolean;
    /**
     * 是否进行跨经度180度裁剪，绘制跨经度180度的折线时可设置为 false 以优化效果
     * @default true
     */
    clip?: boolean;
  }
}

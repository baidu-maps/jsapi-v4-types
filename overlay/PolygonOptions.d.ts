declare namespace BMap {
  /**
   * 此类表示PolygonOptions构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface PolygonOptions {
    /**
     * 边线颜色，格式为 '#xxxxxx'
     * @default '#000'
     */
    strokeColor?: string;
    /**
     * 填充颜色，格式为 '#xxxxxx'，传入空字符串时无填充效果
     * @default '#fff'
     */
    fillColor?: string;
    /**
     * 边线宽度，以像素为单位
     * @default 2
     */
    strokeWeight?: number;
    /**
     * 边线透明度，取值范围0 - 1
     * @default 1
     */
    strokeOpacity?: number;
    /**
     * 填充透明度，取值范围0 - 1
     * @default 0.6
     */
    fillOpacity?: number;
    /**
     * 边线样式，支持 `'solid'` 实线或 `'dashed'` 虚线
     * @default 'solid'
     */
    strokeStyle?: string;
    /**
     * 是否在调用 map.clearOverlays() 时清除此覆盖物
     * @default true
     */
    enableMassClear?: boolean;
    /**
     * 是否启用编辑功能
     * @default false
     */
    enableEditing?: boolean;
    /**
     * 是否响应点击事件
     * @default true
     */
    enableClicking?: boolean;
  }
}

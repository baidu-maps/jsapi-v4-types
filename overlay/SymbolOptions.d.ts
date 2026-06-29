declare namespace BMap {
  /**
   * Symbol 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface SymbolOptions {
    /**
     * 符号的锚点位置，相对于图标自身坐标系
     */
    anchor?: Size;
    /**
     * 矢量图标的填充颜色，支持颜色常量字符串、十六进制、RGB、RGBA等格式
     */
    fillColor?: string;
    /**
     * 矢量图标填充透明度，取值范围0 - 1
     */
    fillOpacity?: number;
    /**
     * 矢量图标的缩放比例
     */
    scale?: number;
    /**
     * 矢量图标的旋转角度，单位度
     */
    rotation?: number;
    /**
     * 矢量图标线的填充颜色，支持颜色常量字符串、十六进制、RGB、RGBA等格式
     */
    strokeColor?: string;
    /**
     * 矢量图标线的透明度，取值范围0 - 1
     */
    strokeOpacity?: number;
    /**
     * 矢量图标线宽，未指定时与 scale 值相同
     */
    strokeWeight?: number;
  }
}

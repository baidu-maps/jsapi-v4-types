declare namespace BMap {
  /**
   * 此类用于设置 Polyline 上的符号显示。
   * @deprecated 4.0 已废弃，请使用 {@link PolylineOptions#strokeTexture} 配置项代替
   */
  class IconSequence {
    /**
     * 创建线上符号实例
     * @param symbol 符号样式
     * @param offset 符号相对于线起点的位置，可以是百分比或像素值
     * @param repeat 符号在线上重复显示的间距，可以是百分比或像素值，同时设置 repeat 与 offset 时以 repeat 为准
     * @param fixedRotation 图标旋转角度是否与线走向一致
     */
    constructor(symbol: Symbol, offset: string, repeat: string, fixedRotation: boolean);
  }
}

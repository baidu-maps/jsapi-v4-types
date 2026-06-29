declare namespace BMap {
  /**
   * Label 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface LabelOptions {
    /**
     * 文本标注的位置偏移值
     */
    offset?: Size;
    /**
     * 文本标注的地理位置
     */
    position?: Point;
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
  }
}

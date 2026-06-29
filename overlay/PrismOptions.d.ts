declare namespace BMap {
  /**
   * Prism 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
     */
  interface PrismOptions {
    /**
     * 顶面填充颜色，格式为 '#xxxxxx'
     * @default '#fff'
     */
    topFillColor?: string;
    /**
     * 顶面填充透明度，取值范围0 - 1
     * @default 0.6
     */
    topFillOpacity?: number;
    /**
     * 侧面填充颜色，格式为 '#xxxxxx'
     * @default '#fff'
     */
    sideFillColor?: string;
    /**
     * 侧面填充透明度，取值范围0 - 1
     * @default 0.8
     */
    sideFillOpacity?: number;
    /**
     * 是否在调用 map.clearOverlays() 时清除此覆盖物
     * @default true
     */
    enableMassClear?: boolean;
  }
}

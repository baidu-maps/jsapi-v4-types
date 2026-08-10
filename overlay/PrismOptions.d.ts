declare namespace BMap {
  /**
   * Prism 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
     */
  interface PrismOptions {
    /**
     * 顶面填充颜色，合法的 CSS 颜色值，传入空字符串时顶面无填充效果
     * @default 跟随主题色（CSS 变量 `--bmap-color-primary-bg`，缺省为 '#eaf1ff'）
     */
    topFillColor?: string;
    /**
     * 顶面填充透明度，取值范围0 - 1
     * @default 0.6
     */
    topFillOpacity?: number;
    /**
     * 侧面填充颜色，合法的 CSS 颜色值，传入空字符串时侧面无填充效果
     * @default 跟随主题色（CSS 变量 `--bmap-color-primary-bg`，缺省为 '#eaf1ff'）
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
    /**
     * 是否响应点击事件
     * @default true
     */
    enableClicking?: boolean;
    /**
     * 覆盖物的初始层叠顺序，也可在实例上通过 `setZIndex()` 方法修改
     * @default 0
     */
    zIndex?: number;
  }
}

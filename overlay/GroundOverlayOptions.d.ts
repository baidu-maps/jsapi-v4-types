declare namespace BMap {
  /**
   * GroundOverlay 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface GroundOverlayOptions {
    /**
     * 图层透明度，取值范围0 - 1
     * @default 1
     */
    opacity?: number;
    /**
     * 图层图片或视频地址
     */
    url?: string;
    /**
     * 图层显示的最小缩放级别
     * @default 3
     */
    displayOnMinLevel?: number;
    /**
     * 图层显示的最大缩放级别
     * @default 21
     */
    displayOnMaxLevel?: number;
  }
}

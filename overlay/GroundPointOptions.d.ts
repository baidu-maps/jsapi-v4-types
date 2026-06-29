declare namespace BMap {
  /**
   * GroundPoint 构造函数的可选参数，继承 GroundOverlayOptions。
   * @category 配置项
     */
  interface GroundPointOptions {
    /**
     * 图标地址
     */
    url?: string;
    /**
     * 坐标点尺寸，单位像素
     */
    size?: Size;
    /**
     * 锚点，以图标左上角为原点
     * @default new BMap.Size(0, 0)
     */
    anchor?: Size;
    /**
     * 缩放比例
     * @default 1
     */
    scale?: number;
    /**
     * 旋转角度，单位度
     * @default 0
     */
    rotation?: number;
    /**
     * 偏移量
     * @default new BMap.Size(0, 0)
     */
    offset?: Size;
    /**
     * 尺寸参考的缩放级别
     * @default 18
     */
    level?: number;
  }
}

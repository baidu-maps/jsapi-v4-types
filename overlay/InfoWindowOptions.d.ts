declare namespace BMap {
  /**
   * InfoWindow 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface InfoWindowOptions {
    /**
     * 信息窗宽度，单位像素，取值范围 220 - 730，设为 0 时宽度自适应内容
     * @default 0
     */
    width?: number;
    /**
     * 信息窗高度，单位像素，取值范围 60 - 650，设为 0 时高度自适应内容
     * @default 0
     */
    height?: number;
    /**
     * 信息窗最大化时的宽度，单位像素，取值范围 220 - 730
     * @default 730
     */
    maxWidth?: number;
    /**
     * 信息窗位置偏移值，底端尖角相对于地理坐标的偏移量
     */
    offset?: Size;
    /**
     * 信息窗标题文字，支持HTML内容
     */
    title?: string;
    /**
     * 是否开启信息窗口打开时地图自动平移
     * @default true
     */
    enableAutoPan?: boolean;
    /**
     * 是否开启点击地图关闭信息窗口
     * @default true
     */
    enableCloseOnClick?: boolean;
  }
}

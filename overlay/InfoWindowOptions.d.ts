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
    /**
     * 信息窗最大化时显示的内容，支持 HTML
     */
    maxContent?: string;
    /**
     * 是否开启最大化功能
     * @default false
     */
    enableMaximize?: boolean;
    /**
     * 信息窗相对于地图容器 top、right、bottom、left 四个方向的边距
     */
    margin?: number[];
    /**
     * 信息窗相对于地图左上、右上、右下、左下四个方向的避让区域
     */
    collisions?: number[];
    /**
     * 信息窗关闭之前的回调函数
     */
    onClosing?: () => void;
    /**
     * 是否启用信息窗口的搜索工具
     */
    enableSearchTool?: boolean;
    /**
     * 信息窗头部内容，支持 HTML。仅在 4.0 中生效，3.0 下接收该参数但不渲染
     */
    headerContent?: string;
    /**
     * 是否允许信息窗内容区域滚动
     */
    enableContentScroll?: boolean;
  }
}

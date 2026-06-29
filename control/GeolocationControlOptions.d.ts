declare namespace BMap {
  /**
   * GeolocationControl 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface GeolocationControlOptions {
    /**
     * 控件的停靠位置
     * @default BMAP_ANCHOR_BOTTOM_LEFT
     */
    anchor?: ControlAnchor;
    /**
     * 控件基于停靠位置的偏移量
     * @default new BMap.Size(10, 50)
     */
    offset?: Size;
    /**
     * 是否显示定位信息面板
     * @default true
     */
    showAddressBar?: boolean;
    /**
     * 添加控件时是否自动进行定位
     * @default false
     */
    enableAutoLocation?: boolean;
    /**
     * 自定义定位中心点的图标样式
     */
    locationIcon?: Icon;
    /**
     * 是否开启跟踪用户位置，开启后控件会实时跟踪显示用户的当前位置
     * @default false
     */
    watchPosition?: boolean;
    /**
     * 是否开启罗盘功能，仅对 iOS 系统有效
     * @default false
     */
    useCompass?: boolean;
    /**
     * 定位成功后是否调整级别
     * @default true
     */
    autoZoom?: boolean;
    /**
     * 定位成功后是否调整视野
     * @default true
     */
    autoViewport?: boolean;
  }
}

declare namespace BMap {
  /**
   * MapTypeControl 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface MapTypeControlOptions {
    /**
     * 控件的停靠位置
     * @default BMAP_ANCHOR_TOP_RIGHT
     */
    anchor?: ControlAnchor;
    /**
     * 控件的偏移值
     * @default new BMap.Size(10, 10)
     */
    offset?: Size;
    /**
     * 控件样式
     * @default BMAP_MAPTYPE_CONTROL_MAP
     */
    type?: MapTypeControlType;
    /**
     * 控件展示的地图类型列表
     * @default [BMAP_NORMAL_MAP, BMAP_EARTH_MAP, BMAP_HYBRID_MAP]
     */
    mapTypes?: MapType[];
    /**
     * 是否启用切换功能
     * @default true
     */
    enableSwitch?: boolean;
  }
}

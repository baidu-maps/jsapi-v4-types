declare namespace BMap {
  /**
   * 个性化地图样式配置对象
     * @category 配置项
   */
  interface MapStyleConfig {
    styleId?: string;
    /** 通过个性化编辑器发布的样式json */
    styleJson?: object[];
    /**
     * @default 'v2'
     */
    version?: string;
  }
}

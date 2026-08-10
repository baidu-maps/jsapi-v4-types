declare namespace BMap {
  /**
   * 个性化地图样式配置对象
   * @category 配置项
   */
  interface MapStyleConfig {
    /**
     * 通过个性化编辑器发布的styleId
     */
    styleId?: string;
    /**
     * 通过个性化编辑器发布的样式json 
     */
    styleJson?: object[];
    /**
     * @default false
     */
    merge?: boolean;
  }
}

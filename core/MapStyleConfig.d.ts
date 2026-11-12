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
     * 是否使用合并模式，当传入styleJson时，开启合并模式后，不会清除原有样式，而是与新样式合并
     * @default false
     */
    merge?: boolean;
  }
}

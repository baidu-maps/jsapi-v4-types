declare namespace BMap {
  /**
   * 此类用来描述全景中道路指示中相邻全景的信息。使用对象字面量形式表示，不可实例化。
   * 
   */
  interface PanoramaLink {
    /**
     * 相连全景的描述信息
     */
    description?: string;
    /**
     * 相连道路的方向，正北方向为0，正东为90，正南为180，正西为270
     */
    heading?: number;
    /**
     * 相邻全景的id
     */
    id?: string;
    /**
     * 相连道路的原始方向
     */
    dir?: number;
    /**
     * 结合全景正北偏移校正后的方向
     */
    refinedDir?: number;
    /**
     * 相邻全景的墨卡托横坐标
     */
    x?: number;
    /**
     * 相邻全景的墨卡托纵坐标
     */
    y?: number;
    /**
     * 相连道路的宽度
     */
    roadWidth?: number;
  }
}

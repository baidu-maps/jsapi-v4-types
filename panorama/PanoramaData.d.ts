declare namespace BMap {
  /**
   * 通过PanoramaService类检索获得。使用对象字面量形式表示，不可实例化。
   * 
   */
  interface PanoramaData {
    /**
     * 全景id
     */
    id: string;
    /**
     * 全景的描述信息
     */
    description: string;
    /**
     * 全景相邻道路信息
     */
    links: PanoramaLink[];
    /**
     * 全景的地理坐标
     */
    position: Point;
    /**
     * 全景图块信息
     */
    tiles: PanoramaTileData;
  }
}

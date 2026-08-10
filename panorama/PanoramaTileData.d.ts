declare namespace BMap {
  /**
   * 此类是图块数据信息，不可实例化。
   * 
   */
  interface PanoramaTileData {
    /**
     * 整个全景图中心位置的方位（单位角度）
     */
    centerHeading: number;
    /**
     * 图块展示的尺寸（单位像素），注意这个尺寸与实际的图片尺寸可能不同
     */
    tileSize: { width: number; height: number };
    /**
     * 整个全景图的尺寸（单位像素）
     */
    worldSize: { width: number; height: number };
  }
}

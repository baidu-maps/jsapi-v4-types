declare namespace BMap {
  /**
   * 此类用来检索全景数据信息。
   * 
   */
  class PanoramaService {
    /**
     * 创建全景数据检索实例
     */
    constructor();
    /**
     * 根据全景 id 返回全景数据，获取不到数据时回调参数为 null
     * @param id 全景 id
     * @param callback 回调函数，参数为 PanoramaData 或 null
     */
    getPanoramaById(id: string, callback: (data: PanoramaData | null) => void): void;
    /**
     * 根据坐标返回默认 50 米范围内的全景数据，获取不到数据时回调参数为 null
     * @param point 中心坐标
     * @param callback 回调函数，参数为 PanoramaData 或 null
     */
    getPanoramaByLocation(point: Point, callback: (data: PanoramaData | null) => void): void;
    /**
     * 根据坐标及半径返回该范围内的全景数据；不设置半径时默认 50 米；获取不到数据时回调参数为 null
     * @param point 中心坐标
     * @param radius 搜索半径（米），默认 50
     * @param callback 回调函数，参数为 PanoramaData 或 null
     */
    getPanoramaByLocation(point: Point, radius: number, callback: (data: PanoramaData | null) => void): void;
  }
}

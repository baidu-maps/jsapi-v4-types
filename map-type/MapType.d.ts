declare namespace BMap {
  /**
   * 此类表示一种地图类型，可通过实例化此类自定义地图类型。全局常量 `BMAP_NORMAL_MAP`、`BMAP_SATELLITE_MAP` 等均为此类的内置实例。
   */
  class MapType {
    /**
     * 创建 MapType 对象实例
     * @param name 地图类型名称
     * @param layers 地图图层，可以为单个图层或图层数组
     * @param options 可选参数
     */
    constructor(name: string, layers: TileLayer | TileLayer[], options?: MapTypeOptions);
    /**
     * 返回地图类型名称
     */
    getName(): string;
    /**
     * 返回地图类型对应的图层
     */
    getTileLayer(): TileLayer;
    /**
     * 返回地图类型允许的最小级别
     */
    getMinZoom(): number;
    /**
     * 返回地图类型允许的最大级别
     */
    getMaxZoom(): number;
    /**
     * 返回地图类型所使用的投影实例
     */
    getProjection(): Projection;
    /**
     * 返回地图类型对应的前景色
     */
    getTextColor(): string;
    /**
     * 返回地图类型的提示说明，用于在地图类型控件中显示
     */
    getTips(): string;
  }
}

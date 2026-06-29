declare namespace BMap {
  /**
   * 地图类型常量（`@since 4.0` 推荐直接使用 `BMAP_*_MAP` 全局常量）
     */
  class MapTypeId {
    /** 普通街道视图 */
    static BMAP_NORMAL_MAP: string;
    /** 卫星地图 */
    static BMAP_SATELLITE_MAP: string;
    /** 卫星与路网混合地图 */
    static BMAP_HYBRID_MAP: string;
    /** 地球卫星视图 */
    static BMAP_EARTH_MAP: string;
    /** 无底图模式 */
    static BMAP_NONE_MAP: string;
  }
}

declare namespace BMap {
  /**
   * 此类表示 MapMask 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * `isMapMask`、`isBuildingMask`、`isPoiMask` 都不开启时掩膜没有效果
     * @category 配置项
   */
  interface MapMaskOptions {
    /**
     * 显示区域。'inside' 表示只显示掩膜区域内的内容，'outside' 表示只显示掩膜区域外的内容
     * @default 'inside'
     */
    showRegion?: 'inside' | 'outside';
    /**
     * 是否对底图生效，被遮住的部分露出地图背景色
     * @default false
     */
    isMapMask?: boolean;
    /**
     * 是否对 3D 楼块生效
     * @default false
     */
    isBuildingMask?: boolean;
    /**
     * 是否对底图 POI 标注生效
     * @default false
     */
    isPoiMask?: boolean;
    /**
     * 是否在调用 map.clearOverlays() 时清除此覆盖物
     * @default true
     */
    enableMassClear?: boolean;
  }
}

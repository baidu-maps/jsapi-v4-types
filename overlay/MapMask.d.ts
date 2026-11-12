declare namespace BMap {
  /**
   * 区域掩膜覆盖物，用一个多边形区域控制底图、3D 楼块和底图 POI 只在区域内或区域外显示，
   * 被遮住的部分露出地图背景色。掩膜只作用于底图内容，不影响 Marker、Polyline 等覆盖物。
   *
   * 同一地图上的多个掩膜共用一套显示配置，以最后添加的为准；
   * 移除其中任意一个，地图上的掩膜效果会全部关闭。
     */
  class MapMask extends Overlay {
    /**
     * 创建区域掩膜。创建后需要调用 map.addOverlay() 添加到地图上才生效，
     * 调用 map.removeOverlay() 移除
     * @param path 掩膜区域的边界坐标数组（BD09 经纬度），首尾不闭合时会自动闭合
     * @param opts 可选参数
     * @example
     * ```typescript
     * // 只显示区域内的底图、楼块和 POI
     * const mask = new BMap.MapMask([
     *   new BMap.Point(116.38, 39.90),
     *   new BMap.Point(116.42, 39.90),
     *   new BMap.Point(116.42, 39.93),
     *   new BMap.Point(116.38, 39.93),
     * ], {
     *   showRegion: 'inside',
     *   isMapMask: true,
     *   isBuildingMask: true,
     *   isPoiMask: true,
     * });
     * map.addOverlay(mask);
     * ```
     * @example
     * ```typescript
     * // 挖掉区域内的底图，只显示区域外
     * const mask = new BMap.MapMask(path, { showRegion: 'outside', isMapMask: true });
     * map.addOverlay(mask);
     * // 取消掩膜
     * map.removeOverlay(mask);
     * ```
     */
    constructor(path: Point[], opts?: MapMaskOptions);
  }
}

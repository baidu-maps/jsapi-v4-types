declare namespace BMap {
  /**
   * {@link GeoJSONSource.normalize} 输出的归一化要素。
   * `coordinates` 保持原始经纬度（默认 BD09LL），形状随 `type` 而定
     */
  interface GeoJSONNormalizedFeature {
    /** 几何类型 */
    type: 'Point' | 'MultiPoint' | 'LineString' | 'MultiLineString' | 'Polygon' | 'MultiPolygon';
    /** 原始坐标，形状随 `type` 而定 */
    coordinates: any;
    /** 要素的 properties */
    properties: any;
    /** 要素 id（取自 `id` 或 `properties[idKey]`，缺省用序号） */
    id: string | number;
  }

  /**
   * GeoJSON 归一化静态工具。纯数据转换，不含渲染/坐标系逻辑，把各种 GeoJSON 输入
   * 统一成内部要素列表，并按几何类型提取点/线/面。与图层解耦，可独立使用。
   *
   * 支持输入：`FeatureCollection` / `Feature` / `Feature[]` / 裸 Geometry；
   * 支持几何：`Point` / `MultiPoint` / `LineString` / `MultiLineString` / `Polygon` / `MultiPolygon`。
     */
  class GeoJSONSource {
    /**
     * 归一化为统一的要素列表
     * @param input GeoJSON 输入（`FeatureCollection` / `Feature` / `Feature[]` / 裸 Geometry）
     * @param idKey 取 id 的 properties 字段名
     * @default idKey 'id'
     * @example
     * ```typescript
     * const features = BMap.GeoJSONSource.normalize({
     *   type: 'FeatureCollection',
     *   features: [
     *     { type: 'Feature', geometry: { type: 'Point', coordinates: [116.404, 39.915] }, properties: { id: 1 } }
     *   ]
     * });
     * ```
     */
    static normalize(input: object | any[], idKey?: string): GeoJSONNormalizedFeature[];

    /**
     * 提取点集与权重（只认 `Point` / `MultiPoint`，其余几何忽略）
     * @param features {@link GeoJSONSource.normalize} 的输出
     * @param weightField 权重字段名
     * @default weightField 'count'
     * @returns `points` 为 [lng, lat] 数组，`weights` 为对应权重
     */
    static extractPoints(
      features: GeoJSONNormalizedFeature[],
      weightField?: string
    ): { points: number[][]; weights: number[] };

    /**
     * 提取线串集合，统一为多条线 `[[[lng, lat], ...], ...]`。
     * `Polygon` / `MultiPolygon` 的环也会作为闭合线返回
     * @param feature {@link GeoJSONSource.normalize} 输出的单个要素
     */
    static toLineStrings(feature: GeoJSONNormalizedFeature): number[][][];

    /**
     * 提取多边形集合，统一为 `[[outer, hole1, ...], ...]`（每个多边形含外环与洞）
     * @param feature {@link GeoJSONSource.normalize} 输出的单个要素
     */
    static toPolygons(feature: GeoJSONNormalizedFeature): number[][][][];
  }
}

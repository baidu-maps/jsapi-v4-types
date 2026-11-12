declare namespace BMap {
  /**
   * 此类表示一条货车出行方案。不可实例化，通过 {@link TruckRouteResult#getPlan} 获得。
   *
   * 与驾车方案的区别：货车方案按路段（step）组织，用 {@link TruckRoutePlan#getLine} 取路段，
   * 每个路段带道路名、收费站、分段路况等货车专有信息。
   */
  interface TruckRoutePlan {
    /**
     * 返回方案包含的路段个数
     */
    getNumLines(): number;
    /**
     * 返回方案中索引指定的路段，索引 0 表示第一段
     * @param i 路段序号
     * @example
     * ```typescript
     * const line = plan.getLine(0);
     * console.log(line.roadName, line.distance, line.points.length);
     * ```
     */
    getLine(i: number): TruckRouteLine;
    /**
     * 返回方案总距离。`format` 为 `false` 时返回数值（米），否则返回带单位的字符串
     * @example
     * ```typescript
     * plan.getDistance(false); // 42500
     * plan.getDistance();      // '42.5公里'
     * ```
     */
    getDistance(format?: boolean): string | number;
    /**
     * 返回方案总耗时。`format` 为 `false` 时返回数值（秒），否则返回带单位的字符串
     */
    getDuration(format?: boolean): string | number;
    /**
     * 返回方案过路费，单位：元
     */
    getToll(): number;
    /**
     * 返回方案的收费路段距离，单位：米
     */
    getTollDistance(): number;
    /**
     * 返回方案的油费，单位：元
     */
    getOilCost(): number;
    /**
     * 返回方案的文字描述。`includeHtml` 为 `false` 时返回去掉 HTML 标签的纯文本
     * @example
     * ```typescript
     * document.getElementById('panel').textContent = plan.getDescription(false);
     * ```
     */
    getDescription(includeHtml?: boolean): string;
    /**
     * 返回方案中索引指定的路段，与 {@link TruckRoutePlan#getLine} 返回同一对象
     * @param i 路段序号
     */
    getRoute(i: number): TruckRouteLine;
    /**
     * 返回方案包含的路段个数，与 {@link TruckRoutePlan#getNumLines} 等价
     */
    getNumRoutes(): number;
    /**
     * 返回方案中索引指定的路段，与 {@link TruckRoutePlan#getLine} 返回同一对象
     * @param i 路段序号
     */
    getTotal(i: number): TruckRouteLine;
    /**
     * 按路况把整条路线拆成 GeoJSON MultiLineString，用于自行绘制 {@link LineLayer}。
     * 返回的 `trafficConditionData` 与 MultiLineString 的 `coordinates` 按下标一一对应
     * @example
     * ```typescript
     * const { geoMultiLineData, trafficConditionData } = plan.plan2LineLayerData();
     * const layer = new BMap.LineLayer({ enablePicked: true });
     * map.addLayer(layer);
     * layer.setData(geoMultiLineData);
     * console.log(trafficConditionData[0].status, trafficConditionData[0].distance);
     * ```
     */
    plan2LineLayerData(): {
      /** GeoJSON FeatureCollection，只含一个 MultiLineString 要素，坐标为 `[lng, lat]` */
      geoMultiLineData: object;
      /** 与 MultiLineString 各子线段同下标的路况信息 */
      trafficConditionData: Array<{
        /** 路况等级，取值同 {@link TruckTrafficCondition#status} */
        status: number;
        /** 该子线段长度，单位：米 */
        distance: number;
        /** 该子线段坐标，元素为 `[lng, lat]` */
        coordinates: number[][];
      }>;
    };
    /**
     * 按分段（途经点切分）返回坐标点串，下标即 {@link TruckRouteLine#legIndex}，
     * 可直接交给多条 {@link Polyline} 渲染
     */
    plan2MultiPolyline(): Point[][];
    /**
     * 把整条路线的坐标点串拼成一个数组，可直接交给一条 {@link Polyline} 渲染
     * @example
     * ```typescript
     * map.addOverlay(new BMap.Polyline(plan.plan2Polyline(), { strokeWeight: 8 }));
     * ```
     */
    plan2Polyline(): Point[];
  }
}

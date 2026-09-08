declare namespace BMap {
  /**
   * 本地城市服务类，根据用户 IP 自动定位到所在城市，返回城市名称及中心坐标。
   * 适用于地图应用中根据用户所在城市初始化地图中心点、展示默认城市等场景。
   */
  class LocalCity {
    /**
     * 创建一个获取本地城市位置的实例
     * @example
     * ```typescript
     * const localCity = new BMap.LocalCity({ renderOptions: { map } });
     * localCity.get((result) => {
     *   console.log('当前城市：', result.name);
     * });
     * ```
     */
    constructor(opts?: LocalCityOptions);
    /**
     * 当获取城市信息后，回调函数会被调用，其参数为类型为LocalCityResult对象
     * @example
     * ```typescript
     * localCity.get((result) => {
     *   console.log('城市：', result.name, '中心点：', result.center);
     * });
     * ```
     */
    get(callback: (result: LocalCityResult) => void): void;
  }
}

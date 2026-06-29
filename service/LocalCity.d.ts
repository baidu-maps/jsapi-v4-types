declare namespace BMap {
  /**
   * 此类用于获取用户所在的城市位置信息。(根据用户IP自动定位到城市)
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
    constructor(opts: LocalCityOptions);
    /**
     * 当获取城市信息后，回调函数会被调用，其参数为类型为LocalCityResult对象
     * @example
     * ```typescript
     * localCity.get((result) => {
     *   console.log('城市：', result.name, '中心点：', result.center);
     * });
     * ```
     */
    get(callback: Function): void;
  }
}

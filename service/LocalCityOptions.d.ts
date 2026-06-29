declare namespace BMap {
  /**
   * 此类表示LocalCity的可选参数。它没有构造函数，但可通过对象字面量表示。
   */
  interface LocalCityOptions {
    /**
     * 结果呈现设置，当给定map参数时，改地图将自动将视野定位到当前城市
     */
    renderOptions?: RenderOptions;
  }
}

declare namespace BMap {
  /**
   * 此类代表视野，不可实例化，通过对象字面量形式表示。
   * @category 配置项
   */
  interface Viewport {
    /**
     * 视野中心点
     */
    center?: Point;
    /**
     * 视野级别
     */
    zoom?: number;
  }
}

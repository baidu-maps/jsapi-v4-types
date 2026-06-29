declare namespace BMap {
  /**
   * 此类是负责进行地图定位的控件，使用 HTML5 浏览器定位功能。
   */
  class GeolocationControl {
    /**
     * 创建地图定位控件
     * @param opts 可选参数
     * @example
     * ```typescript
     * const geolocationControl = new BMap.GeolocationControl({
     *   anchor: BMAP_ANCHOR_BOTTOM_LEFT,
     *   showAddressBar: true,
     *   enableAutoLocation: false,
     * });
     * map.addControl(geolocationControl);
     * ```
     */
    constructor(opts?: GeolocationControlOptions);
    /**
     * 开始进行定位
     * @example
     * ```typescript
     * geolocationControl.location();
     * ```
     */
    location(): void;
    /**
     * 返回当前的定位地址信息，若尚未定位则返回 null
     */
    getAddressComponent(): AddressComponent;
    /**
     * 开始执行定位
     * @example
     * ```typescript
     * geolocationControl.startLocation();
     * ```
     */
    startLocation(): void;
    /**
     * 停止跟踪用户的位置
     * @example
     * ```typescript
     * geolocationControl.stopLocationTrace();
     * ```
     */
    stopLocationTrace(): void;
    /**
     * 设置定位控件的配置参数
     * @param options 配置参数
     */
    setOptions(options: GeolocationControlOptions): void;
  }
}

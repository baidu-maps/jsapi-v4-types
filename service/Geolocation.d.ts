declare namespace BMap {
  /**
   * 定位服务类，用于获取用户当前的地理位置。会首先调用浏览器自带的定位接口，如果失败或不支持则调用高精IP定位（需要开通权限，否则调用普通定位）接口，如果用户拒绝授权定位，则无法返回任何定位结果。
   * 适用于地图应用中的"回到我的位置"、基于用户位置的周边检索等场景。
   */
  class Geolocation {
    /**
     * 创建Geolocation对象实例
     * @param options 可选定位配置，同 PositionOptions
     */
    constructor(options?: PositionOptions);
    /**
     * 返回用户当前位置。定位完成时（包括成功、失败、超时等情况），回调参数为GeolocationResult对象，否则为null
     * @example
     * ```typescript
     * const geolocation = new BMap.Geolocation();
     * geolocation.getCurrentPosition((result) => {
     *   if (geolocation.getStatus() === 0) {
     *     map.panTo(result.point);
     *   }
     * }, { enableHighAccuracy: true });
     * ```
     */
    getCurrentPosition(callback: (result: GeolocationResult | null) => void, opts?: PositionOptions): void;
    /**
     * 定位完成后的状态码。分为BMAP_STATUS_SUCCESS，BMAP_STATUS_UNKNOWN_LOCATION，BMAP_STATUS_PERMISSION_DENIED，BMAP_STATUS_TIMEOUT
     */
    getStatus(): ServiceStatus;
    /**
     * 开启SDK辅助定位，仅当使用环境为移动web混合开发，且开启了定位sdk辅助定位功能后生效
     */
    enableSDKLocation(): void;
    /**
     * 关闭SDK辅助定位
     */
    disableSDKLocation(): void;
  }
}

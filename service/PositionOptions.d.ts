declare namespace BMap {
  /**
   * 此类为getCurrentPosition的可选参数，不能实例化。
   */
  interface PositionOptions {
    /**
     * 是否要求浏览器获取最佳效果，同浏览器定位接口参数。默认为false
     */
    enableHighAccuracy?: boolean;
    /**
     * 超时事件，单位为毫秒。默认为10秒
     */
    timeout?: number;
    /**
     * 允许返回指定事件内的缓存结果，单位为毫秒。如果为0，则每次请求都获取最新的定位结果。默认为10分钟
     */
    maximumAge?: number;
    /**
     * 是否开启SDK辅助定位
     */
    SDKLocation?: boolean;
  }
}

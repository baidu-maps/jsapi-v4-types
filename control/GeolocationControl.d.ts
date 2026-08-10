declare namespace BMap {
  /** 定位成功事件 */
  interface GeolocationControlSuccessEvent {
    type: string;
    target: GeolocationControl;
    point: Point;
    addressComponent: AddressComponent | null;
  }

  /** 定位失败事件 */
  interface GeolocationControlErrorEvent {
    type: string;
    target: GeolocationControl;
    code: number;
  }

  /**
   * GeolocationControl 支持的事件名与事件对象类型映射
   */
  interface GeolocationControlEventMap {
    /** 定位成功后触发 */
    locationSuccess: GeolocationControlSuccessEvent;
    /** 定位失败后触发 */
    locationError: GeolocationControlErrorEvent;
  }

  /**
   * 此类表示使用浏览器定位功能的地图定位控件。
   * 控件包含 32px x 32px 的定位按钮和位于按钮右侧、高度为 32px 的定位结果地址区域
   * `anchor` 属性表示包含定位结果地址文字在内的整体停靠位置；停靠在右侧时，`offset` 从定位结果区域的右侧计算。
   */
  class GeolocationControl extends Control {
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
    getAddressComponent(): AddressComponent | null;
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
    /**
     * 添加事件监听。
     * @param event 事件名称
     * @param handler 事件处理函数
     */
    addEventListener<K extends keyof GeolocationControlEventMap>(event: K, handler: (e: GeolocationControlEventMap[K]) => void): void;
    /**
     * 移除事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     */
    removeEventListener<K extends keyof GeolocationControlEventMap>(event: K, handler: (e: GeolocationControlEventMap[K]) => void): void;
  }
}

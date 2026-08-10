declare namespace BMap {
  /**
   * 此类表示一条版权信息，可作为 {@link CopyrightControl.addCopyright} 方法的参数。
   */
  class Copyright {
    /**
     * 创建版权信息
     * @param id 唯一标识符
     * @param bounds 适用的地理区域
     * @param content 显示内容
     */
    constructor(id: number, bounds: Bounds, content: string);
    /**
     * 创建带地图类型限制的版权信息
     * @param id 唯一标识符
     * @param bounds 适用的地理区域
     * @param content 显示内容
     * @param mapType 地图类型标识
     */
    constructor(id: number, bounds: Bounds, content: string, mapType: string);
    /**
     * 该版权信息的唯一标识符
     */
    id: number;
    /**
     * 该版权的文本信息，用于显示在地图上，支持HTML内容
     */
    content?: string;
    /**
     * 该版权信息所适用的地理区域
     */
    bounds?: Bounds | null;
    /**
     * 显示该版权信息的最小地图级别
     * 传给 {@link CopyrightControl.addCopyright} 时，未设置按 0 处理
     */
    minZoom?: number;
    /**
     * 显示该版权信息的地图类型标识
     * 传给 {@link CopyrightControl.addCopyright} 时，未设置按空字符串处理
     */
    mapType?: string;
  }
}

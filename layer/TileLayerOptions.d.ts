declare namespace BMap {
  /**
   * TileLayer 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface TileLayerOptions {
    /**
     * 图层使用的图片是否为包含透明信息的PNG
     * @default false
     */
    transparentPng?: boolean;
    /**
     * 图块URL模板，支持 `{X}`、`{Y}`、`{Z}` 占位符，分别表示横向坐标、纵向坐标和缩放级别。
     * 若未提供此参数，需实现 TileLayer.getTilesUrl() 方法
     * @example 'https://yourhost/tile?x={X}&y={Y}&z={Z}.png'
     */
    tileUrlTemplate?: string;
    /**
     * 图层的层叠顺序
     * @default 1
     */
    zIndex?: number;
    /**
     * 图层掩膜边界数据
     */
    boundary?: string | string[];
    /**
     * 图层透明度，取值范围0 - 1
     * @default 1
     */
    opacity?: number;
    /**
     * 瓦片显示区域模式，'inside' 仅显示掩膜内部，'outside' 仅显示掩膜外部
     */
    showRegion?: string;
    /**
     * 瓦片加载失败时是否自动重试
     * @default false
     */
    retry?: boolean;
    /**
     * 重试间隔时间，单位毫秒
     * @default 600
     */
    retryTime?: number;
    /**
     * 瓦片缓存数量，移动端默认128，桌面端默认256
     */
    cacheSize?: number;
  }
}

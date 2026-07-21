declare namespace BMap {
  /**
   * RasterTileLayer构造函数配置参数
     */
  interface RasterTileLayerOptions {
    /**
     * 瓦片地址模板或回调函数（必填）。
     * 模板支持占位符：{x}列号、{y}行号、{z}级别、{s}子域名、{-y}或{reverseY}为TMS翻转的y值。
     * 回调函数签名：(x: number, y: number, z: number) => string
     * @example 模板形式
     * ```
     * 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
     * ```
     * @example 回调形式
     * ```
     * function(x, y, z) { return 'https://yourhost/' + z + '/' + x + '/' + y + '.png'; }
     * ```
     */
    url: string | ((x: number, y: number, z: number) => string);
    /**
     * 子域名数组，配合URL模板中的{s}占位符轮询使用
     * @example ['a', 'b', 'c']
     */
    subdomains?: string[];
    /**
     * 投影坐标系，仅支持 'EPSG:3857' 或 'BD09MC'
     * @default 'EPSG:3857'
     */
    projection?: string;
    /**
     * 加载范围限定，格式为[minX, minY, maxX, maxY]，范围外的瓦片不请求
     */
    bounds?: number[];
    /**
     * bounds是否为WGS84经纬度坐标。设置为true时bounds值应为经纬度
     * @default false
     */
    boundsInWGS84?: boolean;
    /** 设置图层显示的最小缩放等级 */
    minZoom?: number;
    /** 设置图层显示的最大缩放等级 */
    maxZoom?: number;
    /**
     * 数据级与地图级的差值
     * @default 0
     */
    spanLevel?: number;
    /**
     * 图层透明度，取值范围0 - 1
     * @default 1
     */
    opacity?: number;
    /** 图层层叠顺序 */
    zIndex?: number;
    /**
     * 缩放图层时，是否使用跨级别瓦片复用（防止缩放过渡时闪白）
     * @default true
     */
    useThumbData?: boolean;
    /** 设置图层掩膜，只在掩膜范围内显示瓦片 */
    boundary?: string | string[];
    /**
     * 图层显示区域模式，配合boundary使用
     * @default 'inside'
     */
    showRegion?: 'inside' | 'outside';
    /**
     * 瓦片高度
     * @default 0
     */
    height?: number;
    /**
     * 瓦片加载失败时是否重试
     * @default false
     */
    retry?: boolean;
    /**
     * 重试间隔时间（毫秒）
     * @default 600
     */
    retryTime?: number;
    /**
     * 瓦片缓存数量
     * @default 256
     */
    cacheSize?: number;
    /**
     * 自定义瓦片加载函数
     */
    tileLoadFunction?: (tile: HTMLImageElement, url: string) => void;
  }
}

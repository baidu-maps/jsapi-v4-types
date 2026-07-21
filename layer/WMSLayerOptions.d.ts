declare namespace BMap {
  /**
   * WMSLayer构造函数配置参数
     */
  interface WMSLayerOptions {
    /**
     * WMS服务地址
     */
    url?: string;
    /**
     * WMS请求参数。
     * LAYERS 为必填项，指定要请求的图层名（多图层用逗号分隔）。
     * 可选参数如 VERSION（默认'1.3.0'）、FORMAT（默认'image/png'）、STYLES、TRANSPARENT 等。
     * 内部会自动补充 SERVICE=WMS、REQUEST=GetMap 等标准参数，用户参数优先级更高。
     * BBOX/WIDTH/HEIGHT 由内部驱动，无需手动设置。
     */
    params?: Record<string, string>;
    /**
     * 投影坐标系，目前仅支持 'EPSG:3857'
     * @default 'EPSG:3857'
     */
    projection?: string;
    /**
     * 瓦片像素尺寸，对应 WMS 请求中的 WIDTH/HEIGHT
     * @default 256
     */
    tileSize?: number;
    /**
     * 图层透明度，取值范围0 - 1
     * @default 1
     */
    opacity?: number;
    /** 设置图层显示的最小缩放等级 */
    minZoom?: number;
    /** 设置图层显示的最大缩放等级 */
    maxZoom?: number;
    /** 图层层叠顺序 */
    zIndex?: number;
    /** 设置图层加载数据的四至范围，输入的范围数值为EPSG:3857坐标[minX,minY,maxX,maxY] */
    extent?: number[];
    /**
     * 标记参数extent数组数据是否为EPSG:4326坐标
     * @default false
     */
    extentCRSIsWGS84?: boolean;
    /**
     * 缩放图层时，是否使用跨图层的瓦片进行平滑切换
     * @default false
     */
    useThumbData?: boolean;
    /**
     * 跨层缩略瓦片的跨度等级
     */
    spanLevel?: number;
    /**
     * 是否进行坐标重投影
     * @default false
     */
    reproject?: boolean;
    /**
     * 重投影源坐标系
     */
    reprojectSourceCRS?: string;
    /**
     * 是否使用PNG8格式
     * @default false
     */
    png8?: boolean;
    /**
     * 瓦片高度
     */
    height?: number;
    /**
     * 瓦片加载失败时是否重试
     * @default false
     */
    retry?: boolean;
    /**
     * 重试次数
     */
    retryTime?: number;
    /**
     * 数据类型
     */
    dataType?: string;
    /**
     * 瓦片缓存数量
     */
    cacheSize?: number;
    /** 设置图层掩膜。可通过BMapGL.Boundary()获取行政区域的坐标数据 */
    boundary?: string[];
    /**
     * 向上查找缩略瓦片的层数
     */
    thumbParentDepth?: number;
    /**
     * 向下查找缩略瓦片的层数
     */
    thumbChildDepth?: number;
    /**
     * 自定义瓦片加载函数
     */
    tileLoadFunction?: (tile: HTMLImageElement, url: string) => void;
  }
}

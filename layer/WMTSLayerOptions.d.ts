declare namespace BMap {
  /**
   * WMTSLayer构造函数配置参数
     */
  interface WMTSLayerOptions {
    /**
     * WMTS服务地址
     */
    url?: string;
    /**
     * WMTS请求参数，如Layer、Style、TileMatrixSet等。
     * 默认包含：Service=WMTS, Request=GetTile, Version=1.0.0, Format=image/png, TileMatrixSet=GoogleMapsCompatible。
     * 用户参数优先级高于默认值。
     * 瓦片坐标参数TileMatrix/TileCol/TileRow可通过此参数自定义格式（如 'EPSG:3857:[z]'），默认使用 [z]/[x]/[y] 占位符。
     */
    params?: Record<string, string>;
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
     * 标记参数extent数组数据是否为EPSG:4326坐标。如果设置为true，参数extent数值需要是EPSG:4326坐标
     * @default false
     */
    extentCRSIsWGS84?: boolean;
    /**
     * 坐标系转换配置，source 为瓦片源坐标系，target 为目标坐标系
     */
    transform?: { source?: string; target?: string };
    /**
     * 通过输入的网格x、y、z参数计算[x]具体返回值
     */
    xTemplate?: (x: number, y: number, z: number) => number | string;
    /**
     * 通过输入的网格x、y、z参数计算[y]具体返回值
     */
    yTemplate?: (x: number, y: number, z: number) => number | string;
    /**
     * 通过输入的网格x、y、z参数计算[z]具体返回值
     */
    zTemplate?: (x: number, y: number, z: number) => number | string;
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

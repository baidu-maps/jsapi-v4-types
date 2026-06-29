declare namespace BMap {
  /**
   * 第三方标准瓦片图层类，用于加载 XYZ/WMTS/WMS/TMS 等标准瓦片服务。
   * 与 TileLayer 的区别：
   * - TileLayer 适用于自有百度坐标系(BD09MC)瓦片，通过 getTilesUrl 或 tileUrlTemplate 指定瓦片地址
   * - XYZLayer 专为第三方标准瓦片服务设计，内置坐标转换（默认将 EPSG:3857 转为 BD09MC），支持 minZoom/maxZoom/extent 等范围控制
   *
   * 使用场景：加载天地图、OSM、Mapbox 等第三方瓦片服务时使用 XYZLayer；加载自有百度坐标系瓦片时使用 TileLayer
     */
  class XYZLayer {
    /**
     * 创建第三方标准瓦片图层
     * @param options 图层配置选项
     * @example 加载OpenStreetMap瓦片
     * ```typescript
     * const osmLayer = new BMap.XYZLayer({
     *   tileUrlTemplate: 'https://tile.openstreetmap.org/[z]/[x]/[y].png',
     *   maxZoom: 19,
     * });
     * map.addLayer(osmLayer);
     * ```
     * @example 加载Stadia Maps水彩风格瓦片
     * ```typescript
     * const watercolorLayer = new BMap.XYZLayer({
     *   tileUrlTemplate: 'https://tiles.stadiamaps.com/tiles/stamen_watercolor/[z]/[x]/[y].jpg',
     *   maxZoom: 16,
     * });
     * map.addLayer(watercolorLayer);
     * ```
     * @example 加载天地图影像瓦片（需替换为自己的tk）
     * ```typescript
     * const tdtLayer = new BMap.XYZLayer({
     *   tileUrlTemplate: 'https://t{0,1,2,3,4,5,6,7}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL=[x]&TILEROW=[y]&TILEMATRIX=[z]&tk=你的天地图key',
     *   minZoom: 1,
     *   maxZoom: 18,
     * });
     * map.addLayer(tdtLayer);
     * ```
     * @example 加载TMS服务（y轴翻转）
     * ```typescript
     * const tmsLayer = new BMap.XYZLayer({
     *   tileUrlTemplate: 'https://yourhost/tms/[z]/[x]/[y].png',
     *   tms: true,
     * });
     * map.addLayer(tmsLayer);
     * ```
     */
    constructor(options: XYZLayerOptions);
    /**
     * 设置图层的叠加顺序
     * @param zIndex 层级值
     * @example
     * ```typescript
     * xyzLayer.setZIndex(5);
     * ```
     */
    setZIndex(zIndex: number): void;
    /**
     * 设置图层掩膜，在掩膜区域内显示瓦片
     * @param boundary 掩膜边界坐标字符串或字符串数组
     * @example
     * ```typescript
     * xyzLayer.addBoundary('北京市');
     * ```
     */
    addBoundary(boundary: string | string[]): void;
    /**
     * 清空图层掩膜
     */
    clearBoundary(): void;
    /**
     * 隐藏图层
     * @example
     * ```typescript
     * xyzLayer.hide();
     * ```
     */
    hide(): void;
    /**
     * 显示图层
     * @example
     * ```typescript
     * xyzLayer.show();
     * ```
     */
    show(): void;
    /**
     * 返回图层是否可见
     */
    isVisible(): boolean;
    /**
     * 清除瓦片缓存并强制重新加载
     * @example
     * ```typescript
     * xyzLayer.clearCache();
     * ```
     */
    clearCache(): void;
  }

  /**
   * XYZLayer构造函数配置参数
     */
  interface XYZLayerOptions {
    /**
     * 图像数据请求地址。可通过{0,1,2}标记实现多请求地址的配置；可通过[z]，[x]，[y]，[b]引用默认的*Template。
     * WMTS/TMS/自定义栅格图层服务默认使用[z]，[x]，[y]，瓦片大小为256*256。WMS服务默认使用[b]。
     */
    tileUrlTemplate?: string;
    /**
     * 通过输入的网格x、y、z参数计算[x]具体返回值。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
     */
    xTemplate?: (x: number, y: number, z: number) => number | string;
    /**
     * 通过输入的网格x、y、z参数计算[y]具体返回值。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
     */
    yTemplate?: (x: number, y: number, z: number) => number | string;
    /**
     * 通过输入的网格x、y、z参数计算[z]具体返回值。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
     */
    zTemplate?: (x: number, y: number, z: number) => number | string;
    /**
     * 通过输入的网格x、y、z参数计算[b]具体返回值，返回值默认为四至坐标拼接成的字符串：'minX,minY,maxX,maxY'。
     * x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
     */
    bTemplate?: (x: number, y: number, z: number) => string;
    /** 设置图层显示的最小缩放等级 */
    minZoom?: number;
    /** 设置图层显示的最大缩放等级 */
    maxZoom?: number;
    /** 设置图层加载数据的四至范围，输入的范围数值为EPSG:3857坐标[minX,minY,maxX,maxY] */
    extent?: number[];
    /**
     * 标记参数extent数组数据是否为EPSG:4326坐标。如果设置为true，参数extent数值需要是EPSG:4326坐标
     * @default false
     */
    extentCRSIsWGS84?: boolean;
    /** 设置图层掩膜。可通过BMapGL.Boundary()获取行政区域的坐标数据 */
    boundary?: string[];
    /**
     * 缩放图层时，是否使用跨图层的瓦片进行平滑切换
     * @default false
     */
    useThumbData?: boolean;
    /**
     * tileUrlTemplate中[y]是否为tms请求服务形式。如果是则设置为true
     * @default false
     */
    tms?: boolean;
    /**
     * 图层透明度，取值范围0 - 1
     * @default 1
     */
    opacity?: number;
    /**
     * 图层层叠顺序
     */
    zIndex?: number;
  }
}

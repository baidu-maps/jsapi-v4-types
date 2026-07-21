declare namespace BMap {
  /**
   * 此类用来展示某位置的全景视图，可以单独放置在一个div容器中，也可以放在Map类的容器中。
   * 
   */
  class Panorama {
    /**
     * 在给定的结点中创建全景
     * @param container 容器 DOM 节点的 id 或 HTMLElement
     * @param opts 可选配置项
     */
    constructor(container: string | HTMLElement, opts?: PanoramaOptions);
    /**
     * 获取全景中道路指示信息
     */
    getLinks(): PanoramaLink[];
    /**
     * 获取当前全景的 id
     */
    getId(): string;
    /**
     * 获取当前全景的位置（经纬度）
     */
    getPosition(): Point;
    /**
     * 获取当前全景的视角
     */
    getPov(): PanoramaPov;
    /**
     * 获取当前全景的缩放级别
     */
    getZoom(): number;
    /**
     * 设置全景的 id
     * @param id 全景 id
     */
    setId(id: string): void;
    /**
     * 设置全景的位置
     * @param position 经纬度坐标
     */
    setPosition(position: Point): void;
    /**
     * 设置全景的视角
     * @param pov 视角参数
     */
    setPov(pov: PanoramaPov): void;
    /**
     * 设置全景的缩放级别
     * @param zoom 级别
     */
    setZoom(zoom: number): void;
    /**
     * 开启鼠标滚轮缩放功能（仅 PC 端有效）
     */
    enableScrollWheelZoom(): void;
    /**
     * 关闭鼠标滚轮缩放功能
     */
    disableScrollWheelZoom(): void;
    /**
     * 显示全景
     */
    show(): void;
    /**
     * 隐藏全景
     */
    hide(): void;
    /**
     * 在全景场景内添加覆盖物
     * @param overlay 覆盖物（PanoramaLabel）
     */
    addOverlay(overlay: PanoramaLabel): void;
    /**
     * 删除全景内的覆盖物
     * @param overlay 覆盖物（PanoramaLabel）
     */
    removeOverlay(overlay: PanoramaLabel): void;
    /**
     * 获取全景的类型（室外景返回 BMAP_PANORAMA_STREET_SCENE，室内景返回 BMAP_PANORAMA_INDOOR_SCENE）
     */
    getSceneType(): number;
    /**
     * 设置全景可配置参数
     * @param opts 配置项
     */
    setOptions(opts: PanoramaOptions): void;
    /**
     * 设置全景外景场景点内可见的 POI 类型，默认为隐藏所有类型
     * @param poiType POI 类型常量
     */
    setPanoramaPOIType(poiType: number): void;
  }
}

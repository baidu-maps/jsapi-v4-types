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
     * @param options 切换配置项
     */
    setId(id: string, options?: { animation?: boolean; fisheye?: boolean; animationType?: string; pov?: Partial<PanoramaPov> }): void;
    /**
     * 设置全景的 id 和场景类型
     * @param id 全景 id
     * @param type 场景类型
     * @param options 切换配置项
     */
    setId(id: string, type: PanoramaSceneType, options?: { animation?: boolean; fisheye?: boolean; animationType?: string; pov?: Partial<PanoramaPov> }): void;
    /**
     * 设置全景的位置
     * @param position 经纬度坐标
     */
    setPosition(position: Point): void;
    /**
     * 设置全景的视角；可只设置 heading，设置 pitch 时也必须提供 heading
     * @param pov 视角参数
     * @param options 动画配置项
     */
    setPov(pov: { heading: number; pitch?: number }, options?: { animation?: boolean }): void;
    /**
     * 设置全景的缩放级别
     * @param zoom 级别
     * @param options 缩放配置项
     */
    setZoom(zoom: number, options?: { noAnimation?: boolean }): void;
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
     * 返回全景当前是否可见
     */
    getVisible(): boolean;
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
    getSceneType(): PanoramaSceneType;
    /**
     * 设置全景可配置参数
     * @param opts 配置项
     */
    setOptions(opts: PanoramaOptions): void;
    /**
     * 设置全景外景场景点内可见的 POI 类型，默认为隐藏所有类型
     * @param poiType POI 类型常量
     */
    setPanoramaPOIType(poiType: PanoramaPOIType): void;
    /**
     * 将当前全景画面导出为 Data URL；当前渲染器不支持截图时返回 undefined
     * @param options 图片质量和 MIME 类型
     */
    capture(options?: { quality?: number; type?: string }): string | undefined;
    /**
     * 清除全部全景覆盖物
     */
    clearOverlays(): void;
    /**
     * 销毁全景实例
     */
    destroy(): void;
    /**
     * 注册事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     */
    addEventListener<K extends keyof PanoramaEventMap>(event: K, handler: (e: PanoramaEventMap[K]) => void): void;
    /**
     * 注册尚未收录到事件映射中的事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     */
    addEventListener(event: string, handler: Function): void;
    /**
     * 移除事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     */
    removeEventListener<K extends keyof PanoramaEventMap>(event: K, handler: (e: PanoramaEventMap[K]) => void): void;
    /**
     * 移除尚未收录到事件映射中的事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     */
    removeEventListener(event: string, handler: Function): void;
  }
}

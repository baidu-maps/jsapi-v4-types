declare namespace BMap {
  /**
   * 该类提供在全景中添加标签功能。
   * 
   */
  class PanoramaLabel {
    /**
     * 在全景中创建一个标签
     * @param content 标签的文本内容
     * @param opts 包含标签经纬度坐标和高度的配置项
     */
    constructor(content: string, opts: PanoramaLabelOptions);
    /**
     * 设置标签的经纬度坐标
     * @param position 经纬度坐标
     */
    setPosition(position: Point): void;
    /**
     * 获取标签的经纬度坐标
     */
    getPosition(): Point;
    /**
     * 获取标签与全景中心点的视角
     */
    getPov(): PanoramaPov;
    /**
     * 设置标签显示内容
     * @param content 文本内容
     */
    setContent(content: string): void;
    /**
     * 获取标签的显示内容
     */
    getContent(): string;
    /**
     * 设置标签可见
     */
    show(): void;
    /**
     * 设置标签不可见
     */
    hide(): void;
    /**
     * 设置标签距离地面的高度
     * @param altitude 高度（米）
     */
    setAltitude(altitude: number): void;
    /**
     * 获取标签距离地面的高度
     */
    getAltitude(): number;
    /**
     * 注册事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     */
    addEventListener<K extends keyof PanoramaLabelEventMap>(event: K, handler: (e: PanoramaLabelEventMap[K]) => void): void;
    /**
     * 移除事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     */
    removeEventListener<K extends keyof PanoramaLabelEventMap>(event: K, handler: (e: PanoramaLabelEventMap[K]) => void): void;
  }
}

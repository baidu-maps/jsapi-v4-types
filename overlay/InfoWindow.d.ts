declare namespace BMap {
  /**
   * 此类表示地图上包含信息的弹出窗口。
   */
  class InfoWindow {
    /**
     * 创建信息窗口实例
     * @param content 窗口内容，支持HTML字符串或DOM节点
     * @param opts 可选参数
     * @example
     * ```typescript
     * const infoWindow = new BMap.InfoWindow('<p>北京天安门</p>', {
     *   title: '地标信息',
     *   width: 300,
     *   height: 100,
     * });
     * map.openInfoWindow(infoWindow, new BMap.Point(116.404, 39.915));
     * ```
     */
    constructor(content: string | HTMLElement, opts?: InfoWindowOptions);
    /**
     * 设置信息窗口宽度
     * @param width 宽度，单位像素，取值范围 220 - 730，0 表示自适应
     * @example
     * ```typescript
     * infoWindow.setWidth(400);
     * ```
     */
    setWidth(width: number): void;
    /**
     * 设置信息窗口高度
     * @param height 高度，单位像素，取值范围 60 - 650，0 表示自适应
     * @example
     * ```typescript
     * infoWindow.setHeight(200);
     * ```
     */
    setHeight(height: number): void;
    /**
     * 重绘信息窗口，当窗口内容发生变化时调用
     */
    redraw(): void;
    /**
     * 设置信息窗口标题，支持HTML内容
     * @param title 标题内容
     * @example
     * ```typescript
     * infoWindow.setTitle('新标题');
     * ```
     */
    setTitle(title: string | HTMLElement): void;
    /**
     * 返回信息窗口标题
     */
    getTitle(): string | HTMLElement;
    /**
     * 设置信息窗口内容，支持HTML内容
     * @param content 窗口内容
     * @example
     * ```typescript
     * infoWindow.setContent('<p>更新后的内容</p>');
     * ```
     */
    setContent(content: string | HTMLElement): void;
    /**
     * 返回信息窗口内容
     */
    getContent(): string | HTMLElement;
    /**
     * 返回信息窗口当前的地理坐标
     */
    getPosition(): Point;
    /**
     * 启用窗口最大化功能，需先通过 setMaxContent() 设置最大化内容
     */
    enableMaximize(): void;
    /**
     * 禁用窗口最大化功能
     */
    disableMaximize(): void;
    /**
     * 返回信息窗口的打开状态
     */
    isOpen(): boolean;
    /**
     * 设置信息窗口最大化时显示的内容，支持HTML内容
     * @param content 最大化内容
     * @example
     * ```typescript
     * infoWindow.setMaxContent('<div>详细内容区域</div>');
     * ```
     */
    setMaxContent(content: string): void;
    /**
     * 最大化信息窗口
     */
    maximize(): void;
    /**
     * 还原信息窗口到正常大小
     */
    restore(): void;
    /**
     * 开启打开信息窗口时地图自动平移
     */
    enableAutoPan(): void;
    /**
     * 关闭打开信息窗口时地图自动平移
     */
    disableAutoPan(): void;
    /**
     * 开启点击地图时关闭信息窗口
     */
    enableCloseOnClick(): void;
    /**
     * 关闭点击地图时关闭信息窗口
     */
    disableCloseOnClick(): void;
    /**
     * 添加事件监听函数
     * @param event 事件名称
     * @param handler 事件处理函数
     * @example
     * ```typescript
     * infoWindow.addEventListener('open', (e) => {
     *   console.log('infoWindow opened', e);
     * });
     * ```
     */
    addEventListener(event: string, handler: Function): void;
    /**
     * 移除事件监听函数
     * @param event 事件名称
     * @param handler 事件处理函数
     * @example
     * ```typescript
     * const handler = (e: any) => { console.log(e); };
     * infoWindow.addEventListener('close', handler);
     * infoWindow.removeEventListener('close', handler);
     * ```
     */
    removeEventListener(event: string, handler: Function): void;
  }
}

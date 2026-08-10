declare namespace BMap {
  /**
   * OverviewMapControl 支持的事件名与事件对象类型映射
   */
  interface OverviewMapControlEventMap {
    /** 缩略地图展开/收起状态切换完成后触发 */
    viewchanged: { type: string; target: OverviewMapControl; isOpen: boolean };
    /** 缩略地图展开/收起动画过程中触发 */
    viewchanging: { type: string; target: OverviewMapControl };
    /** 缩略地图尺寸发生变化时触发 */
    resize: { type: string; target: OverviewMapControl };
  }

  /**
   * 此类表示缩略地图控件（鹰眼控件）。
   * `anchor` 属性表示控件的整体停靠位置。
   * 控件的尺寸以 `size` 属性为基准。
   * 默认尺寸为 150px x 150px。
   * 控件关闭时按钮尺寸为 13px x 13px。
   */
  class OverviewMapControl extends Control {
    /**
     * 创建缩略地图控件实例
     * @param opts 可选参数
     * @example
     * ```typescript
     * const overviewMapControl = new BMap.OverviewMapControl({
     *   anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
     *   size: new BMap.Size(150, 150),
     *   isOpen: true,
     * });
     * map.addControl(overviewMapControl);
     * ```
     */
    constructor(opts?: OverviewMapControlOptions);
    /**
     * 返回缩略地图控件的开合状态
     */
    isOpen(): boolean;
    /**
     * 切换缩略地图控件的开合状态
     * @example
     * ```typescript
     * overviewMapControl.changeView();
     * ```
     */
    changeView(): void;
    /**
     * 设置缩略地图的大小
     * @param size 尺寸
     * @example
     * ```typescript
     * overviewMapControl.setSize(new BMap.Size(200, 200));
     * ```
     */
    setSize(size: Size): void;
    /**
     * 返回缩略地图的大小
     */
    getSize(): Size;
    /**
     * 添加事件监听。
     * @param event 事件名称
     * @param handler 事件处理函数
     */
    addEventListener<K extends keyof OverviewMapControlEventMap>(event: K, handler: (e: OverviewMapControlEventMap[K]) => void): void;
    /**
     * 移除事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     */
    removeEventListener<K extends keyof OverviewMapControlEventMap>(event: K, handler: (e: OverviewMapControlEventMap[K]) => void): void;
  }
}

declare namespace BMap {
  /**
   * 此类表示缩略地图控件（鹰眼控件）。
   * anchor属性为整体停靠位置。
   * 控件的尺寸以size属性为基准。
   * 默认尺寸为 150px x 150px。
   * 控件关闭时按钮尺寸为 13px x 13px。
   */
  class OverviewMapControl {
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
  }
}

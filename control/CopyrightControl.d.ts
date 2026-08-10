declare namespace BMap {
  /**
   * 此类表示版权控件。
   * 可在地图上添加自定义版权信息。
   * 控件按钮尺寸为content属性的尺寸。
   */
  class CopyrightControl extends Control {
    /**
     * 创建版权控件实例
     * @param opts 可选参数
     * @example
     * ```typescript
     * const copyrightControl = new BMap.CopyrightControl({
     *   anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
     * });
     * map.addControl(copyrightControl);
     * copyrightControl.addCopyright({
     *   id: 1,
     *   content: '版权所有 © 2024',
     * });
     * ```
     */
    constructor(opts?: CopyrightControlOptions);
    /**
     * 添加版权信息
     * @param copyright 版权信息对象
     * @example
     * ```typescript
     * copyrightControl.addCopyright({
     *   id: 1,
     *   content: '<a href="#">自定义版权</a>',
     * });
     * ```
     */
    addCopyright(copyright: Copyright): void;
    /**
     * 移除版权信息
     * @param id 版权信息的唯一标识
     * @example
     * ```typescript
     * copyrightControl.removeCopyright(1);
     * ```
     */
    removeCopyright(id: number): void;
    /**
     * 返回单个版权信息
     * @param id 版权信息的唯一标识
     */
    getCopyright(id: number): Copyright | undefined;
    /**
     * 返回所有版权信息列表
     */
    getCopyrightCollection(): Copyright[];
  }
}

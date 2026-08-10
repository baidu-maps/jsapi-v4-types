declare namespace BMap {
  /**
   * 此类表示用于切换至全景地图的控件。 控件宽度为 49px x 55px
   * `anchor` 属性表示控件的整体停靠位置。
   */
  class PanoramaControl extends Control {
    /**
     * 创建全景控件实例。
     * @param opts 可选参数
     * @example
     * ```typescript
     * const panoramaControl = new BMap.PanoramaControl({
     *   anchor: BMAP_ANCHOR_TOP_RIGHT,
     *   offset: new BMap.Size(10, 10),
     * });
     * map.addControl(panoramaControl);
     * ```
     */
    constructor(opts?: PanoramaControlOptions);
  }
}

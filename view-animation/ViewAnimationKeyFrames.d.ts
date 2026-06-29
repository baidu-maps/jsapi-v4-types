declare namespace BMap {
  /**
   * 地图视角动画的关键帧，API 会补全关键帧之间的过渡动画。
   * @category 配置项
     */
  interface ViewAnimationKeyFrames {
    /**
     * 地图中心点
     * @default 动画开始时地图当前中心点
     */
    center?: Point;
    /**
     * 地图缩放级别
     * @default 动画开始时地图当前缩放级别
     */
    zoom?: number;
    /**
     * 地图倾斜角度（度）
     * @default 动画开始时地图当前倾斜角度
     */
    tilt?: number;
    /**
     * 地图旋转角度（度）
     * @default 动画开始时地图当前旋转角度
     */
    heading?: number;
    /**
     * 当前关键帧在整个动画过程中的时间比例，取值范围 0~1
     */
    percentage?: number;
  }
}

declare namespace BMap {
  /**
   * 地图视角动画类，通过关键帧形式定义动画过程。
     */
  class ViewAnimation {
    /**
     * 创建地图视角动画对象
     * @param keyFrames 关键帧数组，至少两帧
     * @param opts 动画配置项
     * @example
     * ```ts
     * const keyFrames: BMap.ViewAnimationKeyFrames[] = [
     *   { center: new BMap.Point(116.404, 39.915), zoom: 14, tilt: 0, heading: 0, percentage: 0 },
     *   { center: new BMap.Point(116.404, 39.915), zoom: 18, tilt: 60, heading: 180, percentage: 1 },
     * ];
     * const opts: BMap.ViewAnimationOptions = { duration: 5000, delay: 0, interation: 'INFINITE' };
     * const anim = new BMap.ViewAnimation(keyFrames, opts);
     * map.startViewAnimation(anim);
     * ```
     */
    constructor(keyFrames: ViewAnimationKeyFrames[], opts?: ViewAnimationOptions);
  }
}

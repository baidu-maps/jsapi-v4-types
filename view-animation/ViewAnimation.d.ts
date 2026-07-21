declare namespace BMap {
  /**
   * ViewAnimation 支持的事件名与事件对象类型映射
     */
  interface ViewAnimationEventMap {
    /** 动画开始时触发 */
    animationstart: { type: string; target: ViewAnimation };
    /** 每一轮动画迭代结束时触发 */
    animationiterations: { type: string; target: ViewAnimation };
    /** 动画被取消时触发 */
    animationcancel: { type: string; target: ViewAnimation };
    /** 动画正常结束时触发 */
    animationend: { type: string; target: ViewAnimation };
  }

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
    /**
     * 添加事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     */
    addEventListener<K extends keyof ViewAnimationEventMap>(event: K, handler: (e: ViewAnimationEventMap[K]) => void): void;
    /**
     * 移除事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     */
    removeEventListener<K extends keyof ViewAnimationEventMap>(event: K, handler: (e: ViewAnimationEventMap[K]) => void): void;
  }
}

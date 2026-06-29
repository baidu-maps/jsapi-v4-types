declare namespace BMap {
  /**
   * 地图视角动画的配置项。
   * @category 配置项
     */
  interface ViewAnimationOptions {
    /**
     * 动画开始延迟时间（毫秒）
     * @default 0
     */
    delay?: number;
    /**
     * 动画持续时间（毫秒）
     * @default 1000
     */
    duration?: number;
    /**
     * 循环次数；数字表示固定循环次数，`'INFINITE'` 表示无限循环
     * @default 1
     */
    interation?: number | 'INFINITE';
  }
}

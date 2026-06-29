declare namespace BMap {
  /**
   * 此类作为map.getViewport与map.setViewport方法的可选参数，不可实例化。
   */
  interface ViewportOptions {
    /**
     * 是否禁用动画效果移动地图。当调整后的级别与当前地图级别一致时，将使用动画效果移动地图
     * @default false
     */
    noAnimation?: boolean;
    /**
     * 视野调整的预留边距，例如： margins: [30, 20, 0, 20] 表示坐标点会限制在上述区域内
     */
    margins?: number[];
    /**
     * 地图级别的偏移量，您可以在方法得出的结果上增加一个偏移值。例如map.setViewport计算出地图的级别为10，如果zoomFactor为-1，则最终的地图级别为9
     * @default 0
     */
    zoomFactor?: number;
    /**
     * 改变地图视野的延迟执行时间，单位毫秒，此延时仅针对动画效果有效
     * @default 200
     */
    delay?: number;
  }
}

declare namespace BMap {
  /**
   * PanoramaLabel 构造函数的可选参数，使用对象字面量形式表示，不可实例化。
   * @category 配置项
   * 
   */
  interface PanoramaLabelOptions {
    /**
     * 文本标注的地理位置
     */
    position?: Point;
    /**
     * 文本标注在全景场景点中距地面的高度（米）
     * @default 2
     */
    altitude?: number;
    /**
     * 是否隐藏到场景点的距离。未设置 position 时距离始终隐藏
     * @default false
     */
    hideDistance?: boolean;
  }
}

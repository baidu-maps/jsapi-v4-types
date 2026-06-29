declare namespace BMap {
  /**
   * map 的 addMapLabels 方法支持向底图上添加可参与碰撞的 label
     * @category 配置项
   */
  interface MapLabel {
    /**
     * 墨卡托坐标
     */
    position?: Point;
    /**
     * 显示的级别范围，[fromZoom, toZoom]
     */
    displayRange?: number[];
    /**
     * 文字距离坐标位置的像素边距
     */
    textMargin?: number;
    /**
     * 显示的文字内容
     */
    name?: string;
    /**
     * 样式配置信息
     */
    style?: MapLabelStyle;
    /**
     * 权重，值越高优先级越高
     */
    rank?: number;
  }

  /**
   * MapLabel 的样式配置
     * @category 配置项
   */
  interface MapLabelStyle {
    /**
     * 文字大小
     */
    fontSize?: number;
    /**
     * 文字颜色，合法的css颜色值
     */
    color?: string;
    /**
     * 文字描边尺寸
     */
    haloSize?: number;
    /**
     * 描边颜色，合法的css颜色值
     */
    strokeColor?: string;
    /**
     * 如果添加icon则需要给icon的url
     */
    icon?: string;
    /**
     * icon的宽度和高度，按照1x的显示尺寸给出，[width, height]
     */
    iconSize?: number[];
    /**
     * 文字对应的唯一标识
     */
    guid?: string;
    /**
     * 文字位于坐标的方向，取值为：0, 1, 2, 3, 4 分别表示bottom, right, top, left, center
     */
    direction?: number;
    /**
     * 类型，默认为fixed（固定标注），此外还有line（道路标注）、biaopai(标牌)
     */
    type?: string;
  }
}

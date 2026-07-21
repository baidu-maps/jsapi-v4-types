declare namespace BMap {
  /**
   * 此类描述全景的视角。使用对象字面量形式表示，不可实例化。
   * 
   */
  interface PanoramaPov {
    /**
     * 水平方向的角度，正北方向为0，正东为90，正南为180，正西为270
     */
    heading?: number;
    /**
     * 竖直方向的角度，向上最大到90度，向下最大到-90度。（在某些场景下，俯角可能无法到达最大值）
     */
    pitch?: number;
  }
}

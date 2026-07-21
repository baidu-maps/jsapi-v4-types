declare namespace BMap {
  /**
   * 全景相册控件的可选参数，使用对象字面量形式表示，不可实例化。
   * @category 配置项
   * 
   */
  interface AlbumsControlOptions {
    /**
     * 相册控件的停靠位置
     */
    anchor?: ControlAnchor;
    /**
     * 相册的偏移量
     */
    offset?: Size;
    /**
     * 相册控件的最大宽度，可设置百分比（如 `'50%'`）或像素数字
     * @default '100%'
     */
    maxWidth?: number | string;
    /**
     * 相册内图片的高度（像素），宽度等比自适应
     * @default 80
     */
    imageHeight?: number;
  }
}

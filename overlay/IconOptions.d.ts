declare namespace BMap {
  /**
   * 此类表示 Icon 构造函数的可选参数。不可实例化，通过对象字面量形式表示。
   */
  interface IconOptions {
    /**
     * 图标的定位锚点，相对于图标左上角的偏移值。
     * 例如Icon大小为30x30，设置为 `new Size(15, 30)` 表示以底边中心作为锚点
     * @default 图标宽高的中间值
     */
    anchor?: Size;
    /**
     * 图片相对于可视区域的偏移值，等同于 CSS background-position。
     * 在使用 CSS Sprites 时，通过此属性设置切图在逻辑大小（imageSize）上的位置起始点
     */
    imageOffset?: Size;
    /**
     * 图标所用图片的大小，等同于 CSS background-size。
     * 用于设置图片的逻辑大小，配合 imageOffset 实现 CSS Sprites 切图；
     * 也可用于高清屏适配（设置为实际图片尺寸的一半）
     */
    imageSize?: Size;
  }
}

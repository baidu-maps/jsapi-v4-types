declare namespace BMap {
  /**
   * 此类表示标注覆盖物所使用的图标。
   */
  class Icon {
    /**
     * 以给定的图像地址和大小创建图标对象实例
     * @param url 图片资源地址
     * @param size 图标可视区域的大小
     * @param opts 可选参数
     * @example
     * ```typescript
     * const icon = new BMap.Icon(
     *   'https://jsapi-demo.bj.bcebos.com/images/markers/marker_demo_1.png',
     *   new BMap.Size(30, 30)
     * );
     * const marker = new BMap.Marker(new BMap.Point(116.404, 39.915), { icon });
     * map.addOverlay(marker);
     * ```
     * @example 使用 CSS Sprites
     * ```typescript
     * // 原图是一个均匀九宫格图片，大小为300*300
     * // 通过 imageSize 设置其逻辑大小为 90*90
     * // 通过 imageOffset 设置切图在逻辑大小上的位置起始点，（60，0）对应第一行第三个图标
     * // 通过 anchor 设置图标在地图上显示的锚点，（15，30）以图片底边中心作为锚点
     * const icon = new BMap.Icon(
     *   'https://jsapi-demo.bj.bcebos.com/images/markers/marker_demo_all.png',
     *   new BMap.Size(30, 30),
     *   { imageOffset: new BMap.Size(60, 0), imageSize: new BMap.Size(90, 90), anchor: new BMap.Size(15, 30) }
     * );
     * ```
     */
    constructor(url: string, size: Size, opts?: IconOptions);
    /**
     * 设置图片资源的地址
     * @param imageUrl 图片 URL
     * @example
     * ```typescript
     * icon.setImageUrl('https://jsapi-demo.bj.bcebos.com/images/markers/marker_demo_2.png');
     * ```
     */
    setImageUrl(imageUrl: string): void;
    /**
     * 设置图标可视区域的大小
     * @param size 大小
     * @example
     * ```typescript
     * icon.setSize(new BMap.Size(48, 48));
     * ```
     */
    setSize(size: Size): void;
    /**
     * 设置图标图片的实际大小（等同于 CSS background-size），用于设置图片逻辑大小
     * @param offset 图片实际大小
     * @example
     * ```typescript
     * // 原图 300x300，设置逻辑大小为 90x90 以配合 Sprites 切图
     * icon.setImageSize(new BMap.Size(90, 90));
     * ```
     */
    setImageSize(offset: Size): void;
    /**
     * 设置图标定位锚点相对于图标左上角的偏移值
     * @param anchor 偏移值
     * @example
     * ```typescript
     * icon.setAnchor(new BMap.Size(16, 32));
     * ```
     */
    setAnchor(anchor: Size): void;
    /**
     * 设置图片相对于可视区域的偏移值（等同于 CSS background-position），用于 Sprites 切图定位
     * @param offset 偏移值
     * @example
     * ```typescript
     * // 在逻辑大小 90x90 的九宫格图上，偏移到第一行第三个图标位置
     * icon.setImageOffset(new BMap.Size(60, 0));
     * ```
     */
    setImageOffset(offset: Size): void;
    /** 图标的定位锚点相对于图标左上角的偏移值 */
    anchor: Size;
    /** 图标可视区域的大小 */
    size: Size;
    /** 图标图片相对于可视区域的偏移值，等同于 CSS background-position */
    imageOffset: Size;
    /** 图标图片的实际大小，等同于 CSS background-size */
    imageSize: Size;
    /** 图标图片资源的 URL */
    imageUrl: string;
  }
}

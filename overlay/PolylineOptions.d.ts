declare namespace BMap {
  /**
   * 此类表示Polyline构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface PolylineOptions {
    /**
     * 折线颜色，格式为 '#xxxxxx'，默认跟随主题色（CSS 变量 `--bmap-color-primary`，缺省为 '#1677ff'）
     */
    strokeColor?: string;
    /**
     * 折线的宽度，以像素为单位，默认值为 2
     */
    strokeWeight?: number;
    /**
     * 折线的透明度，取值范围0 - 1，默认值为 1
     */
    strokeOpacity?: number;
    /**
     * 折线的样式
     * @default 'solid'
     */
    strokeStyle?: 'solid' | 'dashed' | 'dotted';
    /**
     * 描边线端头类型
     * @default 'round'
     */
    strokeLineCap?: 'round' | 'butt' | 'square';
    /**
     * 描边线连接处类型
     * @default 'round'
     */
    strokeLineJoin?: 'round' | 'miter' | 'bevel';
    /**
     * 是否在调用 map.clearOverlays() 时清除此覆盖物
     * @default true
     */
    enableMassClear?: boolean;
    /**
     * 是否启用线编辑
     * @default false
     */
    enableEditing?: boolean;
    /**
     * 是否响应点击事件
     * @default true
     */
    enableClicking?: boolean;
    /**
     * 是否开启大地线模式，为 true 时两点连线将以大地线的形式呈现
     * @default false
     */
    geodesic?: boolean;
    /**
     * 跨180度经线时是否按最短路径绘制
     * @default false
     */
    linkRight?: boolean;
    /**
     * 是否进行跨经度180度裁剪，绘制跨经度180度的折线时可设置为 false 以优化效果
     * @default true
     */
    clip?: boolean;
    /**
     * 输入坐标的坐标类型。未设置时使用全局 `BMap.coordType`。
     */
    coordType?: 'BMAP_COORD_BD09' | 'BMAP_COORD_GCJ02' | 'BMAP_COORD_WGS84';
    /**
     * 配置贴合折线的图标
     */
    icons?: IconSequence[];
    /**
     * 线纹理配置，用于沿折线重复绘制图片（如方向箭头），仅 WebGL 渲染模式支持
     */
    strokeTexture?: {
      /** 纹理图片地址 */
      url: string;
      /**
       * 纹理宽度，单位为像素
       * @default 16
       */
      width?: number;
      /**
       * 纹理高度，单位为像素
       * @default 16
       */
      height?: number;
    };
    /**
     * 虚线样式配置，如 [8, 4] 表示实线部分长8像素、间隙部分长4像素。
     * 默认虚线中实线和空隙的长度均为线宽的2倍
     */
    dashArray?: number[];
    /**
     * 覆盖物的初始层叠顺序，也可在实例上通过 `setZIndex()` 方法修改
     * @default 0
     */
    zIndex?: number;
  }
}

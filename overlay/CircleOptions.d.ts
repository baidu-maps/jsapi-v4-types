declare namespace BMap {
  /**
   * Circle 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface CircleOptions {
    /**
     * 边线颜色，格式为 '#xxxxxx'，默认跟随主题色（CSS 变量 `--bmap-color-primary`，缺省为 '#1677ff'）
     */
    strokeColor?: string;
    /**
     * 填充颜色，格式为 '#xxxxxx'，传入空字符串时无填充效果，默认跟随主题色（CSS 变量 `--bmap-color-primary-bg`，缺省为 '#eaf1ff'）
     */
    fillColor?: string;
    /**
     * 边线宽度，以像素为单位，默认值为 2
     */
    strokeWeight?: number;
    /**
     * 边线透明度，取值范围0 - 1，默认值为 1
     */
    strokeOpacity?: number;
    /**
     * 填充透明度，取值范围0 - 1，默认值为 0.6
     */
    fillOpacity?: number;
    /**
     * 边线样式
     * @default 'solid'
     */
    strokeStyle?: 'solid' | 'dashed' | 'dotted';
    /**
     * 是否在调用 map.clearOverlays() 时清除此覆盖物
     * @default true
     */
    enableMassClear?: boolean;
    /**
     * 是否启用编辑功能
     * @default false
     */
    enableEditing?: boolean;
    /**
     * 是否响应点击事件
     * @default true
     */
    enableClicking?: boolean;
    /**
     * 输入坐标的坐标类型。未设置时使用全局 `BMap.coordType`。
     */
    coordType?: 'BMAP_COORD_BD09' | 'BMAP_COORD_GCJ02' | 'BMAP_COORD_WGS84';
    /**
     * 虚线样式配置，如 [8, 4] 表示实线部分长8像素、间隙部分长4像素。
     */
    dashArray?: number[];
    /**
     * 覆盖物的初始层叠顺序，也可在实例上通过 `setZIndex()` 方法修改
     * @default 0
     */
    zIndex?: number;
  }
}

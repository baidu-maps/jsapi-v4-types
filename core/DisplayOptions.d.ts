declare namespace BMap {
  /**
   * 此类代表设置地图显示元素，不可实例化。
     * @category 配置项
   */
  interface DisplayOptions {
    /**
     * 是否显示POI信息。注意：`poi`、`poiText` 与 `poiIcon` 均用来配置POI显示，
     * 当 `poi` 为 `true` 时，可配置另外两个选项；如果为 `false`，则另外两个选项不再生效。
     * @default true
     */
    poi?: boolean;
    /**
     * 是否显示POI文字信息
     * @default true
     */
    poiText?: boolean;
    /**
     * 是否显示POI的Icon
     * @default true
     */
    poiIcon?: boolean;
    /**
     * 是否显示覆盖物
     * @default true
     */
    overlay?: boolean;
    /**
     * 是否显示图层
     * @default true
     */
    layer?: boolean;
    /**
     * 是否显示3D建筑物（仅支持 WebGL 方式渲染的地图）
     * @default true
     */
    building?: boolean;
    /**
     * 是否显示室内图（仅支持 WebGL 方式渲染的地图）
     * @default true
     */
    indoor?: boolean;
    /**
     * 是否显示路网（只对卫星图和地球模式有效）
     * @default true
     */
    street?: boolean;
    /**
     * 是否将3D元素以平面形式展示
     * @default false
     */
    isFlat?: boolean;
    /**
     * 文字标注间距
     * @default 0
     */
    labelMargin?: number;
    /**
     * 配置天空的颜色，数组中首个元素表示地面颜色，第二个元素表示天空颜色，从而形成渐变，支持只传入一个元素
     * @default ['rgba(226, 237, 248, 0)', 'rgba(186, 211, 252, 1)']
     */
    skyColors?: string[];
  }
}

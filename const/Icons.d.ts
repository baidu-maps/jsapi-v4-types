declare namespace BMap {
  /**
   * 此类表示 {@link Icons.createIcon} 的可选参数。不可实例化，通过对象字面量形式表示。
   *
   * 除 `color`、`size` 外的字段原样透传给 {@link Icon} 构造函数；
   * 其中 `imageSize` 由 `size` 推导、高清图资源集由内部生成，传入会被忽略。
     */
  interface CreateIconOptions extends Omit<IconOptions, 'imageSize' | 'srcset'> {
    /**
     * 图标颜色，用于替换 SVG 里的 `currentColor`，仅对写了 `currentColor` 的图形生效
     * @default 黑色
     */
    color?: string;
    /**
     * 图标在地图上的显示尺寸，传数字表示等宽高的正方形
     * @default 32
     */
    size?: number | Size;
  }

  /**
   * 内置图标常量集合，每个值都是一段内联 SVG 字符串。
   * 在 DOM 中用 `DOMParser` 解析成节点后插入；作为 {@link Marker} 的图标时，
   * 用 {@link Icons.createIcon} 转成 {@link Icon} 实例。
   *
   * 图形颜色统一用 `currentColor` 占位：DOM 用法下由外层元素的 CSS `color` 决定，
   * Marker 用法下由 `createIcon` 的 `color` 参数决定。
   *
   * 常量可用 `Object.keys(BMap.Icons)` 遍历（`createIcon` 不可枚举），
   * 适合实现图标网格、图标选择器。
   * @example 作为 Marker 图标
   * ```typescript
   * const marker = new BMap.Marker(new BMap.Point(116.404, 39.915), {
   *   icon: BMap.Icons.createIcon(BMap.Icons.MARKER_PIN, { color: '#f53f3f', size: 32 })
   * });
   * map.addOverlay(marker);
   * ```
   * @example 作为 DOM 图标
   * ```typescript
   * const el = document.createElement('div');
   * el.style.color = '#3370ff';
   * // 解析成 SVG 节点后插入
   * const svgDoc = new DOMParser().parseFromString(BMap.Icons.SEARCH, 'image/svg+xml');
   * el.appendChild(document.importNode(svgDoc.documentElement, true));
   * ```
     */
  namespace Icons {
    /** 定位圆点，带四向准星刻度（定位控件在用） */
    const LOCATION: string;
    /** 加号，缩放控件的放大按钮在用；放大镜图标见 {@link Icons.SEARCH} */
    const PLUS: string;
    /** 减号，缩放控件的缩小按钮在用 */
    const MINUS: string;
    /** 指向左上的斜向箭头 */
    const ARROW_TOP_LEFT: string;
    /** 指向右上的斜向箭头 */
    const ARROW_TOP_RIGHT: string;
    /** 指向左下的斜向箭头 */
    const ARROW_BOTTOM_LEFT: string;
    /** 指向右下的斜向箭头 */
    const ARROW_BOTTOM_RIGHT: string;
    /** 红绿灯，驾车方案的红绿灯数量在用 */
    const TRAFFIC_LIGHT: string;
    /** 地铁，公交换乘方案面板在用 */
    const SUBWAY: string;
    /** 公交车 */
    const BUS: string;
    /** 火车 */
    const TRAIN: string;
    /** 飞机 */
    const AIRPLANE: string;
    /** 放大镜，表示搜索 */
    const SEARCH: string;
    /** 道路 */
    const ROAD: string;
    /** 向下的尖括号，表示展开 / 收起 */
    const CHEVRON_DOWN: string;
    /** 水滴形定位 pin，可直接作为 Marker 图标替代默认标注 */
    const MARKER_PIN: string;
    /** 旗帜，常用于表示终点 */
    const FLAG: string;
    /**
     * 小汽车（正视），表示驾车。
     *
     * 交通方式六件套（`CAR` / `TAXI` / `WALK` / `BIKE` / `SCOOTER` / `TRUCK`）共用一条
     * 地平线，同排渲染时底部自动对齐，使用方不需要逐个微调 `vertical-align`
     */
    const CAR: string;
    /** 出租车（正视，车顶带顶灯），表示打车 */
    const TAXI: string;
    /** 行人，表示步行 */
    const WALK: string;
    /** 自行车，表示骑行 */
    const BIKE: string;
    /** 电动车 / 电瓶车（踏板式） */
    const SCOOTER: string;
    /** 货车（侧视） */
    const TRUCK: string;
    /** 关闭叉号 */
    const CLOSE: string;
    /** 堆叠的图层，表示图层切换 */
    const LAYERS: string;
    /** 路线，表示路径规划 */
    const ROUTE: string;
    /**
     * 用 SVG 字符串创建一个可直接交给 {@link Marker} 使用的 {@link Icon} 实例，
     * 替换 `currentColor`、转 dataURL、出高分屏 2 倍图都在内部完成。
     *
     * 传入的不限于本模块的常量，任何 SVG 字符串都可以
     * @param svg SVG 字符串，例如 `BMap.Icons.MARKER_PIN`
     * @param options 可选参数
     * @returns 图标实例
     * @example
     * ```typescript
     * const icon = BMap.Icons.createIcon(BMap.Icons.CAR, {
     *   color: '#f53f3f',
     *   size: new BMap.Size(40, 40)
     * });
     * map.addOverlay(new BMap.Marker(new BMap.Point(116.404, 39.915), { icon }));
     * ```
     */
    function createIcon(svg: string, options?: CreateIconOptions): Icon;
  }
}

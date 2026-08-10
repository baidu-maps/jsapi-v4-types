declare namespace BMap {
  /**
   * GroundOverlay 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   * @category 配置项
   */
  interface GroundOverlayOptions {
    /**
     * 图层透明度，取值范围0 - 1
     * @default 1
     */
    opacity?: number;
    /**
     * 是否允许在调用 map.clearOverlays() 时清除此覆盖物
     * @default true
     */
    enableMassClear?: boolean;
    /**
     * 是否响应鼠标事件
     * @default true
     */
    enableClicking?: boolean;
    /**
     * 叠加内容来源。type 为 'image' 时传图片地址，'video' 时传视频地址，'canvas' 时直接传 canvas 元素
     */
    url?: string | HTMLCanvasElement;
    /**
     * 图层显示的最小缩放级别，默认值为 3
     */
    displayOnMinLevel?: number;
    /**
     * 图层显示的最大缩放级别，默认值为 21
     */
    displayOnMaxLevel?: number;
    /**
     * 图层图片地址，兼容旧版 imageURL 配置，新代码请使用 {@link GroundOverlayOptions#url}
     * @deprecated 4.0 请使用 {@link GroundOverlayOptions#url}
     */
    imageURL?: string;
    /**
     * 叠加内容类型
     * @default 'image'
     */
    type?: 'image' | 'video' | 'canvas';
    /**
     * 是否在普通覆盖物之上绘制
     * @default false
     */
    top?: boolean;
    /**
     * 是否开启循环重绘，type 为 'canvas' 时生效。
     * 开启后每帧渲染前都会调用 drawHook 并重新采集 canvas 内容作为贴图，用于实现动态效果（如雷达扫描、水波动画）；
     * 关闭则 canvas 内容仅在初始化时采集一次，作为静态贴图
     * @default false
     */
    isReDraw?: boolean;
    /**
     * 自定义绘制回调，type 为 'canvas' 且开启 isReDraw 时每帧渲染前调用。
     * @example
     * ```typescript
     * const canvas = document.createElement('canvas');
     * const ctx = canvas.getContext('2d');
     * let angle = 0;
     * const overlay = new BMap.GroundOverlay(bounds, {
     *   type: 'canvas',
     *   url: canvas,
     *   isReDraw: true,
     *   drawHook: () => {
     *     ctx.clearRect(0, 0, canvas.width, canvas.height);
     *     // 绘制旋转扫描效果，每帧更新
     *     angle += 0.02;
     *   },
     * });
     * ```
     */
    drawHook?: () => void;
  }
}

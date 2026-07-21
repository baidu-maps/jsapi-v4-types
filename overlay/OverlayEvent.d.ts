declare namespace BMap {
  /**
   * 覆盖物事件的基础类型，包含事件名称和触发目标
   * @category 事件
   */
  interface OverlayBaseEvent<T = Overlay> {
    /** 事件类型名称 */
    type: string;
    /** 派发事件的覆盖物实例 */
    target: T;
    /** 当前处理事件的覆盖物实例 */
    currentTarget: T;
  }

  /**
   * 覆盖物鼠标/拖拽类事件，附带画面坐标和地理坐标。
   * 适用于：click、dblclick、rightclick、mousedown、mouseup、mousemove、mouseover、mouseout、dragstart、dragging、dragend
   * @category 事件
   */
  interface OverlayMouseEvent<T = Overlay> extends OverlayBaseEvent<T> {
    /** 事件触发点相对地图容器的画面像素坐标 */
    pixel: Pixel;
    /** 事件触发点的经纬度坐标 */
    point: Point;
    /**
     * 事件触发点的地理坐标
     */
    latLng: Point;
    /**
     * 原始 DOM 事件对象
     * 部分合成事件没有对应的 DOM 事件；触摸交互时该值可能为 TouchEvent
     */
    domEvent?: MouseEvent | TouchEvent | null;
  }

  /**
   * 图形覆盖物的 mouseout 可能由内部命中切换合成，此时仅保证基础事件字段存在
   * @category 事件
   */
  type GraphMouseOutEvent<T = Overlay> = OverlayBaseEvent<T> & Partial<OverlayMouseEvent<T>>;

  /**
   * Marker 支持的事件名与事件对象类型映射。
   */
  interface MarkerEventMap {
    /** 点击标注时触发 */
    click: OverlayMouseEvent<Marker>;
    /** 双击标注时触发 */
    dblclick: OverlayMouseEvent<Marker>;
    /** 右键点击标注时触发 */
    rightclick: OverlayMouseEvent<Marker>;
    /** 在标注上按下鼠标时触发 */
    mousedown: OverlayMouseEvent<Marker>;
    /** 在标注上抬起鼠标时触发 */
    mouseup: OverlayMouseEvent<Marker>;
    /** 鼠标移入标注时触发 */
    mouseover: OverlayMouseEvent<Marker>;
    /** 鼠标移出标注时触发 */
    mouseout: OverlayMouseEvent<Marker>;
    /** 开始拖拽标注时触发，需先调用 `enableDragging()` 开启拖拽 */
    dragstart: OverlayMouseEvent<Marker>;
    /** 拖拽标注过程中持续触发，需先调用 `enableDragging()` 开启拖拽 */
    dragging: OverlayMouseEvent<Marker>;
    /** 拖拽标注结束时触发，需先调用 `enableDragging()` 开启拖拽 */
    dragend: OverlayMouseEvent<Marker>;
    /** 标注被移除（如 `map.removeOverlay()`）时触发 */
    remove: OverlayBaseEvent<Marker>;
  }

  /**
   * 矢量图形类覆盖物（折线、多边形、圆等）共享的事件名与事件对象类型映射。
   * 各图形类的 EventMap（如 `PolylineEventMap`）均由此派生
   * @category 事件
   */
  interface GraphEventMap<T = Overlay> {
    /** 点击图形时触发 */
    click: OverlayMouseEvent<T>;
    /** 双击图形时触发 */
    dblclick: OverlayMouseEvent<T>;
    /** 在图形上按下鼠标时触发 */
    mousedown: OverlayMouseEvent<T>;
    /** 在图形上抬起鼠标时触发 */
    mouseup: OverlayMouseEvent<T>;
    /** 鼠标移入图形时触发 */
    mouseover: OverlayMouseEvent<T>;
    /** 鼠标移出图形时触发 */
    mouseout: GraphMouseOutEvent<T>;
    /** 鼠标在图形上移动时触发 */
    mousemove: OverlayMouseEvent<T>;
    /** 右键点击图形时触发 */
    rightclick: OverlayMouseEvent<T>;
    /**
     * 右键双击图形时触发
     */
    rightdblclick: OverlayMouseEvent<T>;
    /** 图形被移除（如 `map.removeOverlay()`）时触发 */
    remove: OverlayBaseEvent<T>;
    /** 图形的节点数据发生变化时触发 */
    lineupdate: OverlayBaseEvent<T>;
  }

  /** Polyline 支持的事件名与事件对象类型映射 */
  type PolylineEventMap = GraphEventMap<Polyline>;

  /** Polygon 支持的事件名与事件对象类型映射 */
  type PolygonEventMap = GraphEventMap<Polygon>;

  /** Rectangle 支持的事件名与事件对象类型映射 */
  type RectangleEventMap = GraphEventMap<Rectangle>;

  /** Circle 支持的事件名与事件对象类型映射 */
  type CircleEventMap = GraphEventMap<Circle>;

  /**
   * Prism 支持的事件名与事件对象类型映射
     */
  type PrismEventMap = GraphEventMap<Prism>;

  /**
   * BezierCurve 支持的事件名与事件对象类型映射
     */
  type BezierCurveEventMap = GraphEventMap<BezierCurve>;

  /** Label 支持的事件名与事件对象类型映射 */
  interface LabelEventMap {
    /** 点击文本标注时触发 */
    click: OverlayMouseEvent<Label>;
    /** 双击文本标注时触发 */
    dblclick: OverlayMouseEvent<Label>;
    /** 右键点击文本标注时触发 */
    rightclick: OverlayMouseEvent<Label>;
    /** 在文本标注上按下鼠标时触发 */
    mousedown: OverlayMouseEvent<Label>;
    /** 在文本标注上抬起鼠标时触发 */
    mouseup: OverlayMouseEvent<Label>;
    /** 鼠标移入文本标注时触发 */
    mouseover: OverlayMouseEvent<Label>;
    /** 鼠标移出文本标注时触发 */
    mouseout: OverlayMouseEvent<Label>;
    /** 文本标注被移除（如 `map.removeOverlay()`）时触发 */
    remove: OverlayBaseEvent<Label>;
  }

  /** InfoWindow 支持的事件名与事件对象类型映射 */
  interface InfoWindowEventMap {
    /** 信息窗口打开时触发 */
    open: OverlayBaseEvent<InfoWindow>;
    /** 信息窗口关闭时触发 */
    close: OverlayBaseEvent<InfoWindow>;
    /** 点击信息窗口的关闭按钮时触发 */
    clickclose: OverlayBaseEvent<InfoWindow>;
    /** 信息窗口最大化时触发，需开启 `enableMaximize` */
    maximize: OverlayBaseEvent<InfoWindow>;
    /** 信息窗口从最大化恢复时触发 */
    restore: OverlayBaseEvent<InfoWindow>;
    /** 信息窗口尺寸发生变化时触发 */
    resize: OverlayBaseEvent<InfoWindow>;
  }
}

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
    /**
     * 事件触发点的经纬度坐标
     */
    point: Point;
    /**
     * 事件触发点的经纬度坐标
     */
    latLng: Point;
    /**
     * 事件触发点的墨卡托坐标
     */
    pointMC?: Point;
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
   * 图形节点数据变化事件（lineupdate）
   * @category 事件
     */
  interface GraphLineUpdateEvent<T = Overlay> extends OverlayBaseEvent<T> {
    /** 发生变化的图形覆盖物实例 */
    overlay?: T;
    /** 变化来源动作，图形被移除时为 `'remove'` */
    action?: string;
  }

  /**
   * 图形编辑过程事件（editstart / editend），附带编辑位置坐标
   * @category 事件
     */
  interface GraphEditEvent<T = Overlay> extends OverlayBaseEvent<T> {
    /** 编辑位置的画面像素坐标 */
    pixel?: Pixel;
    /** 编辑位置的经纬度坐标 */
    point?: Point;
    /** 编辑位置的经纬度坐标 */
    latLng?: Point;
    /** 编辑位置的墨卡托坐标 */
    pointMC?: Point;
    /** 被编辑的图形覆盖物实例 */
    overlay: T;
  }

  /**
   * 图形编辑节点（顶点）事件，携带触发的顶点标注与其派发的原始事件
   * @category 事件
     */
  interface GraphVertexEvent<T = Overlay> extends OverlayBaseEvent<T> {
    /** 触发事件的顶点标注实例 */
    overlay: Marker;
    /** 顶点标注派发的原始事件对象 */
    from: OverlayMouseEvent<Marker>;
  }

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
    /**
     * 图形的节点数据发生变化时触发
     */
    lineupdate: GraphLineUpdateEvent<T>;
    /**
     * 开始编辑（拖拽图形节点）时触发，需先调用 `enableEditing()` 开启编辑
     */
    editstart: GraphEditEvent<T>;
    /**
     * 一次节点编辑结束时触发
     */
    editend: GraphEditEvent<T>;
    /**
     * 开始拖拽图形编辑节点时触发
     */
    linevertexdragstart: GraphVertexEvent<T>;
    /**
     * 拖拽图形编辑节点过程中持续触发
     */
    linevertexdragging: GraphVertexEvent<T>;
    /**
     * 拖拽图形编辑节点结束时触发
     */
    linevertexdragend: GraphVertexEvent<T>;
    /**
     * 删除图形编辑节点时触发
     */
    linevertexdel: GraphVertexEvent<T>;
  }

  /**
   * GroundOverlay 的鼠标事件。3.0 的 click、dblclick 事件只保证基础事件字段，
   * 4.0 会附带画面坐标和地理坐标。
   * @category 事件
   */
  interface GroundOverlayMouseEvent extends OverlayBaseEvent<GroundOverlay> {
    /**
     * 事件触发点相对地图容器的画面像素坐标
     */
    pixel?: Pixel;
    /**
     * 事件触发点的经纬度坐标
     */
    point?: Point;
    /**
     * 事件触发点的经纬度坐标
     */
    latLng?: Point;
    /**
     * 事件触发点的墨卡托坐标
     */
    pointMC?: Point;
    /**
     * 原始 DOM 事件对象
     */
    domEvent?: MouseEvent | TouchEvent | null;
  }

  /** GroundOverlay 支持的事件名与事件对象类型映射 */
  interface GroundOverlayEventMap {
    /** 点击覆盖物时触发 */
    click: GroundOverlayMouseEvent;
    /** 双击覆盖物时触发 */
    dblclick: GroundOverlayMouseEvent;
    /**
     * 右键点击覆盖物时触发
     */
    rightclick: GroundOverlayMouseEvent;
    /**
     * 右键双击覆盖物时触发
     */
    rightdblclick: GroundOverlayMouseEvent;
    /**
     * 在覆盖物上按下鼠标时触发
     */
    mousedown: GroundOverlayMouseEvent;
    /**
     * 在覆盖物上抬起鼠标时触发
     */
    mouseup: GroundOverlayMouseEvent;
    /**
     * 鼠标移入覆盖物时触发
     */
    mouseover: GroundOverlayMouseEvent;
    /**
     * 鼠标移出覆盖物时触发
     */
    mouseout: GroundOverlayMouseEvent;
    /**
     * 鼠标在覆盖物上移动时触发
     */
    mousemove: GroundOverlayMouseEvent;
    /** 覆盖物被移除时触发 */
    remove: OverlayBaseEvent<GroundOverlay>;
    /**
     * 覆盖物渲染数据发生变化时触发
     */
    lineupdate: GraphLineUpdateEvent<GroundOverlay>;
  }

  /** Polyline 支持的事件名与事件对象类型映射 */
  type PolylineEventMap = GraphEventMap<Polyline>;

  /** Polygon 支持的事件名与事件对象类型映射 */
  type PolygonEventMap = GraphEventMap<Polygon>;

  /**
   * Rectangle 支持的事件名与事件对象类型映射
     */
  type RectangleEventMap = GraphEventMap<Rectangle>;

  /** Circle 支持的事件名与事件对象类型映射 */
  type CircleEventMap = GraphEventMap<Circle>;

  /**
   * Prism 支持的事件名与事件对象类型映射
     */
  type PrismEventMap = Omit<
    GraphEventMap<Prism>,
    'editstart' | 'editend' | 'linevertexdragstart' | 'linevertexdragging' | 'linevertexdragend' | 'linevertexdel'
  >;

  /**
   * BezierCurve 支持的事件名与事件对象类型映射
     */
  type BezierCurveEventMap = Omit<
    GraphEventMap<BezierCurve>,
    'editstart' | 'editend' | 'linevertexdragstart' | 'linevertexdragging' | 'linevertexdragend' | 'linevertexdel'
  >;

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

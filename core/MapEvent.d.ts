declare namespace BMap {
  /**
   * 所有地图事件的基础类型，包含事件名称和触发目标
   * @category 事件
   */
  interface MapBaseEvent<TTarget = Map> {
    /** 事件类型名称 */
    type: string;
    /** 事件触发目标 */
    target: TTarget;
  }

  /**
   * 鼠标/指针类事件，附带地理坐标、画面坐标和覆盖物信息。
   * 适用于：click、dblclick、rightclick、rightdblclick、mousemove、mousedown、mouseup
   * @category 事件
   */
  interface MapMouseEvent extends MapBaseEvent<Map | EventTarget> {
    /** 事件触发点的地理坐标 */
    point: Point;
    /** 事件触发点的画面像素坐标 */
    pixel: Pixel;
    /** 事件触发点上方的覆盖物，无覆盖物时为 null */
    overlay: Overlay | null;
    /**
     * 点击到的底图图标信息，未命中时为 null
     */
    icon?: { name: string; uid: string; position: Point } | null;
    /**
     * `icon` 的兼容别名
     */
    poi?: { name: string; uid: string; position: Point } | null;
  }

  /**
   * 鼠标移入、移出地图区域事件。
   * @category 事件
   */
  interface MapMouseBoundaryEvent extends MapBaseEvent<Map | EventTarget> {
    /**
     * 事件触发点的地理坐标
     */
    point: Point;
    /**
     * 事件触发点的画面像素坐标
     */
    pixel: Pixel;
    /**
     * 事件触发点上方的覆盖物，无覆盖物时为 null
     */
    overlay: Overlay | null;
  }

  /**
   * 鼠标滚轮事件
   * @category 事件
   */
  interface MapWheelEvent extends MapMouseEvent {
    /** true 表示向上滚动（放大），false 表示向下滚动（缩小） */
    trend: boolean;
  }

  /**
   * 拖拽类事件，附带画面坐标和地理坐标。
   * 适用于：dragstart、dragging、dragend
   * @category 事件
   */
  interface MapDragEvent extends MapBaseEvent<Map | EventTarget> {
    /** 拖拽位置的画面像素坐标 */
    pixel: Pixel;
    /** 拖拽位置的地理坐标 */
    point: Point;
  }

  /**
   * 地图初始化完成事件，仅在首次调用 `centerAndZoom` 后派发一次。
   * 适用于：load
   * @category 事件
   */
  interface MapLoadEvent extends MapBaseEvent {
    /** 地图初始化的中心点地理坐标 */
    point: Point;
    /** 地图初始化的缩放级别 */
    zoom: number;
  }

  /**
   * 地图容器尺寸变化事件
   * 适用于：resize、beforeresize
   * @category 事件
   */
  interface MapResizeEvent extends MapBaseEvent {
    /** 变化后的地图容器尺寸 */
    size: Size;
  }

  /**
   * 地图类型变化事件
   * 适用于：maptypechange
   * @category 事件
   */
  interface MapTypeChangeEvent extends MapBaseEvent {
    /**
     * 变化后的地图类型实例，为内置地图类型实例，与全局常量 `BMAP_NORMAL_MAP` 等同源
     */
    mapType: MapType;
    /**
     * 变化前的地图类型实例
     */
    exMapType: MapType;
    /** 地图类型变化后的缩放级别 */
    zoomLevel: number;
  }

  /**
   * 覆盖物增删事件，附带操作的覆盖物实例。
   * 适用于：beforeaddoverlay、addoverlay、removeoverlay
   * @category 事件
   */
  interface MapOverlayEvent extends MapBaseEvent<Overlay> { }

  /**
   * 控件增删事件，附带操作的控件实例。
   * 适用于：addcontrol、removecontrol
   * @category 事件
   */
  interface MapControlEvent extends MapBaseEvent<Control> { }

  /**
   * 右键菜单增删事件，附带操作的菜单实例。
   * 适用于：addcontextmenu、removecontextmenu
   * @category 事件
   */
  interface MapContextMenuEvent extends MapBaseEvent<ContextMenu> { }

  /**
   * 地图事件名称到事件对象类型的完整映射表。
   * @example
   * ```typescript
   * map.addEventListener('click', (e) => {
   *   console.log(e.point, e.pixel, e.overlay);
   * });
   *
   * map.addEventListener('dragend', (e) => {
   *   console.log(e.point, e.pixel);
   * });
   *
   * map.addEventListener('resize', (e) => {
   *   console.log(e.size);
   * });
   * ```
   * @category 事件
   */
  interface MapEventMap {
    /** 地图初始化完成时触发，仅首次确定视野后派发一次 */
    load: MapLoadEvent;

    /** 左键单击地图时触发。双击时依次触发 click → click → dblclick */
    click: MapMouseEvent;
    /** 鼠标双击地图时触发 */
    dblclick: MapMouseEvent;
    /** 右键单击地图时触发。双击时依次触发 rightclick → rightclick → rightdblclick */
    rightclick: MapMouseEvent;
    /** 右键双击地图时触发 */
    rightdblclick: MapMouseEvent;
    /** 鼠标在地图区域移动时持续触发 */
    mousemove: MapMouseEvent;
    /** 鼠标按下时触发 */
    mousedown: MapMouseEvent;
    /** 鼠标松开时触发 */
    mouseup: MapMouseEvent;
    /** 鼠标移入地图区域时触发 */
    mouseover: MapMouseBoundaryEvent;
    /** 鼠标移出地图区域时触发 */
    mouseout: MapMouseBoundaryEvent;

    /** 触摸开始时触发 */
    touchstart: MapMouseEvent;
    /** 触摸移动时持续触发 */
    touchmove: MapMouseEvent;
    /** 触摸结束时触发 */
    touchend: MapMouseEvent;
    /** 鼠标滚轮触发缩放时派发 */
    mousewheel: MapWheelEvent;
    /**
     * 缩放操作试图超出允许范围时触发
     */
    zoomexceeded: MapZoomExceededEvent;

    /** 开始拖拽地图时触发 */
    dragstart: MapDragEvent;
    /** 拖拽地图过程中持续触发 */
    dragging: MapDragEvent;
    /** 停止拖拽地图时触发 */
    dragend: MapDragEvent;

    /** 地图移动开始时触发 */
    movestart: MapBaseEvent;
    /** 地图移动过程中持续触发 */
    moving: MapBaseEvent;
    /** 地图移动结束时触发 */
    moveend: MapBaseEvent;

    /** 地图开始更改缩放级别时触发 */
    zoomstart: MapBaseEvent;
    /**
     * 地图缩放过程中触发
     */
    zooming: MapBaseEvent;
    /** 地图完成缩放级别变化时触发 */
    zoomend: MapBaseEvent;

    /**
     * 覆盖物添加前触发
     */
    beforeaddoverlay: MapOverlayEvent;
    /** 通过 `Map.addOverlay()` 添加覆盖物后触发 */
    addoverlay: MapOverlayEvent;
    /** 通过 `Map.removeOverlay()` 移除覆盖物后触发 */
    removeoverlay: MapOverlayEvent;
    /** 通过 `Map.clearOverlays()` 清空全部覆盖物后触发 */
    clearoverlays: MapBaseEvent;

    /** 通过 `Map.addControl()` 添加控件后触发 */
    addcontrol: MapControlEvent;
    /** 通过 `Map.removeControl()` 移除控件后触发 */
    removecontrol: MapControlEvent;
    /** 通过 `Map.addContextMenu()` 添加右键菜单后触发 */
    addcontextmenu: MapContextMenuEvent;
    /** 通过 `Map.removeContextMenu()` 移除右键菜单后触发 */
    removecontextmenu: MapContextMenuEvent;

    /** 地图类型发生变化时触发 */
    maptypechange: MapTypeChangeEvent;
    /**
     * 个性化样式即将切换时触发
     */
    style_willchange: MapBaseEvent;
    /**
     * 个性化样式加载完成时触发
     */
    style_loaded: MapBaseEvent;
    /**
     * 个性化样式加载失败时触发
     */
    style_loaded_error: MapBaseEvent;
    /**
     * 个性化样式加载超时时触发
     */
    style_loaded_timeout: MapBaseEvent;
    /**
     * 地图显示语言变化时触发
     */
    language_change: MapBaseEvent;

    /**
     * 地图实例销毁时触发
     */
    destroy: MapBaseEvent;

    /** 地图瓦片加载完成时触发 */
    tilesloaded: MapBaseEvent;
    /** 地图容器可视区域大小发生变化时触发 */
    resize: MapResizeEvent;
  }
}

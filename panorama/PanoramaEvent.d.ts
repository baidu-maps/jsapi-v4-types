declare namespace BMap {
  /**
   * 全景事件的基础事件对象
   */
  interface PanoramaBaseEvent {
    type: string;
    target: Panorama;
    currentTarget: Panorama;
  }

  /**
   * Panorama 支持的事件名与事件参数类型映射
   */
  interface PanoramaEventMap {
    /** 当前全景位置变化后触发 */
    position_changed: PanoramaBaseEvent;
    /** 相邻道路数据变化后触发 */
    links_changed: PanoramaBaseEvent;
    /** 当前视角变化后触发 */
    pov_changed: PanoramaBaseEvent;
    /** 当前缩放级别变化后触发 */
    zoom_changed: PanoramaBaseEvent;
    /** 全景场景类型变化后触发 */
    scene_type_changed: PanoramaBaseEvent;
    /** 当前全景 id 变化后触发 */
    id_changed: string;
    /** 全景数据加载完成后触发 */
    dataload: { data: unknown };
    /** 拖拽视角后的惯性运动结束时触发 */
    pov_changed_end: PanoramaBaseEvent;
    /** 全景容器尺寸变化后触发 */
    size_changed: PanoramaBaseEvent;
    /** 开始鼠标或触摸交互时触发 */
    touchstart: MouseEvent | TouchEvent;
    /** 结束鼠标或触摸交互时触发 */
    touchend: MouseEvent | TouchEvent;
    /** 单击全景画面后触发 */
    click: MouseEvent | TouchEvent;
    /** 双击全景画面后触发 */
    dblclick: MouseEvent | TouchEvent;
    /** 单击道路链接后触发 */
    link_click: PanoramaBaseEvent & { id: string };
    /** 添加全景覆盖物后触发 */
    overlay_add: PanoramaLabel;
    /** 移除全景覆盖物后触发 */
    overlay_remove: PanoramaLabel;
    /** 清除全部全景覆盖物后触发 */
    overlays_clear: PanoramaBaseEvent;
    /** 全景数据加载失败时触发 */
    pano_error: PanoramaBaseEvent & { data: unknown };
    /** 道路链接显隐状态变化后触发 */
    links_visible_changed: { value: boolean };
    /** 全景实例销毁时触发 */
    destroy: PanoramaBaseEvent;
    /** 场景切换动画结束后触发 */
    scene_change_end: PanoramaBaseEvent;
    /** 可见 POI 类型变化后触发 */
    visible_poi_type_changed: { visiblePOIType: PanoramaPOIType };
    /** 单击道路后触发 */
    clickonroad: PanoramaBaseEvent;
  }

  /** PanoramaLabel 事件的基础事件对象 */
  interface PanoramaLabelEvent {
    type: string;
    target: PanoramaLabel;
    currentTarget: PanoramaLabel;
  }

  /**
   * PanoramaLabel 支持的事件名与事件对象类型映射
   */
  interface PanoramaLabelEventMap {
    /** 单击标签后触发 */
    click: PanoramaLabelEvent;
  }
}

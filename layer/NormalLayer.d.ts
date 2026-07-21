declare namespace BMap {
  /**
   * 样式表达式类型，支持数据驱动样式
     */
  type StyleExpress = string | object | ((properties: object) => any);

  /**
   * 普通图层事件的基础类型
     */
  interface NormalLayerBaseEvent<T = unknown> {
    type: string;
    target: T;
    currentTarget: T;
  }

  /**
   * 普通图层的要素拾取事件
     */
  interface NormalLayerPickEvent<T = unknown> extends NormalLayerBaseEvent<T> {
    pixel: Pixel;
    latLng: Point;
    value: object | null | undefined;
  }

  /**
   * 普通图层支持的事件名与事件对象类型映射
     */
  interface NormalLayerEventMap<T = unknown> {
    dataparsed: NormalLayerBaseEvent<T>;
    mousemove: NormalLayerPickEvent<T>;
    click: NormalLayerPickEvent<T>;
    dblclick: NormalLayerPickEvent<T>;
    rightclick: NormalLayerPickEvent<T>;
  }
}

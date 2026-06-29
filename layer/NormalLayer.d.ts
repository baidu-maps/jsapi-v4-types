declare namespace BMap {
  /**
   * 样式表达式类型，支持数据驱动样式
     */
  type StyleExpress = string | object | ((properties: object) => any);
}

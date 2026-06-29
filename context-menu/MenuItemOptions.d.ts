declare namespace BMap {
  /**
   * 此类表示MenuItem构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   */
  interface MenuItemOptions {
    /**
     * 指定此菜单项的宽度，菜单以最长的菜单项宽度为准
     */
    width?: number;
    /**
     * 指定此菜单项dom的id
     */
    id?: string;
  }
}

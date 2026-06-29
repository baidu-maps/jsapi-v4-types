declare namespace BMap {
  /**
   * 此类表示一个菜单项。
   */
  class MenuItem {
    /**
     * 创建菜单项。点击菜单项时，以当前菜单弹出的地理坐标点作为参数调用回调函数
     * @param text 菜单项文本
     * @param callback 点击回调函数，参数为地理坐标点
     * @param opts 可选参数
     * @example
     * ```typescript
     * const menuItem = new BMap.MenuItem('标记此处', (point) => {
     *   const marker = new BMap.Marker(point);
     *   map.addOverlay(marker);
     * });
     * ```
     */
    constructor(text: string, callback: Function, opts?: MenuItemOptions);
    /**
     * 设置菜单项显示的文本
     * @param text 菜单项文本
     * @example
     * ```typescript
     * menuItem.setText('新文本');
     * ```
     */
    setText(text: string): void;
    /**
     * 启用菜单项
     */
    enable(): void;
    /**
     * 禁用菜单项
     */
    disable(): void;
  }
}

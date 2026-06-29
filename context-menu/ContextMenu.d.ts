declare namespace BMap {
  /**
   * 此类表示右键菜单，可在地图上添加自定义内容的右键菜单。
   */
  class ContextMenu {
    /**
     * 创建右键菜单实例
     * @example
     * ```typescript
     * const contextMenu = new BMap.ContextMenu();
     * contextMenu.addItem(new BMap.MenuItem('放大', () => map.zoomIn()));
     * contextMenu.addItem(new BMap.MenuItem('缩小', () => map.zoomOut()));
     * map.addContextMenu(contextMenu);
     * ```
     */
    constructor();
    /**
     * 添加菜单项
     * @param item 菜单项
     * @example
     * ```typescript
     * contextMenu.addItem(new BMap.MenuItem('放大', () => map.zoomIn()));
     * ```
     */
    addItem(item: MenuItem): void;
    /**
     * 返回指定索引位置的菜单项，索引从0开始
     * @param index 菜单项索引
     * @example
     * ```typescript
     * const item = contextMenu.getItem(0);
     * ```
     */
    getItem(index: number): MenuItem;
    /**
     * 移除菜单项
     * @param item 菜单项
     * @example
     * ```typescript
     * const item = contextMenu.getItem(0);
     * contextMenu.removeItem(item);
     * ```
     */
    removeItem(item: MenuItem): void;
    /**
     * 添加分隔符
     */
    addSeparator(): void;
    /**
     * 移除指定索引位置的分隔符，索引从0开始
     * @param index 分隔符索引
     * @example
     * ```typescript
     * contextMenu.removeSeparator(0);
     * ```
     */
    removeSeparator(index: number): void;
  }
}

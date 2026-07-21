declare namespace BMap {
  /**
   * 右键菜单事件对象
   */
  interface ContextMenuEvent {
    /** 事件类型名称 */
    type: string;
    /** 派发事件的右键菜单实例 */
    target: ContextMenu;
    /** 当前处理事件的右键菜单实例 */
    currentTarget: ContextMenu;
    /** 菜单触发位置的画面像素坐标 */
    pixel: Pixel | null;
    /** 菜单触发位置的经纬度坐标 */
    point: Point | null;
    /**
     * 菜单触发位置的内部墨卡托坐标
     */
    pointMC: Point | null;
  }

  /**
   * ContextMenu 支持的事件名与事件对象类型映射
   */
  interface ContextMenuEventMap {
    /** 菜单打开时触发 */
    open: ContextMenuEvent;
    /** 菜单关闭时触发 */
    close: ContextMenuEvent;
  }

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
     * @param insertIndex 插入位置索引，-1 或不传时追加到末尾
     * @example
     * ```typescript
     * contextMenu.addItem(new BMap.MenuItem('放大', () => map.zoomIn()));
     * ```
     */
    addItem(item: MenuItem, insertIndex?: number): void;
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
    /**
     * 返回右键菜单的 DOM 容器元素
     */
    getDom(): HTMLElement;
    /**
     * 显示右键菜单
     */
    show(): void;
    /**
     * 隐藏右键菜单
     */
    hide(): void;
    /**
     * 设置菜单打开时地图容器的鼠标指针样式
     * @param cursor CSS cursor 值
     */
    setCursor(cursor: string): void;
    /**
     * 添加事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     */
    addEventListener<K extends keyof ContextMenuEventMap>(event: K, handler: (e: ContextMenuEventMap[K]) => void): void;
    /**
     * 移除事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     */
    removeEventListener<K extends keyof ContextMenuEventMap>(event: K, handler: (e: ContextMenuEventMap[K]) => void): void;
  }
}

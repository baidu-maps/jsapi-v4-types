declare namespace BMap {
  /**
   * 自动完成检索完成回调函数的参数对象
   */
  interface AutocompleteResult {
    /**
     * 检索关键字
     */
    keyword?: string;
    /**
     * 获取某条结果
     * @param i 结果索引，从0开始
     */
    getPoi(i: number): AutocompleteResultPoi;
    /**
     * 获取当前结果总数
     */
    getNumPois(): number;
  }
}

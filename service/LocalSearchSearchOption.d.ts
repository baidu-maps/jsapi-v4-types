declare namespace BMap {
  /**
   * LocalSearch.search() 方法的附加选项
   */
  interface LocalSearchSearchOption {
    /**
     * 是否强制在当前城市内搜索，不跳转到其他城市的结果
     */
    forceLocal?: boolean;
  }
}

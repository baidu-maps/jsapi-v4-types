declare namespace BMap {
  /**
   * 表示 LocalSearch 的检索结果，通过 LocalSearch.getResults() 或 onSearchComplete 回调获得
   */
  interface LocalResult {
    /**
     * 本次检索的关键词
     */
    keyword: string;
    /**
     * 周边检索的中心点（仅周边检索时有值）
     */
    center?: Point;
    /**
     * 周边检索的半径（仅周边检索时有值）
     */
    radius?: number;
    /**
     * 范围检索的地理区域（仅范围检索时有值）
     */
    bounds?: Bounds;
    /**
     * 本次检索所在的城市
     */
    city: string;
    /**
     * 本次检索所在的省份
     */
    province: string;
    /**
     * 更多结果的链接，到百度地图进行搜索
     */
    moreResultsUrl?: string;
    /**
     * 搜索建议列表（当关键词为拼音或拼写错误时给出的搜索建议）
     */
    suggestions?: string[];
    /**
     * 返回索引指定的结果，索引 0 表示第 1 条
     * @param i 结果索引
     */
    getPoi(i: number): LocalResultPoi | undefined;
    /**
     * 返回当前页的结果数
     */
    getCurrentNumPois(): number;
    /**
     * 返回总结果数
     */
    getNumPois(): number;
    /**
     * 返回总页数
     */
    getNumPages(): number;
    /**
     * 返回当前页码，从 0 开始
     */
    getPageIndex(): number;
    /**
     * 返回城市列表（当检索词在多个城市有结果时）
     */
    getCityList(): Array<{ city: string; numResults: number }>;
  }
}

declare namespace BMap {
  /**
   * 此类表示出租车具体费用信息，没有构造函数，通过对象字面量形式表示。
   */
  interface TaxiFareDetail {
    /**
     * 出租车起步价
     */
    initialFare?: number;
    /**
     * 出租车单价
     */
    unitFare?: number;
    /**
     * 出租车费用总价
     */
    totalFare?: number;
  }
}

declare namespace BMap {
  /**
   * 此类表示出租车费用信息，没有构造函数，通过对象字面量形式表示。
   */
  interface TaxiFare {
    /**
     * 白天费用
     */
    day?: TaxiFareDetail;
    /**
     * 夜间费用。注意，部分城市没有夜间费用，此时此属性为null，且同时白天费用表示全天费用
     */
    night?: TaxiFareDetail;
    /**
     * 出租车里程，单位为米
     */
    distance?: number;
    /**
     * 出租车备注信息
     */
    remark?: string;
  }
}

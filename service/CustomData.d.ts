declare namespace BMap {
  /**
   * 此类表示检索lbs云服务的数据。它没有构造函数，但可通过对象字面量形式表示。 要检索lbs云服务的数据，需要在引用api的时候在参数后加上lbs云平台的key。
   * @deprecated 4.0
   */
  interface CustomData {
    /**
     * lbs云v2接口，可在lbs云平台上查看自己的geotableId
     */
    geotableId?: number;
    /**
     * 空格分隔的多字符串
     */
    tags?: string;
    /**
     * 过滤条件，参考：lbsyun.baidu.com/index.php?title=lbscloud/api/geosearch
     */
    filter?: string;
  }
}

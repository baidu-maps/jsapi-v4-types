declare namespace BMap {
  /**
   * Convertor.translate() 回调函数的参数类型
   */
  interface TranslateResults {
    /**
     * 转换结果状态码，0 表示成功
     */
    status: number;
    /**
     * 转换完成的坐标点数组，顺序与输入一致。仅在 status 为 0（成功）时存在
     */
    points?: Point[];
    /**
     * 转换失败时的错误信息，仅在失败时存在
     */
    message?: string;
  }
}

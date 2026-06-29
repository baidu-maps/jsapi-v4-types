declare namespace BMap {
  /**
   * 此类表示PlaceDetail构造函数的可选参数中的渲染选项。它没有构造函数，但可通过对象字面量形式表示。
   */
  interface PlaceDetailRenderOptions {
    /**
     * 是否显示轮播图，默认 true
     */
    displayCarousel?: boolean;
    /**
     * 是否显示标签，默认 true
     */
    displayTag?: boolean;
    /**
     * 是否显示评分，默认 true
     */
    displayRating?: boolean;
    /**
     * 是否显示人均价格，默认 true
     */
    displayPrice?: boolean;
    /**
     * 是否显示榜单排名，默认 true
     */
    displayBangdan?: boolean;
    /**
     * 是否显示商业标签，默认 true
     */
    displayTradeTag?: boolean;
    /**
     * 是否显示营业时间，默认 true
     */
    displayShopHours?: boolean;
    /**
     * 是否显示联系电话，默认 true
     */
    displayContactInformation?: boolean;
    /**
     * 最多显示的电话数量，默认不限
     */
    contactInformationCount?: number;
    /**
     * 是否显示地址，默认 true
     */
    displayAddress?: boolean;
    /**
     * 是否显示用户评论，默认 false
     */
    displayComment?: boolean;
    /**
     * 是否在评论标题中显示总评论数，默认 true
     */
    displayCommentTotalCount?: boolean;
  }
}

declare namespace BMap {
  /**
   * Panorama 构造函数的可选参数，使用对象字面量形式表示，不可实例化。
   * @category 配置项
   * 
   */
  interface PanoramaOptions {
    /**
     * 是否显示全景的导航控件
     * @default true
     */
    navigationControl?: boolean;
    /**
     * 是否显示道路指示控件
     * @default true
     */
    linksControl?: boolean;
    /**
     * 是否显示全景室内场景的切换控件，仅对室内景生效
     * @default true
     */
    indoorSceneSwitchControl?: boolean;
    /**
     * 是否显示相册控件
     * @default false
     */
    albumsControl?: boolean;
    /**
     * 全景相册控件配置参数
     */
    albumsControlOptions?: AlbumsControlOptions;
  }
}

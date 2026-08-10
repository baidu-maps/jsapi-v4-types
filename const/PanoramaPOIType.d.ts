declare namespace BMap {
  /**
   * 常量表示要在全景内显示的poi类型。
   * 
   */
  type PanoramaPOIType = 'hotel' | 'catering' | 'movie' | 'transit' | 'indoor_scene' | 'none';
}

/** 全景内显示酒店 POI */
declare const BMAP_PANORAMA_POI_HOTEL: 'hotel';
/** 全景内显示餐饮 POI */
declare const BMAP_PANORAMA_POI_CATERING: 'catering';
/** 全景内显示电影院 POI */
declare const BMAP_PANORAMA_POI_MOVIE: 'movie';
/** 全景内显示公交、地铁 POI */
declare const BMAP_PANORAMA_POI_TRANSIT: 'transit';
/** 全景内显示室内场景 POI */
declare const BMAP_PANORAMA_POI_INDOOR_SCENE: 'indoor_scene';
/** 隐藏全部全景 POI */
declare const BMAP_PANORAMA_POI_NONE: 'none';

/**
 * 简体中文
 */
declare const BMAP_LANGUAGE_ZH: 'zh';

/**
 * 英语
 */
declare const BMAP_LANGUAGE_EN: 'en';

/**
 * 繁体中文
 */
declare const BMAP_LANGUAGE_ZH_TW: 'zh-TW';

/**
 * 西班牙语
 */
declare const BMAP_LANGUAGE_ES: 'es';

/**
 * 葡萄牙语
 */
declare const BMAP_LANGUAGE_PT: 'pt';

/**
 * 法语
 */
declare const BMAP_LANGUAGE_FR: 'fr';

/**
 * 德语
 */
declare const BMAP_LANGUAGE_DE: 'de';

/**
 * 泰语
 */
declare const BMAP_LANGUAGE_TH: 'th';

/**
 * 日语
 */
declare const BMAP_LANGUAGE_JA: 'ja';

/**
 * 韩语
 */
declare const BMAP_LANGUAGE_KO: 'ko';

/**
 * 土耳其语
 */
declare const BMAP_LANGUAGE_TR: 'tr';

/**
 * 意大利语
 */
declare const BMAP_LANGUAGE_IT: 'it';

/**
 * 俄语
 */
declare const BMAP_LANGUAGE_RU: 'ru';

/**
 * 马来语
 */
declare const BMAP_LANGUAGE_MS: 'ms';

/**
 * 越南语
 */
declare const BMAP_LANGUAGE_VI: 'vi';

/**
 * 印尼语
 */
declare const BMAP_LANGUAGE_ID: 'id';

/**
 * 地图显示语言，使用 `BMAP_LANGUAGE_*` 常量传入
 * @example
 * ```typescript
 * map.enablePreferredLanguage(BMAP_LANGUAGE_EN);
 * ```
 */
type Language =
  | typeof BMAP_LANGUAGE_ZH
  | typeof BMAP_LANGUAGE_EN
  | typeof BMAP_LANGUAGE_ZH_TW
  | typeof BMAP_LANGUAGE_ES
  | typeof BMAP_LANGUAGE_PT
  | typeof BMAP_LANGUAGE_FR
  | typeof BMAP_LANGUAGE_DE
  | typeof BMAP_LANGUAGE_TH
  | typeof BMAP_LANGUAGE_JA
  | typeof BMAP_LANGUAGE_KO
  | typeof BMAP_LANGUAGE_TR
  | typeof BMAP_LANGUAGE_IT
  | typeof BMAP_LANGUAGE_RU
  | typeof BMAP_LANGUAGE_MS
  | typeof BMAP_LANGUAGE_VI
  | typeof BMAP_LANGUAGE_ID;

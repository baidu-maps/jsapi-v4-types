/**
 * 检索成功
 */
declare const BMAP_STATUS_SUCCESS: 0;

/**
 * 城市列表
 */
declare const BMAP_STATUS_CITY_LIST: 1;

/**
 * 位置未知
 */
declare const BMAP_STATUS_UNKNOWN_LOCATION: 2;

/**
 * 导航未知
 */
declare const BMAP_STATUS_UNKNOWN_ROUTE: 3;

/**
 * 非法密钥
 */
declare const BMAP_STATUS_INVALID_KEY: 4;

/**
 * 非法请求
 */
declare const BMAP_STATUS_INVALID_REQUEST: 5;

/**
 * 没有权限
 */
declare const BMAP_STATUS_PERMISSION_DENIED: 6;

/**
 * 服务不可用
 */
declare const BMAP_STATUS_SERVICE_UNAVAILABLE: 7;

/**
 * 超时
 */
declare const BMAP_STATUS_TIMEOUT: 8;

/**
 * 服务状态码，使用 `BMAP_STATUS_*` 常量
 */
type ServiceStatus =
  | typeof BMAP_STATUS_SUCCESS
  | typeof BMAP_STATUS_CITY_LIST
  | typeof BMAP_STATUS_UNKNOWN_LOCATION
  | typeof BMAP_STATUS_UNKNOWN_ROUTE
  | typeof BMAP_STATUS_INVALID_KEY
  | typeof BMAP_STATUS_INVALID_REQUEST
  | typeof BMAP_STATUS_PERMISSION_DENIED
  | typeof BMAP_STATUS_SERVICE_UNAVAILABLE
  | typeof BMAP_STATUS_TIMEOUT;

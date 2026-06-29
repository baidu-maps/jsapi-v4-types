# @baidumap/jsapi-v4-types

[![npm version](https://img.shields.io/npm/v/@baidumap/jsapi-v4-types.svg)](https://www.npmjs.com/package/@baidumap/jsapi-v4-types)
[![license](https://img.shields.io/npm/l/@baidumap/jsapi-v4-types.svg)](https://github.com/baidu-maps/jsapi-v4-types/blob/main/LICENSE)

百度地图 JSAPI 4.0 TypeScript 类型声明，提供 `BMap` 命名空间下所有类、接口、常量的完整类型定义。

## 安装

```bash
npm install -D @baidumap/jsapi-v4-types
```

安装后即可在项目中获得 `BMap` 命名空间的完整类型提示，无需额外配置。

> 如果你的 `tsconfig.json` 中已显式配置了 `compilerOptions.types`，则需要将包名加入该数组：
>
> ```json
> {
>   "compilerOptions": {
>     "types": ["@baidumap/jsapi-v4-types"]
>   }
> }
> ```

## 引入地图 JSAPI

在 HTML 中通过 script 标签引入：

```html
<script type="text/javascript" src="https://api.map.baidu.com/api?v=4.0&ak=你的密钥"></script>
```

引入后全局即可使用 `BMap` 命名空间。密钥申请地址：https://lbsyun.baidu.com/apiconsole/key

## 示例

```typescript
// 初始化地图
const map = new BMap.Map('container');
map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
map.enableScrollWheelZoom();

// 添加面图层
const fillLayer = new BMap.FillLayer({
  style: { fillColor: 'rgba(0, 100, 255, 0.4)' },
});
map.addLayer(fillLayer);

// 添加标注
const marker = new BMap.Marker(new BMap.Point(116.404, 39.915));
map.addOverlay(marker);
```

## 文档

- [百度地图开放平台](https://lbs.baidu.com)
- [百度地图 JSAPI 4.0 官方文档](https://lbs.baidu.com/docs/jsapi?title=jsapi4/index)
- [API 参考文档](https://github.com/baidu-maps/jsapi-v4-types)

## 兼容性

- TypeScript >= 4.5
- 适用于百度地图 JSAPI v4.0

## API 概览

### 核心

| 类名 | 说明 |
|------|------|
| `Map` | 地图核心类，负责地图初始化、视野控制、图层管理 |
| `Point` | 经纬度坐标点 |
| `Bounds` | 地理矩形范围 |
| `Pixel` | 像素坐标 |
| `Size` | 像素尺寸 |

### 图层（Layer）

| 类名 | 说明 |
|------|------|
| `FillLayer` | 面填充图层，支持纯色、描边、纹理填充 |
| `LineLayer` | 线图层，支持实线、虚线、纹理贴图 |
| `PointIconLayer` | 图标点图层，支持大批量图标点渲染 |
| `PointShapeLayer` | 形状点图层，支持圆形/三角/矩形等形状 |
| `TileLayer` | 自定义瓦片图层，加载百度坐标系瓦片 |
| `XYZLayer` | 第三方标准瓦片图层（XYZ/WMTS/WMS/TMS），内置坐标转换 |
| `DistrictLayer` | 行政区划图层 |
| `GeoJSONLayer` | GeoJSON 数据图层 |
| `TrafficLayer` | 实时交通路况图层 |
| `DOMLayer` | 自定义 DOM 覆盖物图层 |
| `MVTLayer` | 矢量瓦片图层 |

### 覆盖物（Overlay）

| 类名 | 说明 |
|------|------|
| `Marker` | 点标注 |
| `Label` | 文本标注 |
| `Polyline` | 折线 |
| `Polygon` | 多边形 |
| `Circle` | 圆形 |
| `InfoWindow` | 信息窗口 |
| `CustomOverlay` | 自定义覆盖物 |
| `GroundOverlay` | 地面叠加层（图片/Canvas） |
| `Prism` | 3D 棱柱体 |
| `BezierCurve` | 贝塞尔曲线 |

### 控件（Control）

| 类名 | 说明 |
|------|------|
| `NavigationControl` | 平移缩放控件 |
| `NavigationControl3D` | 3D 导航控件 |
| `ScaleControl` | 比例尺控件 |
| `ZoomControl` | 缩放控件 |
| `MapTypeControl` | 地图类型切换控件 |
| `GeolocationControl` | 定位控件 |
| `CityListControl` | 城市选择控件 |
| `PanoramaControl` | 全景控件 |

### 服务（Service）

| 类名 | 说明 |
|------|------|
| `LocalSearch` | 地点检索 |
| `Geocoder` | 地址解析/逆解析 |
| `DrivingRoute` | 驾车路线规划 |
| `WalkingRoute` | 步行路线规划 |
| `RidingRoute` | 骑行路线规划 |
| `TransitRoute` | 公交路线规划 |
| `Autocomplete` | 输入建议 |
| `Boundary` | 行政区划边界 |
| `Geolocation` | 浏览器定位 |
| `LocalCity` | 当前城市定位 |
| `BusLineSearch` | 公交线路查询 |

### 动画

| 类名 | 说明 |
|------|------|
| `ViewAnimation` | 地图视角关键帧动画 |

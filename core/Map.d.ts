declare namespace BMap {
  /**
   * 此类是地图API的核心类，用来实例化一个地图。
   */
  class Map {
    /**
     * 在指定的容器内创建地图实例，之后需要调用Map.centerAndZoom()方法对地图进行初始化。未进行初始化的地图将不能进行任何操作。
     * @param container Map对象的容器可以是DOM元素对象或容器的ID
     * @param options 地图初始化选项
     * @example
     * ```typescript
     * const map = new BMap.Map('container');
     * ```
     * @example
     * ```typescript
     * const map = new BMap.Map('container', {
     *   center: new BMap.Point(116.378351, 39.89585),
     *   zoom: 18,
     *   enableScrollWheelZoom: true
     * });
     * ```
     */
    constructor(container: string | HTMLElement, options: MapOptions);
    /**
     * 启用地图拖拽，默认启用
     */
    enableDragging(): void;
    /**
     * 禁用地图拖拽
     */
    disableDragging(): void;
    /**
     * 启用地图惯性拖拽，默认禁用
     */
    enableInertialDragging(): void;
    /**
     * 禁用地图惯性拖拽
     */
    disableInertialDragging(): void;
    /**
     * 允许地图可被鼠标滚轮缩放，默认禁用
     */
    enableScrollWheelZoom(): void;
    /**
     * 禁止地图被鼠标滚轮缩放
     */
    disableScrollWheelZoom(): void;
    /**
     * 开启双击平滑缩放效果
     */
    enableContinuousZoom(): void;
    /**
     * 关闭双击平滑缩放效果
     */
    disableContinuousZoom(): void;
    /**
     * 开启图区resize中心点不变
     */
    enableResizeOnCenter(): void;
    /**
     * 关闭图区resize中心点不变
     */
    disableResizeOnCenter(): void;
    /**
     * 启用地图双击缩放，左键双击放大、右键双击缩小
     */
    enableDoubleClickZoom(): void;
    /**
     * 取消地图双击缩放
     */
    disableDoubleClickZoom(): void;
    /**
     * 启用键盘操作，默认禁用。键盘的上、下、左、右键可连续移动地图。同时按下其中两个键可使地图进行对角移动。PgUp、PgDn、Home和End键会使地图平移其1/2的大小。+、-键会使地图放大或缩小一级
     */
    enableKeyboard(): void;
    /**
     * 禁用键盘操作
     */
    disableKeyboard(): void;
    /**
     * 启用双指缩放地图。
     */
    enablePinchToZoom(): void;
    /**
     * 禁用双指缩放地图。
     */
    disablePinchToZoom(): void;
    /**
     * 启用地图旋转
     */
    enableRotate(): void;
    /**
     * 禁用地图旋转
     */
    disableRotate(): void;
    /**
     * 启用手势旋转地图
     */
    enableRotateGestures(): void;
    /**
     * 禁用手势旋转地图
     */
    disableRotateGestures(): void;
    /**
     * 启用地图倾斜
     */
    enableTilt(): void;
    /**
     * 禁用地图倾斜
     */
    disableTilt(): void;
    /**
     * 启用手势倾斜地图
     */
    enableTiltGestures(): void;
    /**
     * 禁用手势倾斜地图
     */
    disableTiltGestures(): void;
    /**
     * 设置地图旋转角度
     * @param heading 旋转角度，单位为度，取值范围 0~360
     * @example
     * ```typescript
     * map.setHeading(45);
     * ```
     */
    setHeading(heading: number): void;
    /**
     * 获取地图当前旋转角度
     */
    getHeading(): number;
    /**
     * 设置地图的倾斜角度
     * @param tilt 倾斜角度，单位为度，取值范围 0~73
     * @example
     * ```typescript
     * map.setTilt(45);
     * ```
     */
    setTilt(tilt: number): void;
    /**
     * 获取地图当前倾斜角度
     */
    getTilt(): number;
    /**
     * 获取地图允许的最大缩放级别
     */
    getMaxZoom(): number;
    /**
     * 获取地图允许的最小缩放级别
     */
    getMinZoom(): number;
    /**
     * 启用自动适应容器尺寸变化，默认启用
     */
    enableAutoResize(): void;
    /**
     * 禁用自动适应容器尺寸变化
     */
    disableAutoResize(): void;
    /**
     * 地图容器变化后调用此方法用来重新铺图
     */
    checkResize(): void;
    /**
     * 设置地图元素显示选项
     * @param options 显示选项配置，可控制POI、路况、3D建筑等图层的显示状态
     * @example
     * ```typescript
     * map.setDisplayOptions({
     *   poiText: false,
     *   poiIcon: false
     * });
     * ```
     */
    setDisplayOptions(options: DisplayOptions): void;
    /**
     * 返回地图当前尺寸，以像素表示
     */
    getSize(): Size;
    /**
     * 获取地图容器尺寸
     */
    getContainerSize(): Size;
    /**
     * 返回当前地图级别，一个像素对应多少单位的平面墨卡托坐标
     */
    getZoomUnits(): number;
    /**
     * 返回地图的DOM容器元素。当创建用户自定义控件时，需要自行实现Control.initialize()方法，并将控件的容器元素添加到地图上，通过此方法可获得地图容器
     */
    getContainer(): HTMLElement;
    /**
     * 像素坐标转换为经纬度坐标
     * @param pixel 地图像素坐标
     * @example
     * ```typescript
     * const point = map.pixelToPoint(new BMap.Pixel(100, 200));
     * ```
     */
    pixelToPoint(pixel: Pixel): Point;
    /**
     * 经纬度坐标转换为像素坐标
     * @param point 地理坐标点
     * @example
     * ```typescript
     * const pixel = map.pointToPixel(new BMap.Point(116.404, 39.915));
     * ```
     */
    pointToPixel(point: Point): Pixel;
    /**
     * 经纬度球体坐标转换为墨卡托平面坐标
     * @param lng 经度
     * @param lat 纬度
     * @example
     * ```typescript
     * const mc = map.lnglatToMercator(116.404, 39.915);
     * ```
     */
    lnglatToMercator(lng: number, lat: number): [number, number];
    /**
     * 墨卡托平面坐标转换为经纬度球体坐标
     * @param mcLng 墨卡托经度
     * @param mcLat 墨卡托纬度
     * @example
     * ```typescript
     * const lnglat = map.mercatorToLnglat(12958190, 4825923);
     * ```
     */
    mercatorToLnglat(mcLng: number, mcLat: number): [number, number];
    /**
     * 返回地图是否经过centerAndZoom进行初始化
     */
    isLoaded(): boolean;
    /**
     * 清空当前map所有的自定义底图标注
     */
    clearLabels(): void;
    /**
     * 在底图上添加文字，这些文字会和底图文字一同参与避让。
     * @param labels 底图标注数组
     * @example
     * ```typescript
     * map.addMapLabels([
     *   {
     *     name: '自定义标注',
     *     position: new BMap.Point(116.404, 39.915)
     *   }
     * ]);
     * ```
     * @example
     * ```typescript
     * map.addMapLabels([
     *   {
     *      position: new BMap.Point(116, 39),
     *      name: '自定义标注2',
     *      displayRange: [3, 21],
     *      textMargin: 8,
     *       style: {
     *          fontSize: 30,
     *           haloSize: 2,
     *           color: 'rgba(80,92,88,1)',
     *           strokeColor: '#fff'
     *       },
     *       uid: 'fd7e3d0c879487d4c7f025be',
     *       direction: 3
     *   }
     * ]);
     * ```
     */
    addMapLabels(labels: MapLabel[]): void;
    /**
     * 从底图上移除文字标注，参数为uid数组，根据数组里的uid进行移除
     * @param labelUids 要移除的标注uid数组
     * @example
     * ```typescript
     * map.removeMapLabels(['uid-001', 'uid-002']);
     * ```
     */
    removeMapLabels(labelUids: string[]): void;
    /**
     * 设置地图可拖动区域，参数为地图拖拽的区域范围
     * @param bounds 允许拖动的地理范围
     * @example
     * ```typescript
     * map.setBounds(new BMap.Bounds(
     *   new BMap.Point(115.7, 39.4),
     *   new BMap.Point(117.4, 41.2)
     * ));
     * ```
     */
    setBounds(bounds: Bounds): void;
    /**
     * 限制地图显示范围
     * @param bounds 地图可显示的地理范围
     * @example
     * ```typescript
     * map.restrictBounds(new BMap.Bounds(
     *   new BMap.Point(115.7, 39.4),
     *   new BMap.Point(117.4, 41.2)
     * ));
     * ```
     */
    restrictBounds(bounds: Bounds): void;
    /**
     * 获取地图当前视野范围的矩形区域，以地理坐标表示。如果地图尚未初始化则返回一个空的 `Bounds` 实例。
     */
    getBounds(): Bounds;
    /**
     * 获取地图坐标类型，为CoordType常量
     */
    getCoordType(): string;
    /**
     * 启用首选语言
     * @param language 语言代码，使用 `BMAP_LANGUAGE_*` 常量
     * @example
     * ```typescript
     * map.enablePreferredLanguage(BMAP_LANGUAGE_EN);
     * ```
     */
    enablePreferredLanguage(language: Language): void;
    /**
     * 禁用首选语言
     */
    disablePreferredLanguage(): void;
    /**
     * 获取覆盖物容器元素，返回地图覆盖物容器对象
     */
    getPanes(): MapPanes;
    /**
     * 获取当前打开的信息窗口实例，如果当前地图没有处于打开状态信息窗口，则返回 `null`
     */
    getInfoWindow(): InfoWindow | null;
    /**
     * 设置地图默认的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
     * @param cursor CSS cursor 属性值，如 'pointer'、'crosshair'
     * @example
     * ```typescript
     * map.setDefaultCursor('crosshair');
     * ```
     */
    setDefaultCursor(cursor: string): void;
    /**
     * 获取地图默认的鼠标指针样式，返回cursor值
     */
    getDefaultCursor(): string;
    /**
     * 设置拖拽地图时的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
     * @param cursor CSS cursor 属性值，如 'move'、'grab'
     * @example
     * ```typescript
     * map.setDraggingCursor('grab');
     * ```
     */
    setDraggingCursor(cursor: string): void;
    /**
     * 返回拖拽地图时的鼠标指针样式
     */
    getDraggingCursor(): string;
    /**
     * 设置地图允许的最小级别。取值不得小于地图类型所允许的最小级别
     * @param zoom 最小缩放级别
     * @example
     * ```typescript
     * map.setMinZoom(5);
     * ```
     */
    setMinZoom(zoom: number): void;
    /**
     * 设置地图允许的最大级别。取值不得大于地图类型所允许的最大级别
     * @param zoom 最大缩放级别
     * @example
     * ```typescript
     * map.setMaxZoom(18);
     * ```
     */
    setMaxZoom(zoom: number): void;
    /**
     * 返回两点之间的距离，单位是米
     * @param start 起点地理坐标
     * @param end 终点地理坐标
     * @example
     * ```typescript
     * const dist = map.getDistance(
     *   new BMap.Point(116.404, 39.915),
     *   new BMap.Point(117.200, 39.084)
     * );
     * console.log(`距离：${dist.toFixed(0)} 米`);
     * ```
     */
    getDistance(start: Point, end: Point): number;
    /**
     * 返回地图类型
     */
    getMapType(): MapTypeId;
    /**
     * 根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标
     * @param view 地理坐标数组或视野对象
     * @param viewportOptions 视野调整选项
     * @example
     * ```typescript
     * map.setViewport([
     *   new BMap.Point(116.404, 39.915),
     *   new BMap.Point(117.200, 39.084)
     * ]);
     * ```
     * @example
     * ```typescript
     * map.setViewport(
     *   [
     *     new BMap.Point(116.404, 39.915),
     *     new BMap.Point(117.200, 39.084)
     *   ],
     *   {
     *     margins: [50, 50, 50, 50],
     *     zoomFactor: -1
     *   }
     * );
     * ```
     */
    setViewport(view: Array<Point> | Viewport, viewportOptions?: ViewportOptions): void;
    /**
     * 根据提供的地理区域或坐标获得最佳的地图视野，返回的对象中包含center和zoom属性，分别表示地图的中心点和级别。此方法仅返回视野信息，不会将新的中心点和级别做用到当前地图上
     * @param view 地理坐标数组
     * @param viewportOptions 视野计算选项
     * @example
     * ```typescript
     * const vp = map.getViewport([
     *   new BMap.Point(116.404, 39.915),
     *   new BMap.Point(117.200, 39.084)
     * ]);
     * console.log(vp.center, vp.zoom);
     * ```
     * @example
     * ```typescript
     * const vp = map.getViewport(
     *   [
     *     new BMap.Point(116.404, 39.915),
     *     new BMap.Point(117.200, 39.084)
     *   ],
     *   {
     *     margins: [50, 50, 50, 50]
     *   }
     * );
     * console.log(vp.center, vp.zoom);
     * ```
     */
    getViewport(view: Array<Point>, viewportOptions?: ViewportOptions): Viewport;
    /**
     * 同时设置地图的中心点和缩放级别。 如果center类型为Point时，zoom必须赋值。如果center类型为字符串时，比如"北京"，zoom可以忽略，地图将自动根据center适配最佳zoom级别。默认无动画效果。
     * @param center 地图中心点坐标或城市名称
     * @param zoom 缩放级别
     * @param options 可选配置参数
     * @example
     * ```typescript
     * map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
     * ```
     * @example 使用地址字符串作为中心点
     * ```typescript
     * map.centerAndZoom('北京', 12);
     * ```
     * @example启用动画
     * ```typescript
     * map.centerAndZoom(new BMap.Point(116.404, 39.915), 15, {
     *   noAnimation: false
     * });
     * ```
     * @example设置动画完成后的回调
     * ```typescript
     * map.centerAndZoom(new BMap.Point(116.404, 39.915), 15, {
     *   noAnimation: false,
     *   callback: () => console.log('动画完成')
     * });
     * ```
     */
    centerAndZoom(center: Point | string, zoom: number, options?: {
      /**
       * 是否禁用动画效果
       * @default true
       */
      noAnimation?: boolean;
      /** 动画完成后的回调函数 */
      callback?: () => void;
    }): void;
    /**
     * 将地图的中心点更改为给定的点，跳转到指定中心点进行渲染。如果该点在当前的地图视图中已经可见，则会以平滑动画的方式移动到中心点位置。 可以通过配置强制移动过程不使用动画效果
     * @param center 目标中心点坐标
     * @param options 可选配置参数
     * @example
     * ```typescript
     * map.panTo(new BMap.Point(116.404, 39.915));
     * ```
     * @example禁用动画
     * ```typescript
     * map.panTo(new BMap.Point(116.404, 39.915), {
     *   noAnimation: true
     * });
     * ```
     * @example设置动画持续时间
     * ```typescript
     * map.panTo(new BMap.Point(116.404, 39.915), {
     *   duration: 800
     * });
     * ```
     * @example设置动画完成后的回调
     * ```typescript
     * map.panTo(new BMap.Point(116.404, 39.915), {
     *   callback: () => console.log('移动完成')
     * });
     * ```
     */
    panTo(center: Point, options?: {
      /**
       * 是否禁用动画效果
       * @default false
       */
      noAnimation?: boolean;
      /** 动画持续时间，单位ms */
      duration?: number;
      /** 动画完成后的回调函数 */
      callback?: () => void;
    }): void;
    /**
     * 将地图在水平位置上移动x像素，垂直位置上移动y像素。如果指定的像素大于可视区域范围或者在配置中指定没有动画效果，则不执行滑动效果
     * @param x 水平方向移动的像素数，正值向右
     * @param y 垂直方向移动的像素数，正值向下
     * @example
     * ```typescript
     * map.panBy(100, -50);
     * ```
     */
    panBy(x: number, y: number): void;
    /**
     * 飞到指定的中心点和级别，提供给定位缩放地图使用
     * @param center 目标中心点
     * @param zoom 目标缩放级别
     * @param options 可选配置参数
     * @example
     * ```typescript
     * map.flyTo(new BMap.Point(116.404, 39.915), 15);
     * ```
     * @example
     * ```typescript
     * map.flyTo(new BMap.Point(116.404, 39.915), 15, {
     *   callback: () => console.log('飞行完成')
     * });
     * ```
     */
    flyTo(center: Point, zoom: number, options?: {
      /** 是否禁用动画效果 */
      noAnimation?: boolean;
      /** 动画结束后的回调函数 */
      callback?: () => void;
    }): void;
    /**
     * 重新设置地图，恢复地图初始化时的中心点和级别
     */
    reset(): void;
    /**
     * 设置地图中心点。center除了可以为坐标点以外，还支持城市名。
     * @param center 地图中心点坐标或城市名称
     * @param options 可选配置参数
     * @example
     * ```typescript
     * map.setCenter(new BMap.Point(116.404, 39.915));
     * ```
     * @example
     * ```typescript
     * map.setCenter(new BMap.Point(116.404, 39.915), {
     *   noAnimation: false,
     *   callback: () => console.log('移动完成')
     * });
     * ```
     */
    setCenter(center: Point | string, options?: {
      /**
       * 是否禁用动画效果
       * @default true
       */
      noAnimation?: boolean;
      /** 动画结束后调用此方法，如果没有动画则立即调用 */
      callback?: () => void;
    }): void;
    /**
     * 返回地图当前中心点
     */
    getCenter(): Point;
    /**
     * 设置地图类型
     * @param mapTypeId 地图类型常量
     * @example
     * ```typescript
     * map.setMapType(BMAP_SATELLITE_MAP);
     * ```
     */
    setMapType(mapTypeId: MapTypeId): void;
    /**
     * 将视图切换到指定的缩放等级，中心点坐标不变。注意：当有信息窗口在地图上打开时，地图缩放将保证信息窗口所在的坐标位置不动。
     * @param zoom 目标缩放级别
     * @param options 可选配置参数
     * @example
     * ```typescript
     * map.setZoom(15);
     * ```
     * @example
     * ```typescript
     * map.setZoom(15, {
     *   zoomCenter: new BMap.Point(116.404, 39.915),
     *   callback: () => console.log('缩放完成')
     * });
     * ```
     */
    setZoom(zoom: number, options?: {
      /** 是否禁用动画效果 */
      noAnimation?: boolean;
      /** 动画结束后会调用此方法，如果没有动画则立即调用 */
      callback?: () => void;
      /** 缩放中心点
       * @default 地图中心点
       */
      zoomCenter?: Point;
    }): void;
    /**
     * 返回地图当前缩放级别
     */
    getZoom(): number;
    /**
     * 放大一级视图
     */
    zoomIn(): void;
    /**
     * 缩小一级视图
     */
    zoomOut(): void;
    /**
     * 将控件添加到地图，一个控件实例只能向地图中添加一次
     * @param control 控件实例
     * @example
     * ```typescript
     * map.addControl(new BMap.NavigationControl());
     * ```
     */
    addControl(control: Control): void;
    /**
     * 从地图中移除控件。如果控件从未被添加到地图中，则该移除不起任何作用
     * @param control 要移除的控件实例
     * @example
     * ```typescript
     * const navigationControl = new BMap.NavigationControl();
     * map.addControl(navigationControl);
     * setTimeout(() => {
     *   map.removeControl(navigationControl);
     * }, 2000);
     * ```
     */
    removeControl(control: Control): void;
    /**
     * 添加右键菜单
     * @param menu 右键菜单实例
     * @example
     * ```typescript
     * const contextMenu = new BMap.ContextMenu();
     * contextMenu.addItem(new BMap.MenuItem('放大', () => map.zoomIn()));
     * map.addContextMenu(contextMenu);
     * ```
     */
    addContextMenu(menu: ContextMenu): void;
    /**
     * 移除右键菜单
     * @param menu 要移除的右键菜单实例
     * @example
     * ```typescript
     * const contextMenu = new BMap.ContextMenu();
     * contextMenu.addItem(new BMap.MenuItem('放大', () => map.zoomIn()));
     * map.addContextMenu(contextMenu);
     * setTimeout(() => {
     *   map.removeContextMenu(contextMenu);
     * }, 2000);
     * ```
     */
    removeContextMenu(menu: ContextMenu): void;
    /**
     * 将覆盖物添加到地图中，一个覆盖物实例只能向地图中添加一次
     * @param overlay 覆盖物实例
     * @example
     * ```typescript
     * const marker = new BMap.Marker(new BMap.Point(116.404, 39.915));
     * map.addOverlay(marker);
     * ```
     */
    addOverlay(overlay: Overlay): void;
    /**
     * 从地图中移除覆盖物。如果覆盖物从未被添加到地图中，则该移除不起任何作用
     * @param overlay 要移除的覆盖物实例
     * @example
     * ```typescript
     * const marker = new BMap.Marker(new BMap.Point(116.404, 39.915));
     * map.addOverlay(marker);
     * setTimeout(() => {
     *   map.removeOverlay(marker);
     * }, 2000);
     * ```
     */
    removeOverlay(overlay: Overlay): void;
    /**
     * 清除地图上所有覆盖物
     */
    clearOverlays(): void;
    /**
     * 根据地理坐标获取对应的覆盖物容器的坐标，此方法用于自定义覆盖物
     * @param point 地理坐标点
     * @example
     * ```typescript
     * const pixel = map.pointToOverlayPixel(new BMap.Point(116.404, 39.915));
     * ```
     */
    pointToOverlayPixel(point: Point): Pixel;
    /**
     * 根据覆盖物容器的坐标获取对应的地理坐标
     * @param pixel 覆盖物容器像素坐标
     * @example
     * ```typescript
     * const point = map.overlayPixelToPoint(new BMap.Pixel(100, 200));
     * ```
     */
    overlayPixelToPoint(pixel: Pixel): Point;
    /**
     * 获取当前地图上的所有覆盖物，返回覆盖物对象的集合
     */
    getOverlays(): Overlay[];
    /**
     * 返回地图覆盖物容器列表
     */
    getPanes(): MapPanes;
    /**
     * 获取当前地图允许的最大倾斜角度
     */
    getCurrentMaxTilt(): number;
    /**
     * 显示覆盖物
     */
    showOverlayContainer(): void;
    /**
     * 不显示覆盖物
     */
    hideOverlayContainer(): void;
    /**
     * 设置个性化地图，参数为个性化配置对象，支持通过 styleId、styleJson两种设置个性化地图样式。
     * styleId和 styleJson 的获取地址：https://lbsyun.baidu.com/apiconsole/custommap。
     * styleId必须由AK所属账号创建，否则将无权限获取样式。
     * @param config 个性化地图样式配置对象
     * @example 使用 styleId
     * ```typescript
     * map.setMapStyleV2({ styleId: 'your-style-id' });
     * ```
     * @example 使用 styleId，并启用 v3 样式（支持室内图）
     * ```typescript
     * map.setMapStyleV2({ styleId: 'your-style-id', version: 'v3' });
     * ```
     * @example 使用 styleJson 内联样式（通过个性化编辑器导出的 JSON）
     * ```typescript
     * map.setMapStyleV2({
     *   styleJson: [
     *     { featureType: 'land', elementType: 'geometry', stylers: { color: '#f5f4f4ff' } },
     *     { featureType: 'water', elementType: 'geometry', stylers: { color: '#86cee6ff' } },
     *     { featureType: 'green', elementType: 'geometry', stylers: { color: '#c1efc2ff' } },
     *     { featureType: 'road', elementType: 'geometry.fill', stylers: { color: '#a4bacfff' } },
     *     { featureType: 'local', elementType: 'geometry.fill', stylers: { color: '#d9e2f3ff' } },
     *     { featureType: 'fourlevelway', elementType: 'geometry.fill', stylers: { color: '#d9e2f3ff' } },
     *     { featureType: 'road', elementType: 'geometry.stroke', stylers: { color: '#e2e2e2ff' } }
     *   ]
     * });
     * ```
     */
    setMapStyleV2(config: MapStyleConfig): void;
    /**
     * 设置地图 UI 主题。主题通过 CSS 变量控制 UI 控件、服务面板等的配色
     * @param theme 主题名称，内置 'light' 和 'dark'
     * @param customVars 可选的 CSS 变量覆盖对象，未指定的变量回退到主题默认值
     * @example
     * ```typescript
     * map.setTheme('dark');
     * ```
     * @example
     * ```typescript
     * map.setTheme('dark', { '--bmap-color-primary': '#00d2ff' });
     * ```
     */
    setTheme(theme: 'light' | 'dark' | string, customVars?: Record<string, string>): void;
    /**
     * 启动视角动画
     * @param viewAnimation 视角动画实例
     * @example
     * ```typescript
     * const keyFrames = [
     *   {
     *     center: new BMap.Point(116.404, 39.915),
     *     zoom: 11, tilt: 0, heading: 0, percentage: 0
     *   },
     *   {
     *     center: new BMap.Point(116.404, 39.915),
     *     zoom: 18, tilt: 60, heading: 180, percentage: 1
     *   }
     * ];
     * const viewAnimation = new BMap.ViewAnimation(keyFrames, {
     *   duration: 5000
     * });
     * map.startViewAnimation(viewAnimation);
     * ```
     */
    startViewAnimation(viewAnimation: ViewAnimation): number;
    /**
     * 暂停视角动画
     * @param viewAnimation 要暂停的视角动画实例
     * @example
     * ```typescript
     * const viewAnimation = new BMap.ViewAnimation([
     *   { center: new BMap.Point(116.404, 39.915), zoom: 11, tilt: 0, heading: 0, percentage: 0 },
     *   { center: new BMap.Point(116.404, 39.915), zoom: 18, tilt: 60, heading: 180, percentage: 1 }
     * ], { duration: 5000 });
     * map.startViewAnimation(viewAnimation);
     * // 2 秒后暂停
     * setTimeout(() => {
     *   map.pauseViewAnimation(viewAnimation);
     * }, 2000);
     * ```
     */
    pauseViewAnimation(viewAnimation: ViewAnimation): void;
    /**
     * 继续视角动画
     * @param viewAnimation 要继续的视角动画实例
     * @example
     * ```typescript
     * const viewAnimation = new BMap.ViewAnimation([
     *   { center: new BMap.Point(116.404, 39.915), zoom: 11, tilt: 0, heading: 0, percentage: 0 },
     *   { center: new BMap.Point(116.404, 39.915), zoom: 18, tilt: 60, heading: 180, percentage: 1 }
     * ], { duration: 5000 });
     * map.startViewAnimation(viewAnimation);
     * // 2 秒后暂停，再 2 秒后继续
     * setTimeout(() => {
     *   map.pauseViewAnimation(viewAnimation);
     *   setTimeout(() => {
     *     map.continueViewAnimation(viewAnimation);
     *   }, 2000);
     * }, 2000);
     * ```
     */
    continueViewAnimation(viewAnimation: ViewAnimation): void;
    /**
     * 停止视角动画
     * @param viewAnimation 要停止的视角动画实例
     * @example
     * ```typescript
     * const viewAnimation = new BMap.ViewAnimation([
     *   { center: new BMap.Point(116.404, 39.915), zoom: 11, tilt: 0, heading: 0, percentage: 0 },
     *   { center: new BMap.Point(116.404, 39.915), zoom: 18, tilt: 60, heading: 180, percentage: 1 }
     * ], { duration: 5000 });
     * map.startViewAnimation(viewAnimation);
     * // 2 秒后取消动画
     * setTimeout(() => {
     *   map.cancelViewAnimation(viewAnimation);
     * }, 2000);
     * ```
     */
    cancelViewAnimation(viewAnimation: ViewAnimation): void;
    /**
     * 获取地图截图，地球模式不支持。需要初始化地图配置preserveDrawingBuffer：true，否则是黑屏
     */
    getMapScreenshot(): string;
    /**
     * 设置版权信息位置，其中logo为logo位置，copyright为文字位置
     * @param logo logo 位置配置，包含 x、y 偏移量
     * @param cpy 版权文字位置配置，包含 x、y 偏移量
     * @example
     * ```typescript
     * map.setCopyrightOffset(
     *   { x: 10, y: 10 },
     *   { x: 10, y: 30 }
     * );
     * ```
     */
    setCopyrightOffset(logo: object, cpy: object): void;
    /**
     * 销毁地图，当使用 WebGL 渲染地图时，如果确认不再使用该地图实例，则需要调用本方法销毁 WebGL 上下文，否则频繁创建新地图实例会导致浏览器报：too many WebGL context 的警告
     */
    destroy(): void;
    /**
     * 统一添加图层方法，自动根据图层类型分发到对应处理逻辑。支持NormalLayer、TileLayer、GeoJSONLayer、DistrictLayer、DOMLayer等所有图层类型
     * @param layer 图层实例
     * @example
     * ```typescript
     * const lineLayer = new BMap.LineLayer({ style: { strokeColor: '#0055ff', strokeWeight: 4 } });
     * map.addLayer(lineLayer);
     * ```
     */
    addLayer(layer: object): void;
    /**
     * 统一移除图层方法，自动根据图层类型分发到对应处理逻辑
     * @param layer 图层实例
     * @example
     * ```typescript
     * map.removeLayer(lineLayer);
     * ```
     */
    removeLayer(layer: object): void;

    /**
     * 添加事件监听。支持类型推导：当 `event` 为 `MapEventMap` 中的已知事件名时，
     * 回调参数 `e` 自动推导为对应的事件对象类型。
     * @param event 事件名称
     * @param handler 事件处理函数
     * @example click 点击
     * ```typescript
     * map.addEventListener('click', (e) => {
     *   console.log('click 事件触发', e);
     *   console.log(e.type, e.target, e.point, e.pixel, e.overlay);
     * });
     * ```
     * @example dblclick 双击
     * ```typescript
     * map.addEventListener('dblclick', (e) => {
     *   console.log('dblclick 事件触发', e);
     *   console.log(e.type, e.target, e.point, e.pixel, e.overlay);
     * });
     * ```
     * @example rightclick 右键点击
     * ```typescript
     * map.addEventListener('rightclick', (e) => {
     *   console.log('rightclick 事件触发', e);
     *   console.log(e.type, e.target, e.point, e.pixel, e.overlay);
     * });
     * ```
     * @example rightdblclick 右键双击
     * ```typescript
     * map.addEventListener('rightdblclick', (e) => {
     *   console.log('rightdblclick 事件触发', e);
     *   console.log(e.type, e.target, e.point, e.pixel, e.overlay);
     * });
     * ```
     * @example mousemove 鼠标移动
     * ```typescript
     * map.addEventListener('mousemove', (e) => {
     *   console.log('mousemove 事件触发', e);
     *   console.log(e.type, e.target, e.point, e.pixel, e.overlay);
     * });
     * ```
     * @example mousedown 鼠标按下
     * ```typescript
     * map.addEventListener('mousedown', (e) => {
     *   console.log('mousedown 事件触发', e);
     *   console.log(e.type, e.target, e.point, e.pixel, e.overlay);
     * });
     * ```
     * @example mouseup 鼠标抬起
     * ```typescript
     * map.addEventListener('mouseup', (e) => {
     *   console.log('mouseup 事件触发', e);
     *   console.log(e.type, e.target, e.point, e.pixel, e.overlay);
     * });
     * ```
     * @example mouseover 鼠标移入
     * ```typescript
     * map.addEventListener('mouseover', (e) => {
     *   console.log('mouseover 事件触发', e);
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example mouseout 鼠标移出
     * ```typescript
     * map.addEventListener('mouseout', (e) => {
     *   console.log('mouseout 事件触发', e);
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example dragstart 拖拽开始
     * ```typescript
     * map.addEventListener('dragstart', (e) => {
     *   console.log('dragstart 事件触发', e);
     *   console.log(e.type, e.target, e.pixel, e.point);
     * });
     * ```
     * @example dragging 拖拽中
     * ```typescript
     * map.addEventListener('dragging', (e) => {
     *   console.log('dragging 事件触发', e);
     *   console.log(e.type, e.target, e.pixel, e.point);
     * });
     * ```
     * @example dragend 拖拽结束
     * ```typescript
     * map.addEventListener('dragend', (e) => {
     *   console.log('dragend 事件触发', e);
     *   console.log(e.type, e.target, e.pixel, e.point);
     * });
     * ```
     * @example movestart 地图移动开始
     * ```typescript
     * map.addEventListener('movestart', (e) => {
     *   console.log('movestart 事件触发', e);
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example moving 地图移动中
     * ```typescript
     * map.addEventListener('moving', (e) => {
     *   console.log('moving 事件触发', e);
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example moveend 地图移动结束
     * ```typescript
     * map.addEventListener('moveend', (e) => {
     *   console.log('moveend 事件触发', e);
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example zoomstart 缩放开始
     * ```typescript
     * map.addEventListener('zoomstart', (e) => {
     *   console.log('zoomstart 事件触发', e);
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example zooming 缩放中
     * ```typescript
     * map.addEventListener('zooming', (e) => {
     *   console.log('zooming 事件触发', e);
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example zoomend 缩放结束
     * ```typescript
     * map.addEventListener('zoomend', (e) => {
     *   console.log('zoomend 事件触发', e);
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example beforeaddoverlay 覆盖物添加前
     * ```typescript
     * map.addEventListener('beforeaddoverlay', (e) => {
     *   console.log('beforeaddoverlay 事件触发', e);
     *   console.log(e.type, e.target, e.overlay);
     * });
     * ```
     * @example addoverlay 添加覆盖物
     * ```typescript
     * map.addEventListener('addoverlay', (e) => {
     *   console.log('addoverlay 事件触发', e);
     *   console.log(e.type, e.target, e.overlay);
     * });
     * ```
     * @example removeoverlay 移除覆盖物
     * ```typescript
     * map.addEventListener('removeoverlay', (e) => {
     *   console.log('removeoverlay 事件触发', e);
     *   console.log(e.type, e.target, e.overlay);
     * });
     * ```
     * @example clearoverlays 清除所有覆盖物
     * ```typescript
     * map.addEventListener('clearoverlays', (e) => {
     *   console.log('clearoverlays 事件触发', e);
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example addcontrol 添加控件
     * ```typescript
     * map.addEventListener('addcontrol', (e) => {
     *   console.log('addcontrol 事件触发', e);
     *   console.log(e.type, e.target, e.control);
     * });
     * ```
     * @example removecontrol 移除控件
     * ```typescript
     * map.addEventListener('removecontrol', (e) => {
     *   console.log('removecontrol 事件触发', e);
     *   console.log(e.type, e.target, e.control);
     * });
     * ```
     * @example addcontextmenu 添加右键菜单
     * ```typescript
     * map.addEventListener('addcontextmenu', (e) => {
     *   console.log('addcontextmenu 事件触发', e);
     *   console.log(e.type, e.target, e.menu);
     * });
     * ```
     * @example removecontextmenu 移除右键菜单
     * ```typescript
     * map.addEventListener('removecontextmenu', (e) => {
     *   console.log('removecontextmenu 事件触发', e);
     *   console.log(e.type, e.target, e.menu);
     * });
     * ```
     * @example maptypechange 地图类型变更
     * ```typescript
     * map.addEventListener('maptypechange', (e) => {
     *   console.log('maptypechange 事件触发', e);
     *   console.log(e.type, e.target, e.mapType);
     * });
     * ```
     * @example style_willchange 样式即将改变
     * ```typescript
     * map.addEventListener('style_willchange', (e) => {
     *   console.log('style_willchange 事件触发', e);
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example style_loaded 样式加载完成
     * ```typescript
     * map.addEventListener('style_loaded', (e) => {
     *   console.log('style_loaded 事件触发', e);
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example style_loaded_error 样式加载失败
     * ```typescript
     * map.addEventListener('style_loaded_error', (e) => {
     *   console.log('style_loaded_error 事件触发', e);
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example style_loaded_timeout 样式加载超时
     * ```typescript
     * map.addEventListener('style_loaded_timeout', (e) => {
     *   console.log('style_loaded_timeout 事件触发', e);
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example language_change 语言切换
     * ```typescript
     * map.addEventListener('language_change', (e) => {
     *   console.log('language_change 事件触发', e);
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example tilesloaded 瓦片加载完成
     * ```typescript
     * map.addEventListener('tilesloaded', (e) => {
     *   console.log('tilesloaded 事件触发', e);
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example resize 地图尺寸变化
     * ```typescript
     * map.addEventListener('resize', (e) => {
     *   console.log('resize 事件触发', e);
     *   console.log(e.type, e.target, e.size);
     * });
     * ```
     */
    addEventListener<K extends keyof MapEventMap>(event: K, handler: (e: MapEventMap[K]) => void): void;

    /**
     * 移除事件监听，传入的 `handler` 须与 `addEventListener` 时一致
     * @param event 事件名称
     * @param handler 要移除的事件处理函数
     * @example
     * ```typescript
     * const onClick = (e: BMap.MapMouseEvent) => console.log(e.latlng);
     * map.addEventListener('click', onClick);
     * setTimeout(() => {
     *   map.removeEventListener('click', onClick);
     * }, 2000);
     * ```
     */
    removeEventListener<K extends keyof MapEventMap>(event: K, handler: (e: MapEventMap[K]) => void): void;
  }
}

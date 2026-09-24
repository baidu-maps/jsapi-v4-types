declare namespace BMap {
  /**
   * 此类是地图API的核心类，用来实例化一个地图。
   */
  class Map {
    /**
     * 在指定的容器内创建地图实例。
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
     *   enableWheelZoom: true
     * });
     * ```
     */
    constructor(container: string | HTMLElement, options?: MapOptions);
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
     * 开启底图可点功能
     */
    enableMapClick(): void;
    /**
     * 关闭底图可点功能
     */
    disableMapClick(): void;
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
     * 设置地图旋转角度。传入任意角度值均可，内部会自动按一周（360 度）归一化，例如传入 450 等价于 90，传入 -90 等价于 270。
     * @param heading 旋转角度，单位为度。推荐使用 0~360 的罗盘角度（正北 0、正东 90、正南 180、正西 270），超出该范围会被自动归一化
     * @param options 可选配置参数
     * @example
     * ```typescript
     * map.setHeading(45);
     * ```
     */
    setHeading(heading: number, options?: {
      /** 是否关闭动画 */
      noAnimation?: boolean;
      /** 动画结束后的回调函数 */
      callback?: () => void;
    }): void;
    /**
     * 获取地图当前旋转角度。返回值为带符号角度，取值范围 -180~180，正值表示顺时针偏离正北，负值表示逆时针偏离正北。
     * 注意：返回值与 `setHeading` 的入参不保证数值一致，例如 `setHeading(270)` 后 `getHeading()` 返回 -90。
     */
    getHeading(): number;
    /**
     * 将地图重置为正北方向，重置过程的动画不可被打断
     * @param options 可选配置参数
     * @example
     * ```typescript
     * map.resetHeading();
     * ```
     */
    resetHeading(options?: {
      /** 是否关闭动画 */
      noAnimation?: boolean;
      /** 动画结束后的回调函数 */
      callback?: () => void;
    }): void;
    /**
     * 设置地图的倾斜角度
     * @param tilt 倾斜角度，单位为度，取值范围 0~73
     * @param options 可选配置参数
     * @example
     * ```typescript
     * map.setTilt(45);
     * ```
     */
    setTilt(tilt: number, options?: {
      /** 是否关闭动画 */
      noAnimation?: boolean;
      /** 动画结束后的回调函数 */
      callback?: () => void;
    }): void;
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
    getZoomUnits(level?: number): number;
    /**
     * 返回地图的DOM容器元素。当创建用户自定义控件时，需要自行实现Control.initialize()方法，并将控件的容器元素添加到地图上，通过此方法可获得地图容器
     */
    getContainer(): HTMLElement;
    /**
     * 像素坐标转换为经纬度坐标
     * @param pixel 地图像素坐标
     * @param options 可选配置参数，通过此参数可以获得特定地图状态（中心点、级别、旋转、倾斜）下的坐标值，不传则按当前地图状态换算
     * @example
     * ```typescript
     * const point = map.pixelToPoint(new BMap.Pixel(100, 200));
     * ```
     */
    pixelToPoint(pixel: Pixel, options?: {
      /** 指定地图的中心点 */
      center?: Point;
      /** 指定地图的级别 */
      zoom?: number;
      /** 指定地图的正北朝向 */
      heading?: number;
      /** 指定地图的倾斜角度 */
      tilt?: number;
    }): Point;
    /**
     * 经纬度坐标转换为像素坐标
     * @param point 地理坐标点
     * @param options 可选配置参数，通过此参数可以获得特定地图状态（中心点、级别、旋转、倾斜）下的坐标值，不传则按当前地图状态换算
     * @example
     * ```typescript
     * const pixel = map.pointToPixel(new BMap.Point(116.404, 39.915));
     * ```
     */
    pointToPixel(point: Point, options?: {
      /** 指定地图的中心点 */
      center?: Point;
      /** 指定地图的级别 */
      zoom?: number;
      /** 指定地图的正北朝向 */
      heading?: number;
      /** 指定地图的倾斜角度 */
      tilt?: number;
    }): Pixel;
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
     * @returns 实际写入的 uid 数组，可用 removeMapLabels 移除
     * @example
     * ```typescript
     * map.addMapLabels([
     *   {
     *     text: '自定义标注',
     *     position: new BMap.Point(116.404, 39.915)
     *   }
     * ]);
     * ```
     * @example
     * ```typescript
     * map.addMapLabels([
     *   {
     *      position: new BMap.Point(116, 39),
     *      text: '自定义标注2',
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
    addMapLabels(labels: MapLabel | MapLabel[]): string[];
    /**
     * 从底图上移除文字标注，参数为uid数组，根据数组里的uid进行移除
     * @param labelUids 要移除的标注uid数组
     * @example
     * ```typescript
     * map.removeMapLabels(['uid-001', 'uid-002']);
     * ```
     */
    removeMapLabels(labelUids: string | string[]): void;
    /**
     * 开启点击底图标注后自动展示信息窗口，同时会开启底图标注点击
     */
    enableIconInfoWindow(): void;
    /**
     * 关闭点击底图标注后自动展示信息窗口
     */
    disableIconInfoWindow(): void;
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
    enablePreferredLanguage(language?: Language): void;
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
     * 返回当前地图类型实例，与全局常量 `BMAP_NORMAL_MAP` 等同源
     */
    getMapType(): MapType;
    /**
     * 根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标，除坐标数组与视野对象外，还支持传入带 getBounds 方法的覆盖物数组
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
    setViewport(
      view: Array<Point> | Array<{ getBounds(): Bounds }> | Viewport,
      viewportOptions?: ViewportOptions
    ): void;
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
    getViewport(view: Array<Point> | Bounds, viewportOptions?: ViewportOptions): Viewport;
    /**
     * 同时设置地图的中心点和缩放级别。 默认无动画效果。
     * @param center 地图中心点坐标
     * @param zoom 缩放级别
     * @param options 可选配置参数
     * @example
     * ```typescript
     * map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
     * ```
     * @example 启用动画
     * ```typescript
     * map.centerAndZoom(new BMap.Point(116.404, 39.915), 15, {
     *   noAnimation: false
     * });
     * ```
     * @example 设置动画完成后的回调
     * ```typescript
     * map.centerAndZoom(new BMap.Point(116.404, 39.915), 15, {
     *   noAnimation: false,
     *   callback: () => console.log('动画完成')
     * });
     * ```
     */
    centerAndZoom(center: Point, zoom: number, options?: {
      /**
       * 是否禁用动画效果
       * @default true
       */
      noAnimation?: boolean;
      /** 动画完成后的回调函数 */
      callback?: () => void;
    }): void;
    /**
     * 按城市名设置地图中心点和缩放级别。不传zoom时，地图将自动适配展示该城市的最佳缩放级别
     * @param city 城市名称，如"北京"
     * @param zoom 缩放级别，不传则自动适配
     * @param options 可选配置参数
     * @example
     * ```typescript
     * map.centerAndZoom('北京');
     * ```
     * @example 指定缩放级别
     * ```typescript
     * map.centerAndZoom('北京', 12);
     * ```
     */
    centerAndZoom(city: string, zoom?: number, options?: {
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
     * @example 禁用动画
     * ```typescript
     * map.panTo(new BMap.Point(116.404, 39.915), {
     *   noAnimation: true
     * });
     * ```
     * @example 设置动画持续时间
     * ```typescript
     * map.panTo(new BMap.Point(116.404, 39.915), {
     *   duration: 800
     * });
     * ```
     * @example 设置动画完成后的回调
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
     * @param options 可选配置参数
     * @example
     * ```typescript
     * map.panBy(100, -50);
     * ```
     */
    panBy(x: number, y: number, options?: {
      /** 是否关闭动画 */
      noAnimation?: boolean;
      /** 动画结束后的回调函数 */
      callback?: () => void;
    }): void;
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
     * @param mapType 地图类型常量，如 `BMAP_SATELLITE_MAP`
     * @example
     * ```typescript
     * map.setMapType(BMAP_SATELLITE_MAP);
     * ```
     */
    setMapType(mapType: MapType): void;
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
     * @param zoomCenter 放大的中心点，默认为地图中心点
     */
    zoomIn(zoomCenter?: Point): void;
    /**
     * 缩小一级视图
     * @param zoomCenter 缩小的中心点，默认为地图中心点
     */
    zoomOut(zoomCenter?: Point): void;
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
     * @param options 可选配置参数，通过此参数可以获得特定地图状态（中心点、级别）下的坐标值，不传则按当前地图状态换算
     * @example
     * ```typescript
     * const pixel = map.pointToOverlayPixel(new BMap.Point(116.404, 39.915));
     * ```
     */
    pointToOverlayPixel(point: Point, options?: {
      /** 指定地图的中心点 */
      center?: Point;
      /** 指定地图的级别 */
      zoom?: number;
    }): Pixel;
    /**
     * 根据覆盖物容器的坐标获取对应的地理坐标
     * @param pixel 覆盖物容器像素坐标
     * @param options 可选配置参数，通过此参数可以获得特定地图状态（中心点、级别）下的坐标值，不传则按当前地图状态换算
     * @example
     * ```typescript
     * const point = map.overlayPixelToPoint(new BMap.Pixel(100, 200));
     * ```
     */
    overlayPixelToPoint(pixel: Pixel, options?: {
      /** 指定地图的中心点 */
      center?: Point;
      /** 指定地图的级别 */
      zoom?: number;
    }): Point;
    /**
     * 获取当前地图上的所有覆盖物，返回覆盖物对象的集合
     */
    getOverlays(): Overlay[];
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
     * 设置个性化地图，参数为个性化配置对象，支持通过 styleId、styleJson 两种方式设置个性化地图样式。
     * styleId 和 styleJson 的获取地址：https://lbsyun.baidu.com/apiconsole/custommap。
     * styleId 必须由 AK 所属账号创建，否则将无权限获取样式。
     * @param config 个性化地图样式配置对象
     * @example 使用 styleId
     * ```typescript
     * map.setMapStyle({ styleId: 'your-style-id' });
     * ```
     * @example 使用 styleId，并开启 merge 参数支持室内图
     * ```typescript
     * map.setMapStyle({ styleId: 'your-style-id', merge: true });
     * ```
     * @example 使用 styleJson 内联样式（通过个性化编辑器导出的 JSON）
     * ```typescript
     * map.setMapStyle({
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
    setMapStyle(config: MapStyleConfig): void;
    /**
     * 设置地图 UI 主题。主题通过 CSS 变量控制 UI 控件、服务面板等的配色
     *
     * 支持的主题变量如下，变量名需与表中名称完全一致。
     * 未被 dark 主题覆盖的变量继续使用 light 的默认值。
     *
     * | 变量 | light 默认值 | dark 默认值 | 用途 |
     * | --- | --- | --- | --- |
     * | `--bmap-border-radius` | `6px` | 同 light | 基础圆角 |
     * | `--bmap-border-radius-lg` | `16px` | 同 light | 大圆角 |
     * | `--bmap-box-shadow` | `0 6px 16px 0 rgba(0, 0, 0, .08), 0 3px 6px -4px rgba(0, 0, 0, .12), 0 9px 28px 8px rgba(0, 0, 0, .05)` | `0 6px 16px 0 rgba(0,0,0,.45), 0 3px 6px -4px rgba(0,0,0,.55), 0 9px 28px 8px rgba(0,0,0,.35)` | 通用浮层阴影 |
     * | `--bmap-color-bg-base` | `#fff` | `#2b2d33` | 基础背景色 |
     * | `--bmap-color-bg-base-hover` | `rgba(0, 0, 0, .02)` | `rgba(255, 255, 255, .08)` | 基础背景悬停色 |
     * | `--bmap-color-bg-base-active` | `rgba(51, 136, 255, .06)` | `rgba(74, 144, 255, .18)` | 基础背景激活色 |
     * | `--bmap-color-primary` | `#1677ff` | `#5ba3ff` | 主题主色 |
     * | `--bmap-color-primary-bg` | `#eaf1ff` | `#1e2a40` | 主色浅背景 |
     * | `--bmap-color-primary-bg-hover` | `#dde8fc` | `#243450` | 主色浅背景悬停色 |
     * | `--bmap-color-text-base` | `#000` | `#e0e0e0` | 基础文本色 |
     * | `--bmap-color-text-weak` | `#5c6373` | `#b0b0c0` | 弱化文本色 |
     * | `--bmap-color-text-active` | `#1677ff` | `#5ba3ff` | 激活文本色 |
     * | `--bmap-color-text-secondary` | `#5a6070` | `#b0b0c0` | 次要文本色 |
     * | `--bmap-color-text-tertiary` | `#8a90a0` | `#9a9ab0` | 三级文本色 |
     * | `--bmap-color-border` | `#d9d9d9` | `#3a3d44` | 基础边框色 |
     * | `--bmap-color-border-secondary` | `#f0f0f0` | `#3a3d44` | 次级边框和分割线颜色 |
     * | `--bmap-color-fill` | `#f2f3f5` | `rgba(255, 255, 255, .08)` | 通用次级填充色 |
     * | `--bmap-font-size` | `14px` | 同 light | 基础字号 |
     * | `--bmap-font-size-xs` | `12px` | 同 light | 小字号 |
     * | `--bmap-font-size-lg` | `16px` | 同 light | 大字号 |
     * | `--bmap-font-size-heading-1` | `38px` | 同 light | 一级标题字号 |
     * | `--bmap-font-size-heading-2` | `30px` | 同 light | 二级标题字号 |
     * | `--bmap-font-size-heading-3` | `24px` | 同 light | 三级标题字号 |
     * | `--bmap-font-size-heading-4` | `20px` | 同 light | 四级标题字号 |
     * | `--bmap-font-size-heading-5` | `16px` | 同 light | 五级标题字号 |
     * | `--bmap-font-weight-bold` | `500` | 同 light | 基础强调字重 |
     * | `--bmap-font-weight-bold-lg` | `700` | 同 light | 高强调字重 |
     * | `--bmap-font-weight-lighter` | `400` | 同 light | 常规字重 |
     * | `--bmap-line-height` | `1.2` | 同 light | 基础行高 |
     * | `--bmap-line-width` | `1px` | 同 light | 基础线宽 |
     * | `--bmap-line-type` | `solid` | 同 light | 基础线型 |
     * | `--bmap-margin` | `16px` | 同 light | 基础外边距 |
     * | `--bmap-margin-lg` | `24px` | 同 light | 大外边距 |
     * | `--bmap-margin-xs` | `8px` | 同 light | 小外边距 |
     * | `--bmap-margin-xxs` | `4px` | 同 light | 超小外边距 |
     * | `--bmap-padding` | `16px` | 同 light | 基础内边距 |
     * | `--bmap-padding-lg` | `24px` | 同 light | 大内边距 |
     * | `--bmap-padding-xs` | `8px` | 同 light | 小内边距 |
     * | `--bmap-padding-xxs` | `4px` | 同 light | 超小内边距 |
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
     * 获取当前地图 UI 主题名称，未设置时返回 'light'
     */
    getTheme(): string;
    /**
     * 注册自定义 UI 主题，注册后可通过 `setTheme(name)` 切换
     * @param name 主题名称
     * @param variables 主题的 CSS 变量集合，支持的变量见 `setTheme` 的变量表
     * @example
     * ```typescript
     * map.registerTheme('ocean', { '--bmap-color-primary': '#0080ff' });
     * map.setTheme('ocean');
     * ```
     */
    registerTheme(name: string, variables: Record<string, string>): void;
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
    startViewAnimation(viewAnimation: ViewAnimation): void;
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
    getScreenshot(): string;
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
    addLayer(
      layer:
        | TileLayer
        | RasterTileLayer
        | WMSLayer
        | WMTSLayer
        | GeoJSONLayer
        | DistrictLayer
        | DOMLayer
        | LineLayer
        | FillLayer
        | PointShapeLayer
        | PointIconLayer
        | WebGLCustomLayer
        | ThreejsLayer
        | DeckglLayer
        | PointLayer
        | PolylineLayer
        | PolygonLayer
        | TextLayer
        | BarLayer
        | Heatmap
        | FlyLineLayer
        | ClusterLayer
        | TrackLine
    ): void;
    /**
     * 统一移除图层方法，自动根据图层类型分发到对应处理逻辑
     * @param layer 图层实例
     * @example
     * ```typescript
     * map.removeLayer(lineLayer);
     * ```
     */
    removeLayer(
      layer:
        | TileLayer
        | RasterTileLayer
        | WMSLayer
        | WMTSLayer
        | GeoJSONLayer
        | DistrictLayer
        | DOMLayer
        | LineLayer
        | FillLayer
        | PointShapeLayer
        | PointIconLayer
        | WebGLCustomLayer
        | ThreejsLayer
        | DeckglLayer
        | PointLayer
        | PolylineLayer
        | PolygonLayer
        | TextLayer
        | BarLayer
        | Heatmap
        | FlyLineLayer
        | ClusterLayer
        | TrackLine
    ): void;

    /**
     * 在地图上打开信息窗口
     * @param infoWnd 信息窗口实例
     * @param point 信息窗口显示的地理坐标
     */
    openInfoWindow(infoWnd: InfoWindow, point: Point): void;
    /**
     * 关闭在地图上打开的信息窗口。在标注上打开的信息窗口也可通过此方法进行关闭
     */
    closeInfoWindow(): void;
    /**
     * 添加一个自定义地图图层
     * @deprecated 4.0 请使用 {@link addLayer}
     * @param tileLayer 自定义图层实例
     */
    addTileLayer(tileLayer: TileLayer): void;
    /**
     * 移除一个自定义地图图层
     * @deprecated 4.0 请使用 {@link removeLayer}
     * @param tileLayer 要移除的自定义图层实例
     */
    removeTileLayer(tileLayer: TileLayer): void;

    /**
     * 添加事件监听
     * @param event 事件名称
     * @param handler 事件处理函数
     * @example 地图初始化事件
     * ```typescript
     * map.addEventListener('load', (e) => {
     *   console.log(e.type, e.target, e.zoom);
     * });
     * ```
     * @example 鼠标点击事件
     * ```typescript
     * map.addEventListener('click', (e) => {
     *   console.log(e.type, e.target, e.point, e.pixel, e.overlay);
     * });
     * map.addEventListener('dblclick', (e) => {
     *   console.log(e.type, e.target, e.point, e.pixel, e.overlay);
     * });
     * map.addEventListener('rightclick', (e) => {
     *   console.log(e.type, e.target, e.point, e.pixel, e.overlay);
     * });
     * map.addEventListener('rightdblclick', (e) => {
     *   console.log(e.type, e.target, e.point, e.pixel, e.overlay);
     * });
     * ```
     * @example 鼠标交互事件
     * ```typescript
     * map.addEventListener('mousemove', (e) => {
     *   console.log(e.type, e.target, e.point, e.pixel, e.overlay);
     * });
     * map.addEventListener('mousedown', (e) => {
     *   console.log(e.type, e.target, e.point, e.pixel, e.overlay);
     * });
     * map.addEventListener('mouseup', (e) => {
     *   console.log(e.type, e.target, e.point, e.pixel, e.overlay);
     * });
     * map.addEventListener('mouseover', (e) => {
     *   console.log(e.type, e.target);
     * });
     * map.addEventListener('mouseout', (e) => {
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example 地图拖拽事件
     * ```typescript
     * map.addEventListener('dragstart', (e) => {
     *   console.log(e.type, e.target, e.pixel, e.point);
     * });
     * map.addEventListener('dragging', (e) => {
     *   console.log(e.type, e.target, e.pixel, e.point);
     * });
     * map.addEventListener('dragend', (e) => {
     *   console.log(e.type, e.target, e.pixel, e.point);
     * });
     * ```
     * @example 地图移动事件
     * ```typescript
     * map.addEventListener('movestart', (e) => {
     *   console.log(e.type, e.target);
     * });
     * map.addEventListener('moving', (e) => {
     *   console.log(e.type, e.target);
     * });
     * map.addEventListener('moveend', (e) => {
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example 地图缩放事件
     * ```typescript
     * map.addEventListener('zoomstart', (e) => {
     *   console.log(e.type, e.target);
     * });
     * map.addEventListener('zoomend', (e) => {
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example 地图缩放过程与越界事件
     * ```typescript
     * map.addEventListener('zooming', (e) => {
     *   console.log(e.type, e.target);
     * });
     * map.addEventListener('zoomexceeded', (e) => {
     *   console.log(e.type, e.target, e.targetZoom);
     * });
     * ```
     * @example 覆盖物事件
     * ```typescript
     * map.addEventListener('addoverlay', (e) => {
     *   console.log(e.type, e.target);
     * });
     * map.addEventListener('removeoverlay', (e) => {
     *   console.log(e.type, e.target);
     * });
     * map.addEventListener('clearoverlays', (e) => {
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example 覆盖物添加前事件
     * ```typescript
     * map.addEventListener('beforeaddoverlay', (e) => {
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example 控件与右键菜单事件
     * ```typescript
     * map.addEventListener('addcontrol', (e) => {
     *   console.log(e.type, e.target);
     * });
     * map.addEventListener('removecontrol', (e) => {
     *   console.log(e.type, e.target);
     * });
     * map.addEventListener('addcontextmenu', (e) => {
     *   console.log(e.type, e.target);
     * });
     * map.addEventListener('removecontextmenu', (e) => {
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example 地图类型事件
     * ```typescript
     * map.addEventListener('maptypechange', (e) => {
     *   console.log(e.type, e.target, e.mapType, e.zoomLevel);
     * });
     * ```
     * @example 样式与语言事件
     * ```typescript
     * map.addEventListener('style_willchange', (e) => {
     *   console.log(e.type, e.target);
     * });
     * map.addEventListener('style_loaded', (e) => {
     *   console.log(e.type, e.target);
     * });
     * map.addEventListener('style_loaded_error', (e) => {
     *   console.log(e.type, e.target);
     * });
     * map.addEventListener('style_loaded_timeout', (e) => {
     *   console.log(e.type, e.target);
     * });
     * map.addEventListener('language_change', (e) => {
     *   console.log(e.type, e.target);
     * });
     * ```
     * @example 瓦片加载与地图尺寸事件
     * ```typescript
     * map.addEventListener('tilesloaded', (e) => {
     *   console.log(e.type, e.target);
     * });
     * map.addEventListener('resize', (e) => {
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

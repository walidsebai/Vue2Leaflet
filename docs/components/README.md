# Component reference

## `<l-circle>`

`<l-circle>` draws a shape of a circle on the map.

### `<l-circle>` props

#### latLng

- type: `Object | Array`
- reactive: `false`
- default: `undefined`

Define the center of the l-circle

#### radius

- type: `Number`
- reactive: `false`
- default: `undefined`

Define the radius of the l-circle

#### lStyle

- type: `Object`
- reactive: `true`
- default: `undefined`

Define the style of of the l-circle, accepts an object whose keys are going to be merged in the options of the leaflet object.
More info [Here](https://leafletjs.com/reference-1.3.0.html#circle-option)

#### visible

- type: `Boolean`
- reactive: `true`
- default: `true`

Define the visibility of the `<l-circle>`

#### stroke

- type: `Boolean`
- reactive: `true`
- default: `true`

Define if the stroke should be drawn

#### color

- type: `String`
- reactive: `true`
- default: `#3388ff`

Define if the color of the stroke of the circle

#### weight

- type: `Number`
- reactive: `true`
- default: `3`

Define if the weight of the stroke of the circle

#### opacity

- type: `Number`
- reactive: `true`
- default: `1.0`

Define if the opacity of the stroke of the circle

#### lineCap

- type: `String`
- reactive: `true`
- default: `round`

Define the lineCap of the stroke of the circle refer, to stroke-linecap for type of options [Here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap)

#### lineJoin

- type: `String`
- reactive: `true`
- default: `round`

Define the lineJoin of the stroke of the circle, refer to stroke-linejoin for type of options [Here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin)

#### dashArray

- type: `String`
- reactive: `true`
- default: `null`

Define the dashArray of the stroke of the circle refer to stroke-dasharray for type options [Here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray)

#### dashOffset

- type: `String`
- reactive: `true`
- default: `null`

Define the dashOffset of the stroke of the circle refer to sstroke-dashoffset for type options [Here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset)

#### fill

- type: `Boolean`
- reactive: `true`
- default: `true`

Define if the circle should be filled with color or only the stroke is drawn on the map

#### fillColor

- type: `String`
- reactive: `true`
- default: `#3388ff`

Define the color of the fill

#### fillOpacity

- type: `Number`
- reactive: `true`
- default: `0.2`

Define the opacity of the fill

#### fillRule

- type: `String`
- reactive: `true`
- default: `evenodd`

Define how the inside of the shape is determined see fill-rule [Here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule) for more information

#### className

- type: `String`
- reactive: `true`
- default: `null`

Define an additional CSS className for the circle

### `<l-circle>` events

`<l-circle>` emits all the leaflet events see [Here](https://leafletjs.com/reference-1.3.0.html#circle) for more details

## `<l-map>`

`<l-map>` is the main component of Vue2Leaflet, loads the leaflet instance and act as the main container for all the other components and plugin.
`<l-map>` exposes access to the leaflet object through the mapObject property, to access it a ref is needed on the `<l-map>` component.
Multiple instances of `<l-map>` are supported and is possible to manage them with different refs.

### `<l-map>` props

#### center

- type: `Object | Array`
- reactive: `true`
- default: `[0,0]`

Define the center of the map, this property is reactive and is kept in sync while the user scroll the map.

According to leaflet notation the center may be expressed as an array of `[lat,lon]` or as an object `{lat: 0, lon: 0}` the latter being the preferred way

#### bounds

- type: `Object | Array`
- default: `undefined`
- reactive: `true`

Define current the bounds of the map

#### maxBounds

- type: `Object | Array`
- default: `undefined`
- reactive `false`

Define current max bounds of the map

#### zoom

- type: `Number`
- default: `0`
- reactive `true`

Define the zoom of the map

#### minZoom

- type: `Number`
- default: `undefined`
- reactive `false`

Define the minZoom of the map

#### maxZoom

- type: `Number`
- default: `undefined`
- reactive `false`

Define the maxZoom of the map

#### paddingBottomRight

- type: `String`
- default: `null`
- reactive `true`

Define the paddingBottomRight of the map

#### paddingTopLeft

- type: `String`
- default: `null`
- reactive `true`

Define the paddingTopLeft of the map

#### padding

- type: `String`
- default: `null`
- reactive `true`

Define the padding of the map

#### worldCopyJump

- type: `Boolean`
- default: `false`
- reactive `false`

Define the worldCopyJump option of the map

#### crs

- type: `String`
- default: `L.CRS.EPSG3857`
- reactive `true`

Define the crs option of the map, this prop is at the moment not implemented.

#### maxBoundsViscosity

- type: `Number`
- default: `0`
- reactive `false`

Define the crs option of the map, this prop is at the moment not implemented.

#### options

- type: `Object`
- default: `() => ({})`
- reactive `false`

Option object that will be passed to leaflet instance, any of the options defined in the props will be overridden by the prop value.

### `<l-map>` events

 `<l-map>` emits all the leaflet events see [Here](https://leafletjs.com/reference-1.3.0.html#map-event) for more details

 In addition to leaflet events:

#### load

Emitted when leaflet is properly instantiated and `mapObject` property can be reached from the ref attached to the component


### `<l-map>` example

<simple-example />
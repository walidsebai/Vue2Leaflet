# Component reference

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

### `<l-map>` example

<simple-example />
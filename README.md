# gl-checker-background

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Draws a checkered full-screen background quad, ideal for quick demos.

![img](http://i.imgur.com/NWzvJmm.png)

```js
var createBackground = require('gl-checker-background')

var background = createBackground(gl, {
    colors: [
        [0x50,0x50,0x50,0xff],
        [0x46,0x46,0x46,0xff]
    ]
})

function render() {
    ...
    background.draw()
}
```

## Usage

[![NPM](https://nodei.co/npm/gl-checker-background.png)](https://nodei.co/npm/gl-checker-background/)


#### `bg = createBackground(gl[, opt])`

Creates a checkered background with some options.

- `shader` a shader to use, defaults to a new shader with [gl-basic-shader](https://www.npmjs.org/package/gl-basic-shader)
- `batch` a [gl-sprite-batch](https://www.npmjs.org/package/gl-sprite-batch) to use, defaults to a new one with a capacity of 1 sprite
- `colors` an array of RGBA colors (in bytes) to use for the two tones
- `size` the desired square size of the checker pixel, default `32 * devicePixelRatio`

#### `bg.draw([width, height])`

Draws the sprite as a full-screen quad, using the `width, height` to determine the repeating texture coordinates of the checker tile. Defaults to using the gl canvas width and height. 

#### `bg.dispose()`

Disposes of the texture, batch and shader associated with this background.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/gl-checker-background/blob/master/LICENSE.md) for details.

var createTexture = require('gl-checker-texture')
var Batch = require('gl-sprite-batch')
var DefaultShader = require('gl-basic-shader')

function Background(gl, opt) {
    if (!(this instanceof Background))
        return new Background(gl, opt)
    opt = opt||{}
    this.gl = gl
    this.texture = createTexture(gl, opt)

    var DPR = (window.devicePixelRatio||1)
    this.size = typeof opt.size === 'number' ? opt.size : (32*DPR)

    this.shader = opt.shader || DefaultShader(gl, { texcoord: true, color: true })
    this.batch = opt.batch || Batch(gl, { capacity: 1 })
    this.sprite = {
        texture: this.texture,
        position: [-1, -1],
        shape: [2, 2],
        texcoord: [0, 0, 1.0, 1.0]
    }
}

Background.prototype.dispose = function() {
    this.batch.dispose()
    this.shader.dispose()
    this.texture.dispose()
}

Background.prototype.push = function(width, height) {
    width = typeof width === 'number' ? width : this.gl.canvas.width
    height = typeof height === 'number' ? height : this.gl.canvas.height
    var checkSize = this.size
    this.sprite.texcoord[2] = Math.round(width/checkSize)
    this.sprite.texcoord[3] = Math.round(height/checkSize)
    this.batch.push(this.sprite)
}

Background.prototype.draw = function(width, height) {
    this.batch.clear()
    this.batch.bind(this.shader)
    this.push(width, height)
    this.batch.draw()
    this.batch.unbind()
}      

module.exports = Background
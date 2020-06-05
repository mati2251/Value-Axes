class Axes {
    type: AxisType
    extremes: Extremes
    name: string
    ctx: any
    canvas: HTMLCanvasElement
    color: string = '#000000'

    constructor(type: AxisType = AxisType.x, extremes: Extremes, name: string, canvas: HTMLCanvasElement, ctx: any) {
        this.type = type
        this.extremes = extremes
        this.name = name
        this.canvas = canvas
        this.ctx = ctx
    }

    draw = () => {
        this.drawAxes()
    }

    drawAxes = () => {
        this.ctx.beginPath()
        this.ctx.lineCap = "round"
        this.ctx.style = this.color
        this.ctx.lineWidth = 8
        if (this.type === AxisType.x) {
            this.ctx.moveTo(70, this.canvas.height / 2 + 8)
            this.ctx.lineTo(this.canvas.width - 70, this.canvas.height / 2 + 8)
            this.ctx.stroke()
            this.ctx.closePath()
            this.ctx.beginPath()
            this.ctx.moveTo(this.canvas.width - 70, this.canvas.height / 2)
            this.ctx.lineTo(this.canvas.width - 70, this.canvas.height / 2 + 16)
            this.ctx.lineTo(this.canvas.width - 55, this.canvas.height / 2 + 8)
            this.ctx.fill()
        } else if (this.type === AxisType.y) {
            this.ctx.moveTo(this.canvas.width / 2 + 8, 70)
            this.ctx.lineTo(this.canvas.width / 2 + 8, this.canvas.height - 70)
            this.ctx.stroke()
            this.ctx.closePath()
            this.ctx.beginPath()
            this.ctx.moveTo(this.canvas.width / 2, 70)
            this.ctx.lineTo(this.canvas.width / 2 + 16, 70)
            this.ctx.lineTo(this.canvas.width / 2 + 8, 55)
            this.ctx.fill()
        }
    }
}

interface Extremes {
    left: string,
    right: string
}

interface ExtremesPhoto {
    left: string,
    right: string
}

enum AxisType {
    x,
    y
}

export {Extremes, ExtremesPhoto, AxisType, Axes};

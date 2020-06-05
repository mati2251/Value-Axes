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
            this.ctx.moveTo(5, this.canvas.height / 2 + 20)
            this.ctx.lineTo(this.canvas.width-20, this.canvas.height / 2 + 20)
            this.ctx.stroke()
            this.ctx.closePath()
            this.ctx.beginPath()
            this.ctx.moveTo(this.canvas.width-20, this.canvas.height / 2 + 10)
            this.ctx.lineTo(this.canvas.width-20, this.canvas.height / 2 + 30)
            this.ctx.lineTo(this.canvas.width-5, this.canvas.height / 2 + 20)
            this.ctx.fill()
        } else if (this.type === AxisType.y) {
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

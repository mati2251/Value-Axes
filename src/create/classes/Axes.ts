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
        this.drawTitle()
    }

    drawAxes = () => {
        this.ctx.beginPath()
        this.ctx.lineCap = "round"
        this.ctx.style = this.color
        this.ctx.lineWidth = 8
        if (this.type === AxisType.x) {
            this.ctx.moveTo(110, this.canvas.height / 2 + 8)
            this.ctx.lineTo(this.canvas.width - 110, this.canvas.height / 2 + 8)
            this.ctx.stroke()
            this.ctx.closePath()
            this.ctx.beginPath()
            this.ctx.moveTo(this.canvas.width - 110, this.canvas.height / 2)
            this.ctx.lineTo(this.canvas.width - 110, this.canvas.height / 2 + 16)
            this.ctx.lineTo(this.canvas.width - 95, this.canvas.height / 2 + 8)
            this.ctx.fill()
        } else if (this.type === AxisType.y) {
            this.ctx.moveTo(this.canvas.width / 2 + 8, 110)
            this.ctx.lineTo(this.canvas.width / 2 + 8, this.canvas.height - 110)
            this.ctx.stroke()
            this.ctx.closePath()
            this.ctx.beginPath()
            this.ctx.moveTo(this.canvas.width / 2, 110)
            this.ctx.lineTo(this.canvas.width / 2 + 16, 110)
            this.ctx.lineTo(this.canvas.width / 2 + 8, 95)
            this.ctx.fill()
        }
        this.ctx.closePath()
    }

    drawTitle = () => {
        this.ctx.beginPath()
        this.ctx.font = "26px Viga";
        this.ctx.textAlign = "center";
        if (this.type === AxisType.x) {
            this.ctx.fillText(this.name.toUpperCase(), 210, this.canvas.height / 2 - 2);
        } else if (this.type === AxisType.y) {
            this.ctx.save();
            this.ctx.translate(this.canvas.width / 2 + 16, this.canvas.height - 210);
            this.ctx.rotate(Math.PI / 2);
            this.ctx.fillText(this.name.toUpperCase(), 0, 0);
            this.ctx.restore();
        }
        this.ctx.closePath()
    }


}

interface Extremes {
    left: string,
    right: string
}

enum AxisType {
    x,
    y
}

export {Extremes, AxisType, Axes};

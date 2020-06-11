class Quarter {
    type: QuarterType
    label: string
    color: string
    canvas: HTMLCanvasElement
    ctx: any

    constructor(type: QuarterType, label: string, color: string, canvas: HTMLCanvasElement, ctx: any) {
        this.type = type
        this.color = color
        this.label = label
        this.canvas = canvas
        this.ctx = ctx
        this.draw()
    }

    draw = () => {
        this.drawQuartersColor()
        this.drawQuartersLabels()
    }

    drawQuartersColor = () => {
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        if (this.type === 0) {
            this.ctx.fillRect(110, 100, this.canvas.width / 2 - 100, this.canvas.height / 2 - 90)
        } else if (this.type === 1) {
            this.ctx.fillRect(this.canvas.width / 2 + 10, 100, this.canvas.width / 2 - 110, this.canvas.height / 2 - 90)
        } else if (this.type === 2) {
            this.ctx.fillRect(110, this.canvas.height / 2 + 10, this.canvas.width / 2 - 100, this.canvas.height / 2 - 120)
        } else if (this.type === 3) {
            this.ctx.fillRect(this.canvas.width / 2 + 10, this.canvas.height / 2 + 10, this.canvas.width / 2 - 110, this.canvas.height / 2 - 120)
        }
        this.ctx.fillStyle = "#000000"
    }

    drawQuartersLabels = () => {
        this.ctx.font = "30px Viga"
        this.ctx.textAlign = "center"
        if (this.type === 0) {
            this.ctx.fillText(this.label.toUpperCase(), 300, 300)
        } else if (this.type === 1) {
            this.ctx.fillText(this.label.toUpperCase(), 700, 300)
        } else if (this.type === 2) {
            this.ctx.fillText(this.label.toUpperCase(), 300, 700)
        } else if (this.type === 3) {
            this.ctx.fillText(this.label.toUpperCase(), 700, 700)
        }
    }
}

enum QuarterType {
    first,
    second,
    third,
    fourth
}

export {Quarter, QuarterType}

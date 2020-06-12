class Example {
    id: number
    x: number
    y: number
    label: string
    color: string
    ctx: any
    static count: number = 0

    constructor(x: number, y: number, label: string, color: string, ctx: any) {
        this.x = x
        this.y = y
        this.label = label
        this.color = color
        this.ctx = ctx
        this.draw()
        this.id = Example.count
        Example.count ++
    }

    draw = () => {
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.arc(95+this.x, 85+this.y, 6, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.closePath()
    }
}

export {Example}

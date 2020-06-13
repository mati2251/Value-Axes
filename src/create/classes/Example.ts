class Example {
    id: number
    x: number
    y: number
    label: string
    color: string
    ctx: any
    photo: string = ''
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
        this.ctx.arc(115+(this.x*7.8), 105+(this.y*7.8), 6, 0, Math.PI * 2)
        this.ctx.fill()
        this.drawLabel()
        this.ctx.fillStyle = '#000000'
        this.drawImage()
        this.ctx.closePath()
    }

    drawLabel = () => {
        this.ctx.fillStyle = this.color
        this.ctx.font = "16px Viga"
        this.ctx.textAlign = "start"
        this.ctx.fillText(this.label, 130+(this.x*7.8), 110+(this.y*7.8))
    }

    drawImage = () => {
        if(this.photo !== ''){
            const image = new Image()
            image.src = this.photo
            image.onload = () => {
                this.ctx.drawImage(image,130+(this.x*7.8), 120+(this.y*7.8), 50, 50)
            }
        }
    }
}

export {Example}

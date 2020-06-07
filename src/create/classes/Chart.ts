import './Axes'
import {Axes, AxisType, Extremes} from "./Axes"

class Chart {
    name: string
    axesX: Axes
    axesY: Axes
    quartersLabel: QuartersValues
    canvas: HTMLCanvasElement
    ctx: any
    quartersColor : QuartersValues = {first: '#97FFFF', second: '#97FFBD', third: "#F5FF97", fourth: '#FF9797'}

    constructor(name: string, extremesX: Extremes, nameX: string, extremesY: Extremes, nameY: string, quartersValues: QuartersValues, canvas: HTMLCanvasElement) {
        this.name = name
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')
        this.axesX = new Axes(AxisType.x, extremesX, nameX, canvas, this.ctx)
        this.axesY = new Axes(AxisType.y, extremesY, nameY, canvas, this.ctx)
        this.quartersLabel = quartersValues
        this.draw()
    }

    draw = () => {
        this.drawTitle()
        this.drawQuartersColor()
        this.drawQuartersLabels()
        this.axesX.draw()
        this.axesY.draw()
    }

    clean = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    drawTitle = () => {
        this.ctx.font = "40px Viga"
        this.ctx.textAlign = "center"
        this.ctx.fillText(this.name.toUpperCase(), this.canvas.width/2, 40)
    }

    drawQuartersColor = () => {
        this.ctx.beginPath()
        this.ctx.fillStyle = this.quartersColor.second
        this.ctx.fillRect(110, 100, this.canvas.width/2 - 100, this.canvas.height/2 - 90)
        this.ctx.fillStyle = this.quartersColor.first
        this.ctx.fillRect(this.canvas.width/2 + 10, 100, this.canvas.width/2 - 110, this.canvas.height/2 - 90)
        this.ctx.fillStyle = this.quartersColor.third
        this.ctx.fillRect(110, this.canvas.height/2 + 10, this.canvas.width/2 - 100, this.canvas.height/2 - 120)
        this.ctx.fillStyle = this.quartersColor.fourth
        this.ctx.fillRect(this.canvas.width/2 + 10, this.canvas.height/2 + 10, this.canvas.width/2 - 110, this.canvas.height/2 - 120)
        this.ctx.fillStyle = "#000000"
    }

    drawQuartersLabels = () => {
        this.ctx.font = "30px Viga"
        this.ctx.textAlign = "center"
        this.ctx.fillText(this.quartersLabel.second.toUpperCase(),   300, 300)
        this.ctx.fillText(this.quartersLabel.first.toUpperCase(),   700, 300)
        this.ctx.fillText(this.quartersLabel.third.toUpperCase(),   300, 700)
        this.ctx.fillText(this.quartersLabel.fourth.toUpperCase(),   700, 700)
    }

}

interface QuartersValues {
    first: string,
    second: string,
    third: string,
    fourth: string
}

export {Chart, QuartersValues}

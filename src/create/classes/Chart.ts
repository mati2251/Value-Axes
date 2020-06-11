import './Axes'
import {Axes, AxisType, Extremes} from "./Axes"
import {Quarter, QuarterType} from "./Quarter";

class Chart {
    name: string
    axesX: Axes
    axesY: Axes
    quartersLabel: QuartersValues
    canvas: HTMLCanvasElement
    ctx: any
    quarters : Array<Quarter> = []

    constructor(name: string, extremesX: Extremes, nameX: string, extremesY: Extremes, nameY: string, quartersValues: QuartersValues, canvas: HTMLCanvasElement) {
        this.name = name
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')
        this.axesX = new Axes(AxisType.x, extremesX, nameX, canvas, this.ctx)
        this.axesY = new Axes(AxisType.y, extremesY, nameY, canvas, this.ctx)
        this.quartersLabel = quartersValues
        this.quarters[0] = new Quarter(QuarterType.first, quartersValues.first, '#97FFFF', canvas, this.ctx)
        this.quarters[1] = new Quarter(QuarterType.second, quartersValues.second, '#97FFBD', canvas, this.ctx)
        this.quarters[2] = new Quarter(QuarterType.third, quartersValues.third, '#F5FF97', canvas, this.ctx)
        this.quarters[3] = new Quarter(QuarterType.fourth, quartersValues.fourth, '#FF9797', canvas, this.ctx)
        this.draw()
    }

    draw = () => {
        this.drawTitle()
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

}

interface QuartersValues {
    first: string,
    second: string,
    third: string,
    fourth: string
}

export {Chart, QuartersValues}

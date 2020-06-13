import './Axes'
import {Axes, AxisType, Extremes} from "./Axes"
import {Quarter, QuarterType} from "./Quarter";
import {Example} from './Example'

class Chart {
    name: string
    axesX: Axes
    axesY: Axes
    canvas: HTMLCanvasElement
    ctx: any
    quarters : Array<Quarter> = []
    examples : Array<Example> = []

    constructor(name: string, extremesX: Extremes, nameX: string, extremesY: Extremes, nameY: string, quartersValues: QuartersValues, canvas: HTMLCanvasElement) {
        this.name = name
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')
        this.axesX = new Axes(AxisType.x, extremesX, nameX, canvas, this.ctx)
        this.axesY = new Axes(AxisType.y, extremesY, nameY, canvas, this.ctx)
        this.quarters[0] = new Quarter(QuarterType.first, quartersValues.first, '#97FFFF', canvas, this.ctx)
        this.quarters[1] = new Quarter(QuarterType.second, quartersValues.second, '#97FFBD', canvas, this.ctx)
        this.quarters[2] = new Quarter(QuarterType.third, quartersValues.third, '#F5FF97', canvas, this.ctx)
        this.quarters[3] = new Quarter(QuarterType.fourth, quartersValues.fourth, '#FF9797', canvas, this.ctx)
        this.draw()
    }

    addExample = () =>{
        this.examples.push(new Example(0,0,'Example', '#000000', this.ctx))
    }

    draw = () => {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'black'
        this.drawTitle()
        this.quarters.forEach((item) => item.draw())
        this.examples.forEach((item) => item.draw())
        this.axesX.draw()
        this.axesY.draw()
        this.drawLogo()
    }

    clean = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    drawTitle = () => {
        this.ctx.font = "40px Viga"
        this.ctx.textAlign = "center"
        this.ctx.fillText(this.name.toUpperCase(), this.canvas.width/2, 40)
    }

    drawLogo = () => {
        this.ctx.beginPath()
        const image = new Image();
        image.src = '../../resources/axis.png'
        image.onload = () => {
            this.ctx.drawImage(image, 800, 900, 153, 39)
        }
        this.ctx.closePath()
    }

}

interface QuartersValues {
    first: string,
    second: string,
    third: string,
    fourth: string
}

export {Chart, QuartersValues}

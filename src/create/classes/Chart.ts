import './Axes'
import {Axes, AxisType, Extremes} from "./Axes";

class Chart {
    private _name: string
    set name(value: string){
        this._name = value;
        this.drawTitle();
    }
    get name(): string{
        return this._name
    }
    axesX: Axes;
    axesY: Axes;
    quartersValues: QuartersValues;
    canvas: HTMLCanvasElement
    ctx: any

    constructor(name: string, extremesX: Extremes, nameX: string, extremesY: Extremes, nameY: string, quartersValues: QuartersValues, canvas: HTMLCanvasElement) {
        this._name = name
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')
        this.axesX = new Axes(AxisType.x, extremesX, nameX, canvas, this.ctx);
        this.axesY = new Axes(AxisType.y, extremesY, nameY, canvas, this.ctx)
        this.quartersValues = quartersValues
        this.draw()
    }

    draw = () => {
        this.drawTitle()
        this.axesX.draw();
        this.axesY.draw();
    }

    clean = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    drawTitle = () => {
        this.ctx.font = "40px Viga";
        this.ctx.textAlign = "center";
        this.ctx.fillText(this._name.toUpperCase(), this.canvas.width/2, 40);
    }


}

interface QuartersValues {
    first: string,
    second: string,
    third: string,
    fourth: string
}

export {Chart, QuartersValues};

import './Axes'
import {Axes, AxisType, Extremes} from "./Axes";

class Chart {
    name: string
    axesX: Axes;
    axesY: Axes;
    quartersValues: QuartersValues;
    canvas: HTMLCanvasElement
    ctx: any

    constructor(name: string, extremesX: Extremes, nameX: string, extremesY: Extremes, nameY: string, quartersValues: QuartersValues, canvas: HTMLCanvasElement) {
        this.name = name
        this.axesX = new Axes(AxisType.x, extremesX, nameX);
        this.axesY = new Axes(AxisType.y, extremesY, nameY)
        this.quartersValues = quartersValues
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')
    }
}

interface QuartersValues {
    first: string,
    second: string,
    third: string,
    fourth: string
}

export {Chart, QuartersValues};

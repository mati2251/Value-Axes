import './Axes'

class Chart {
    axesX: Axes;
    axesY: Axes;
    quartersValues: QuartersValues

    constructor(extremesX: Extremes, nameX: string, extremesY: Extremes, nameY: string, quartersValues: QuartersValues) {
        this.axesX = new Axes(AxisType.x, extremesX, nameX);
        this.axesY = new Axes(AxisType.y, extremesY, nameY)
        this.quartersValues = quartersValues
    }

}

interface QuartersValues {
    first: string,
    second: string,
    third: string,
    fourth: string
}

export default Chart;

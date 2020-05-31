import Axes from './Axes'

class Chart{
    axesX : Axes;
    axesY : Axes;
    quartersValues :QuartersValues

    constructor(axesX: Axes, axesY: Axes, quartersValues :QuartersValues) {
        this.axesX = axesX;
        this.axesY = axesY;
        this.quartersValues = quartersValues
    }

}

interface QuartersValues {
    first: string,
    second: string,
    third: string,
    fourth: string
}

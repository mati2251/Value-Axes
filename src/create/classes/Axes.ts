class Axes {
    type: AxisType;
    extremes: Extremes
    name: string

    constructor(type: AxisType = AxisType.x, extremes: Extremes, name: string) {
        this.type = type;
        this.extremes = extremes;
        this.name = name
    }


}

interface Extremes {
    left: string,
    right: string
}

enum AxisType {
    x,
    y
}

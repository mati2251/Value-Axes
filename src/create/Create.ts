import '../styles/global.scss'
import './create.scss'
import {Chart} from "./classes/Chart";
import {Settings} from "./classes/settings/Settings";
import {AxisType} from "./classes/Axes";

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const chart: Chart = new Chart("Chart Name", {left: "Left Value", right: "Right Value"},
    "Axes X", {left: "Bottom Value", right: "Top Value"},
    "Axes Y", {
        first: "First Quarter",
        second: "Second Quarter",
        third: "Third Quarter",
        fourth: "Fourth Quarter"
    }, canvas);
const settings: Settings = new Settings(chart);
window.AxisType = AxisType

declare global {
    interface Window {
        axesSetting: any
        AxisType: any
        quarterSettings: any
        createExample: any
        removeExample: any
    }
}

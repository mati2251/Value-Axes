import '../styles/global.scss'
import './create.scss'
import {Chart} from "./classes/Chart";
import {Settings} from "./classes/settings/Settings";
import {AxisType} from "./classes/Axes";

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const chart: Chart = new Chart("Chart Name", {left: "Left Value", right: "Right Value"},
    "Axes X label", {left: "Bottom Value", right: "Top Value"},
    "Axes Y label", {first: "Value", second: "Value", third: "Value", fourth: "Value"}, canvas);
const settings : Settings = new Settings(chart);
window.AxisType = AxisType

declare global {
    interface Window {
        axesSetting: any,
        AxisType: any
    }
}

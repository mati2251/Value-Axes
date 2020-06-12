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
const menu: any = document.getElementById('generateMenu')
menu.style = 'display: none'
window.AxisType = AxisType

const generate = () => {
    const img = canvas.toDataURL("image/png");
    displayGenerateMenu()
}

const displayGenerateMenu = () => {
    menu.style = 'display: flex'
}

const hiddenGenerateMenu = () => {
    menu.style = 'display: none'
}

window.generate = generate
window.hiddenGenerateMenu = hiddenGenerateMenu
declare global {
    interface Window {
        axesSetting: any
        AxisType: any
        quarterSettings: any
        createExample: any
        removeExample: any
        exampleSettings: any
        generate: any
        hiddenGenerateMenu: any
    }
}

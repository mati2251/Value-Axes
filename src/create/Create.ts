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
let image: any

const generate = () => {
    const img = canvas.toDataURL("image/png");
    document.getElementById('imgContainer').innerHTML = `
    <img src="${img}" alt="Value Axes" id="generateImage"/>
    `
    // @ts-ignore
    image = document.getElementById('generateImage').src
    displayGenerateMenu()
}

const displayGenerateMenu = () => {
    menu.style = 'display: flex'
}

const hiddenGenerateMenu = () => {
    menu.style = 'display: none'
}

const downloadChart = () => {
    const link = document.getElementById('download');
    link.onclick = () => {
        link.setAttribute('href', image)
        link.setAttribute('download', 'ValueAxes.png')
    }
}

downloadChart()

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
        closeDetails: any
        saveDetailsAxes: any
        saveQuartersDetails: any
        saveExampleDetails: any
        controlPositionInput: any
        photoLoad: any
        chartSettings: any
        saveChart: any
        openMenuHandler: any
    }
}

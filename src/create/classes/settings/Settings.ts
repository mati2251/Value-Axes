import './settings.scss'
import {Chart, QuartersValues} from "../Chart"
import {AxisType} from "../Axes"

class Settings {
    settings = document.getElementById("settings")
    chart: Chart

    constructor(chart: Chart) {
        window.axesSetting = this.axesSettings
        window.quarterSettings = this.quarterSettings
        window.createExample = this.createExample
        window.removeExample = this.removeExample
        this.chart = chart
        this.displayAll()
    }

    createExample = () => {
        this.chart.addExample()
        this.settings.innerHTML = ''
        this.displayAll()
    }

    displayAll = () => {
        this.displayAxesSettings()
        this.displayAxesQuarters()
        this.displayExample()
    }

    axesSettings = (axisType: AxisType) => {
        console.log(axisType)
    }

    quarterSettings = (type: number) => {
    }

    removeExample = (id: number) => {
        this.chart.examples.splice(this.chart.examples.findIndex((item) => item.id === id))
        this.chart.clean()
        this.chart.draw()
        this.settings.innerHTML = ''
        this.displayAll()
    }

    displayAxesSettings = () => {
        this.settings.innerHTML +=
            `<h3>AXES:</h3>
            <div class="settingsRow">
                <button onclick="axesSetting(AxisType.x)">
                    <img src="../../../resources/settings-icon.svg" alt="settings" class="settingsIcon">
                </button>
                <h4>${this.chart.axesX.name.toUpperCase()}</h4>
            </div><div class="settingsRow">
                <button onclick="axesSetting(AxisType.y)">
                    <img src="../../../resources/settings-icon.svg" alt="settings" class="settingsIcon">
                </button>
                <h4>${this.chart.axesY.name.toUpperCase()}</h4>
            </div>
            `
    }

    displayAxesQuarters = () => {
        this.settings.innerHTML +=
            `<h3>QUARTES:</h3>
            <div class="settingsRow">
                <button onclick="quarterSettings(0)">
                    <img src="../../../resources/settings-icon.svg" alt="settings" class="settingsIcon">
                </button>
                <h4>${this.chart.quarters[0].label.toUpperCase()}</h4>
            </div><div class="settingsRow">
                <button onclick="quarterSettings(1)">
                    <img src="../../../resources/settings-icon.svg" alt="settings" class="settingsIcon">
                </button>
                <h4>${this.chart.quarters[1].label.toUpperCase()}</h4>
            </div>
            <div class="settingsRow">
                <button onclick="quarterSettings(2)">
                    <img src="../../../resources/settings-icon.svg" alt="settings" class="settingsIcon">
                </button>
                <h4>${this.chart.quarters[2].label.toUpperCase()}</h4>
            </div>
            <div class="settingsRow">
                <button onclick="quarterSettings(3)">
                    <img src="../../../resources/settings-icon.svg" alt="settings" class="settingsIcon">
                </button>
                <h4>${this.chart.quarters[3].label.toUpperCase()}</h4>
            </div>
            `
    }

    displayExample = () => {
        this.settings.innerHTML += `
        <h3>EXAMPLES:</h3>
        ${this.chart.examples.map((item) => {
            return (`
            <div class="settingsRow">
                <button onclick="quarterSettings()">
                    <img src="../../../resources/settings-icon.svg" alt="settings" class="settingsIcon">
                </button>
                <button onclick="removeExample(${item.id})">
                    <img src="../../../resources/delete.svg" alt="delete" class="deleteIcon">
                </button>
                <h4>${item.label.toUpperCase()}</h4>
             </div> 
            `)
        }).join('')}
        <button class="button" onclick="createExample()"><h5>ADD</h5></button>
        `
    }
}


export {Settings}

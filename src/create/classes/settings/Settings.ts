import './settings.scss'
import {Chart} from "../Chart"
import {AxisType} from "../Axes"

class Settings {
    settings = document.getElementById("settings")
    chart: Chart
    alert: boolean = false

    constructor(chart: Chart) {
        window.axesSetting = this.axesSettings
        window.quarterSettings = this.quarterSettings
        window.createExample = this.createExample
        window.removeExample = this.removeExample
        window.exampleSettings = this.exampleSettings
        window.closeDetails = this.closeDetails
        window.saveDetailsAxes = this.saveDetailsAxes
        window.saveQuartersDetails = this.saveQuartersDetails
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
        if (AxisType.x === axisType) {
            this.settings.innerHTML = `
            <h3>${this.chart.axesX.name.toUpperCase()} SETTINGS</h3>
            <div class="settingsRow">
                <h4 class="marginRight">Label:</h4>
                <input id='labelAxes' value='${this.chart.axesX.name}' placeholder="Label">
            </div>
            <div class="settingsRow">
                <h4 class="marginRight">Left Extreme:</h4>
                <input id='leftExtremes' value='${this.chart.axesX.extremes.left}' placeholder="Left Extreme">
            </div>
            <div class="settingsRow">
                <h4 class="marginRight">Right Extreme:</h4>
                <input id="rightExtremes" value='${this.chart.axesX.extremes.right}' placeholder="Right Extreme">
            </div>
            <div class="buttonContainer">
                <button class="button" onclick="closeDetails()">CLOSE</button>
                <button class="button" onclick="saveDetailsAxes(AxisType.x)">SAVE</button>
            </div>
            `
        } else if (AxisType.y === axisType) {
            this.settings.innerHTML = `
            <h3>${this.chart.axesY.name.toUpperCase()} SETTINGS</h3>
            <div class="settingsRow">
                <h4 class="marginRight">Label:</h4>
                <input id='labelAxes' value='${this.chart.axesY.name}' placeholder="Label">
            </div>
            <div class="settingsRow">
                <h4 class="marginRight">Bottom Extreme:</h4>
                <input id='leftExtremes' value='${this.chart.axesY.extremes.left}' placeholder="Left Extreme">
            </div>
            <div class="settingsRow">
                <h4 class="marginRight">Top Extreme:</h4>
                <input id="rightExtremes" value='${this.chart.axesY.extremes.right}' placeholder="Right Extreme">
            </div>
            <div class="buttonContainer">
                <button class="button" onclick="closeDetails()">CLOSE</button>
                <button class="button" onclick="saveDetailsAxes(AxisType.y)">SAVE</button>
            </div>
            `
        }
    }

    quarterSettings = (type: number) => {
        this.settings.innerHTML = `
            <h3>${this.chart.quarters[type].label.toUpperCase()} SETTINGS</h3>
            <div class="settingsRow">
                <h4 class="marginRight">Label:</h4>
                <input id='labelQuarters' value='${this.chart.quarters[type].label}' placeholder="Label">
            </div>
            <div class="settingsRow">
                <h4 class="marginRight">Color:</h4>
                <input id='colorQuarters' type="color" style="all: initial; height: 20px; width: 20px" value='${this.chart.quarters[type].color}'>
            </div>
            <div class="buttonContainer">
                <button class="button" onclick="closeDetails()">CLOSE</button>
                <button class="button" onclick="saveQuartersDetails(${type})">SAVE</button>
            </div>
            `
    }

    saveQuartersDetails = (type: number) => {
        // @ts-ignore
        const label = document.getElementById('labelQuarters').value.toString()
        // @ts-ignore
        const color = document.getElementById('colorQuarters').value.toString()
        if (label.length > 40) {
            if (!this.alert) {
                this.settings.innerHTML += `<h4 style="color: #c70000">TOO LONG VALUES. MAX LENGTH EVERY VALUES IS 40 CHARACTERS</h4>`
                this.alert = true
            }
        } else {
            this.chart.quarters[type].label = label
            this.chart.quarters[type].color = color
            this.closeDetails()
            this.chart.clean()
            this.chart.draw()
            this.alert = false
        }
    }

    exampleSettings = (id: number) => {

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
            `<h3>QUARTERS:</h3>
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
                <button onclick="exampleSettings(${item.id})">
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

    saveDetailsAxes = (axisType: AxisType) => {
        // @ts-ignore
        const name = document.getElementById('labelAxes').value.toString()
        // @ts-ignore
        const left = document.getElementById('leftExtremes').value.toString()
        // @ts-ignore
        const right = document.getElementById('rightExtremes').value.toString()
        if (name.length > 40 || left.length > 40 || right.length > 40) {
            if (!this.alert) {
                this.settings.innerHTML += `<h4 style="color: #c70000">TOO LONG VALUES. MAX LENGTH EVERY VALUES IS 40 CHARACTERS</h4>`
                this.alert = true
            }
        } else {
            if (AxisType.x) {
                this.chart.axesX.name = name
                this.chart.axesX.extremes.left = left
                this.chart.axesX.extremes.right = right
            } else {
                this.chart.axesY.name = name
                this.chart.axesY.extremes.left = left
                this.chart.axesY.extremes.right = right
            }
            this.closeDetails()
            this.chart.clean()
            this.chart.draw()
            this.alert = false
        }
    }

    closeDetails = () => {
        this.settings.innerHTML = ''
        this.displayAll()
        this.alert = false
    }
}


export {Settings}

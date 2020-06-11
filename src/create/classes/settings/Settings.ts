import './settings.scss'
import {Chart, QuartersValues} from "../Chart";
import {AxisType} from "../Axes";

class Settings {
    settings = document.getElementById("settings")
    chart: Chart

    constructor(chart: Chart) {
        window.axesSetting = this.axesSettings;
        this.chart = chart;
        this.displayAxesSettings();
        this.displayAxesQuarters()
    }

    axesSettings = (axisType :AxisType) => {
        console.log(axisType)
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
                <button onclick="axesSetting(AxisType.x)">
                    <img src="../../../resources/settings-icon.svg" alt="settings" class="settingsIcon">
                </button>
                <h4>${this.chart.quartersLabel.first.toUpperCase()}</h4>
            </div><div class="settingsRow">
                <button onclick="axesSetting(AxisType.y)">
                    <img src="../../../resources/settings-icon.svg" alt="settings" class="settingsIcon">
                </button>
                <h4>${this.chart.quartersLabel.second.toUpperCase()}</h4>
            </div>
            <div class="settingsRow">
                <button onclick="axesSetting(AxisType.x)">
                    <img src="../../../resources/settings-icon.svg" alt="settings" class="settingsIcon">
                </button>
                <h4>${this.chart.quartersLabel.third.toUpperCase()}</h4>
            </div><div class="settingsRow">
                <button onclick="axesSetting(AxisType.y)">
                    <img src="../../../resources/settings-icon.svg" alt="settings" class="settingsIcon">
                </button>
                <h4>${this.chart.quartersLabel.fourth.toUpperCase()}</h4>
            </div>
            `
    }
}


export {Settings}

import '../styles/global.scss'
import './create.scss'
import Chart from './classes/Chart'

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const chart: Chart = new Chart({left: "Left Value", right: "Right Value"},
    "Axes X label", { left: "Bottom Value", right: "Top Value"},
    "dwd", {first: "Value", second: "Value", third: "Value", fourth: "Value"});


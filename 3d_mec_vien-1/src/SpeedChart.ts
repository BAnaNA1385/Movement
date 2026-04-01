import { Chart, registerables } from "chart.js";
import { COLORS } from "./constants";

Chart.register(...registerables);

const CHART_COLORS = [
    '#58a6ff', // Blue
    '#3fb950', // Green
    '#d29922', // Yellow
    '#f85149', // Red
    '#a371f7', // Purple
];

export class SpeedChart {
    private chart: Chart;
    private readonly maxDataPoints = 500;
    private times: number[] = [];
    private datasets: {
        [key: string]: {
            values: number[];
        };
    } = {};
    private startTime: number;

    constructor(canvas: HTMLCanvasElement) {
        this.startTime = Date.now();

        this.chart = new Chart(canvas, {
            type: "line",
            data: {
                labels: this.times,
                datasets: [],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: '#8b949e',
                            font: { size: 10, family: 'Inter' },
                            boxWidth: 12,
                            padding: 8,
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { color: 'rgba(139, 148, 158, 0.1)' },
                        ticks: { color: '#8b949e' }
                    },
                    // Axis for Camber and Toe
                    'y-degrees': {
                        type: 'linear',
                        position: 'left',
                        title: { display: true, text: 'Degrees (°)', color: '#8b949e' },
                        grid: { color: 'rgba(139, 148, 158, 0.1)' },
                        ticks: { color: '#8b949e' }
                    },
                    // Axis for Damper Compression (mm)
                    'y-mm': {
                        type: 'linear',
                        position: 'right',
                        title: { display: true, text: 'Travel (mm)', color: '#8b949e' },
                        grid: { drawOnChartArea: false }, // Prevent gridline clashing
                        ticks: { color: '#8b949e' }
                    },
                    // Axis for Motion Ratio
                    'y-ratio': {
                        type: 'linear',
                        position: 'right',
                        title: { display: true, text: 'Ratio', color: '#8b949e' },
                        grid: { drawOnChartArea: false },
                        ticks: { color: '#8b949e' }
                    },
                    // Axis for Wheel Rate
                    'y-rate': {
                        type: 'linear',
                        position: 'right',
                        display: false, // Hide the axis line to keep UI clean, but keep scaling
                    }
                },
            },
        });
    }

    addDataset(name: string) {
        this.datasets[name] = { values: [] };
        const idx = Object.keys(this.datasets).length - 1;
        
        // Dynamically assign the correct axis based on the dataset name
        let targetAxis = 'y-degrees';
        if (name.toLowerCase().includes('compression')) targetAxis = 'y-mm';
        if (name.toLowerCase().includes('ratio')) targetAxis = 'y-ratio';
        if (name.toLowerCase().includes('rate')) targetAxis = 'y-rate';

        this.chart.data.datasets.push({
            label: name,
            data: this.datasets[name].values,
            yAxisID: targetAxis,
            borderColor: CHART_COLORS[idx % CHART_COLORS.length],
            backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] + '20',
            borderWidth: 1.5,
            tension: 0.3,
            pointRadius: 0,
            fill: false,
        });
    }

    addValue(dataset: string, value: number) {
        this.datasets[dataset].values.push(value);
        
        if (this.datasets[dataset].values.length > this.maxDataPoints) {
            this.datasets[dataset].values.shift();
        }
    }

    update() {
        this.times.push(Math.round((Date.now() - this.startTime) / 100) / 10);

        if (this.times.length > this.maxDataPoints) {
            this.times.shift();
        }
        this.chart.update("none");
    }
}
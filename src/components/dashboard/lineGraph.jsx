import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

// Register Chart.js components and annotation plugin
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, annotationPlugin);

const LineChart = ({ chartTitle }) => {
    // Simulated Stock Data
    const stockData = [
        { "time": "09:30", "price": 403.93 },
        { "time": "09:35", "price": 404.59 },
        { "time": "09:40", "price": 406.26 },
        { "time": "09:45", "price": 406.59 },
        { "time": "09:50", "price": 408.16 },
        { "time": "09:55", "price": 405.68 },
        { "time": "10:00", "price": 408.36 },
        { "time": "10:05", "price": 407.58 },
        { "time": "10:10", "price": 407.28 },
        { "time": "10:15", "price": 409.83 },
        { "time": "10:20", "price": 409.36 },
        { "time": "10:25", "price": 409.82 },
        { "time": "10:30", "price": 406.82 },
        { "time": "10:35", "price": 409.33 },
        { "time": "10:40", "price": 406.68 },
        { "time": "10:45", "price": 407.35 },
        { "time": "10:50", "price": 408.35 },
        { "time": "10:55", "price": 406.41 },
        { "time": "11:00", "price": 405.50 },
        { "time": "11:05", "price": 409.33 },
        { "time": "11:10", "price": 408.16 },
        { "time": "11:15", "price": 408.24 },
        { "time": "11:20", "price": 407.75 },
        { "time": "11:25", "price": 409.71 },
        { "time": "11:30", "price": 412.41 },
        { "time": "11:35", "price": 408.52 },
        { "time": "11:40", "price": 410.58 },
        { "time": "11:45", "price": 410.44 },
        { "time": "11:50", "price": 412.92 },
        { "time": "11:55", "price": 413.15 },
        { "time": "12:00", "price": 413.28 },
        { "time": "12:05", "price": 414.21 },
        { "time": "12:10", "price": 413.95 },
        { "time": "12:15", "price": 413.25 },
        { "time": "12:20", "price": 413.73 },
        { "time": "12:25", "price": 415.95 },
        { "time": "12:30", "price": 415.02 },
        { "time": "12:35", "price": 415.51 },
        { "time": "12:40", "price": 413.91 },
        { "time": "12:45", "price": 413.12 },
        { "time": "12:50", "price": 415.32 },
        { "time": "12:55", "price": 414.33 },
        { "time": "13:00", "price": 415.50 },
        { "time": "13:05", "price": 416.52 },
        { "time": "13:10", "price": 417.29 },
        { "time": "13:15", "price": 416.66 },
        { "time": "13:20", "price": 415.67 },
        { "time": "13:25", "price": 414.06 },
        { "time": "13:30", "price": 418.43 },
        { "time": "13:35", "price": 419.08 },
        { "time": "13:40", "price": 415.24 },
        { "time": "13:45", "price": 418.05 },
        { "time": "13:50", "price": 417.92 },
        { "time": "13:55", "price": 416.74 },
        { "time": "14:00", "price": 417.27 },
        { "time": "14:05", "price": 417.16 },
        { "time": "14:10", "price": 419.77 },
        { "time": "14:15", "price": 422.31 },
        { "time": "14:20", "price": 422.16 },
        { "time": "14:25", "price": 419.67 },
        { "time": "14:30", "price": 422.47 },
        { "time": "14:35", "price": 419.79 },
        { "time": "14:40", "price": 419.84 },
        { "time": "14:45", "price": 419.28 },
        { "time": "14:50", "price": 417.16 },
        { "time": "14:55", "price": 416.47 },
        { "time": "15:00", "price": 420.12 },
        { "time": "15:05", "price": 420.43 },
        { "time": "15:10", "price": 418.27 },
        { "time": "15:15", "price": 422.97 },
        { "time": "15:20", "price": 420.73 },
        { "time": "15:25", "price": 419.38 },
        { "time": "15:30", "price": 422.61 },
        { "time": "15:35", "price": 419.99 },
        { "time": "15:40", "price": 421.91 },
        { "time": "15:45", "price": 423.26 },
        { "time": "15:50", "price": 423.65 },
        { "time": "15:55", "price": 420.43 },
        { "time": "16:00", "price": 423.83 }
    ];
    

    // Yesterday's Closing Price (Static for Example)
    const yesterdayClose = 410.00;

    // Chart Data
    const data = {
        labels: stockData.map((point) => point.time), // X-axis: Time
        datasets: [
            {
                label: "Stock Price",
                data: stockData.map((point) => point.price), // Y-axis: Price
                borderColor: "#00C805", // Robinhood Green
                backgroundColor: "rgba(0, 200, 5, 0.2)", // Light Green Fill
                borderWidth: 2,
                tension: 1, // Smooth curve
                pointRadius: 0, // Hide points
            },
        ],
    };

    // Chart Options
    const options = {
        responsive: true,
        plugins: {
            legend: { display: false }, // Hide legend
            title: { display: true, text: chartTitle, font: { size: 16 } },
            tooltip: { enabled: true },
            annotation: {
                annotations: {
                    yesterdayCloseLine: {
                        type: "line",
                        yMin: yesterdayClose,
                        yMax: yesterdayClose,
                        borderColor: "black", // Line Color
                        borderWidth: 2,
                        borderDash: [1, 1], // Dotted Line
                        label: {
                            content: `Yesterday Close: $${yesterdayClose.toFixed(2)}`,
                            enabled: true,
                            position: "start",
                            backgroundColor: "black",
                            color: "white",
                        },
                    },
                },
            },
        },
        scales: {
            x: {
                grid: { display: false }, // Hide X-axis grid
                min: 50
            },
            y: {
                grid: { display: false }, // Hide Y-axis grid
                max: 425,
                min: 403,
                ticks: {
                    callback: (value) => `$${value.toFixed(2)}`, // Format prices as $
                },
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default LineChart;

import React, {useState} from "react";
import {Line} from "react-chartjs-2";
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, plugins} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip);

const LineChart = ({chartTitle}) => 
{
    // chart data
    const data = 
    {
        labels: ["1", "2", "3", "4", "5","1", "2", "3", "4", "5"],
        datasets: 
        [
            {
                label: "price",
                data: [10, 15, 5, 25, 5, 10, 15, 5, 25, 5],
                borderColor: "#32d20a",
                backgroundColor: "#32d20a",
                tension: .5,
            }
        ]
    }

    // Chart settings
    const options = 
    {
        responsive: true,
        plugins: 
        {
            legend: {display: false},
            title: { display: true, text: chartTitle},
        },
        scales: 
        {        
            x: {title: {display: false}},
            y: {title: {display: false}, beginAtZero: true},
        },

    };

    return(<Line data={data} options={options}/>);
}

export default LineChart;
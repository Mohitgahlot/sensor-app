import React from 'react';
import { Line } from 'react-chartjs-2';
import Styled from 'styled-components';

const Div = Styled.div`
    height: 460px;
    width:  92%;
    margin: 50px 0;
    padding: 40px
    border: 1px solid #dcdde1;
    background-color: white;
    border-radius:5px;
    box-shadow: 4px 4px 4px #ecf0f1;
`;

const options = {
    scales: {
        xAxes: [{
            gridLines: {
                 color: "rgba(0, 0, 0, 0)"
            }
        }],
        yAxes: [{
            gridLines: {
                // color: "rgba(0, 0, 0, 0)"
            },
            ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                    return '$' + value;
                },
                stepSize: 10
            },
            tickMarkLength: 10
        }]
    }
};

const H1 = Styled.h2`
    color: #747474;
    margin-bottom: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
`;

const lineChart = (props) => {
    return (
        <Div>
            <H1>Monthly Budget</H1>
            <Line data={props.chartData} height="35%" width="90%" options={options}/>
        </Div>
    );
};

export default lineChart;

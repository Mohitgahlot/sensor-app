import React from 'react';
import { Line } from 'react-chartjs-2';
import Styled from 'styled-components';

const Div = Styled.div`
    height: 500px;
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

const AddInfo = Styled.div`
     width: 20%;
     border: 1px solid #dcddd1;
     height: 50px;
     padding: 20px;
     margin-bottom: 10px;
     border-radius: 5px;
`;

const InfoHead = Styled.div`
    width: 70%;
    display: inline-block;
    font-family: 'Roboto';
`;

const InfoValue = Styled.div`
    width: 30%;
    display: inline-block;
    color: green;
`;

const Switch = Styled.div`
    height: 22px;
    padding: 0 15px;
    margin-top: 20px;
    line-height: 22px;
    color: white;
    font-size: 14px;
    outline:none;
    border: 0px;
    border-radius:5px;
    font-variant: small-caps;
`;

const lineChart = (props) => {
    console.log(props.onChange);
    return (
        <Div style={{display:props.chartData.display}}>
            <H1>Sensor Stats</H1>
            <AddInfo>
                <InfoHead>Status</InfoHead>
                <InfoValue style={{"color": props.chartData.color}}>Active</InfoValue>
                <div>
                    <Switch onClick={props.onChange} style={{"background-color": "#27ae60"}}>
                        {props.chartData.status}
                    </Switch>
                </div>
            </AddInfo>
            <Line data={props.chartData} height="35%" width="90%" options={options}/>
        </Div>
    );
};

export default lineChart;

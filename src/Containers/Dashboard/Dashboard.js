import React, {Component} from 'react';
import Header from '../../Components/Header';
import Styled from 'styled-components';
import Chart from '../Chart/Chart';
import Map from '../../Components/Chart/Map';
import InfoBox from '../../Components/InfoBox/InfoBox';
import Table from '../../Components/Tables/Table';
import axios from 'axios';

import './font.css';
import lineChart from "../../Components/Chart/LineChart";


const Dash = Styled.div`
     padding: 30px 10%;
     background-color: rgba(250, 250, 250, 0.36);
`;


const BoxContainer = Styled.div`
    height: 200px;
    margin-top: 100px;
    color: grey;
`;

class Dashboard extends Component {

    state = {
        data: null,
        display: "none",
        lineChart: {
            status:"Active",
            color: "#27ae60",
            labels: [],
            datasets:[
                {
                    label: '',
                    data: [12,24,15,24,64,31],
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    borderColor: "rgba(54, 162, 235, 0.6)",
                    borderWidth: 1.3,
                    pointBackgroundColor: "rgba(54, 162, 235, 1)",
                },
            ],
            display:"none"
        },
    };


    getData = (id) =>{
        axios.get(`http://cmpe281-retriever.us-east-1.elasticbeanstalk.com/sensor/data?location=los_angeles&sensorId=`+id).then((res)=>{
            const repos = res.data[0];
            const val1= [];
            const values = [];
            const label = [];
            repos.values.map((value,i)=>{
                const val = {clusterId:repos.clusterId,sensorId:repos.sensorId,type:repos.type,val:value.value.toFixed(3),timestamp:value.timestamp};
                values.push(val);
                val1.push(value.value);
                label.push(i*15);
            });
            const chart = {...this.state.lineChart};
            chart.datasets[0].label = repos.type;
            chart.datasets[0].data = val1;
            chart.labels = label;
            chart.status= "Active";
            chart.color= "#27ae60";
            chart.display="block";
            this.setState({data:values,lineChart:chart});
        });


    };

    showTable = (props, marker, e) => {
        this.getData(props.sensorId);

        this.setState({
            display: "block"
        });

        console.log(props.sensorId);
    };

    changeStatus = (event) =>{
        event.preventDefault();
        alert("sdas");
        const repos = this.state.data[0];
        const sensorId = repos.sensorId;
        const chart = {...this.state.lineChart};
        if(localStorage.getItem("sensorId")){
            localStorage.removeItem(sensorId);
            chart.status= "Active";
            chart.color= "#27ae60";
        }
        else{
            localStorage.addItem(sensorId,"Inactive");
            chart.status= "Inactive";
            chart.color= "Red";
        }
    };


    render() {
        return (
            <Dash className="clearfix">
                <Header/>
                <BoxContainer className="clearfix">
                    <InfoBox heading="Cluster Node Stats" key1={["Total Clusters","Active","Inactive"]} value={[36,16,10]} color="#e67e22"/>
                    <InfoBox heading="Smart Node Stats" key1={["Total Clusters","Active","Inactive"]} value={[36,16,10]} color="#e74c3c"/>
                    <InfoBox heading="Sensor Node Stats" key1={["Total Clusters","Active","Inactive"]} value={[36,16,10]} color="#3498db"/>
                </BoxContainer>
                <Map showTable={this.showTable}/>
                <Chart onChange={this.changeStatus} lineChart={this.state.lineChart}/>
                <Table data={this.state.data} display={this.state.display} />
            </Dash>
        );

    }
}

export default Dashboard;
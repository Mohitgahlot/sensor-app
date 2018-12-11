import React, {Component} from 'react';
import Header from '../../Components/Header';
import Styled from 'styled-components';
import Chart from '../Chart/Chart';
import Map from '../../Components/Chart/Map';
import InfoBox from '../../Components/InfoBox/InfoBox';
import Table from '../../Components/Tables/Table';

import './font.css';


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
    render() {
        return (
            <Dash className="clearfix">
                <Header/>
                <BoxContainer className="clearfix">
                    <InfoBox heading="Cluster Node Stats" key1={["Total Clusters","Active","Inactive"]} value={[36,16,10]} color="#e67e22"/>
                    <InfoBox heading="Smart Node Stats" key1={["Total Clusters","Active","Inactive"]} value={[36,16,10]} color="#e74c3c"/>
                    <InfoBox heading="Sensor Node Stats" key1={["Total Clusters","Active","Inactive"]} value={[36,16,10]} color="#3498db"/>
                </BoxContainer>
                <Map/>
                <Chart/>
                <Table/>
            </Dash>
        );

    }
}

export default Dashboard;
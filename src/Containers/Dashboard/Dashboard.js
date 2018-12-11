import React, {Component} from 'react';
import Header from '../../Components/Header';
import Styled from 'styled-components';
import Chart from '../Chart/Chart';
import Map from '../../Components/Chart/Map';
import InfoBox from '../../Components/InfoBox/InfoBox';
import './font.css';


const Dash = Styled.div`
     padding: 30px 10%;
     background-color: rgba(250, 250, 250, 0.36);
`;


const BoxContainer = Styled.div`
    height: 200px;
    margin-top: 100px;
`;

class Dashboard extends Component {
    render() {
        return (
            <Dash className="clearfix">
                <Header/>
                <BoxContainer className="clearfix">
                    <InfoBox heading="Cluster Node"/>
                    <InfoBox heading="Smart Node"/>
                    <InfoBox heading="Sensor Node"/>
                </BoxContainer>
                <Chart/>
            </Dash>
        );

    }
}

export default Dashboard;
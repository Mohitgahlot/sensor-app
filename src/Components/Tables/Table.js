import React from 'react';
import { Table } from 'reactstrap';
import Styled from 'styled-components';
import '../../Containers/Dashboard/font.css';

const Div = Styled.div`
    width: 92%;
    background-color:white;
    margin-top: 40px;
    padding: 20px 40px;
    padding-top: 0;
    border: 1px solid #dcdde1;
    box-shadow: 4px 4px 4px #ecf0f1;
    background-color: white;
    color: grey;
    height: 600px;
    overflow: auto;
`;


const Tr = Styled.tr`
    height: 60px;
    font-family: 'Raleway',san-serif;

`;

const TR = Styled.tr`
    height: 30px;
    font-family: 'Raleway',san-serif;
`;

const H1 = Styled.h2`
    color: #747474;
    margin-bottom: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    position: absolute;
    width: 75%;
    height: 60px;
    line-height: 70px;
    background-color: white;
    margin-top: 0px;
`;



const table = (prods) =>{

    var Values = [];

    if(prods.data){
        Values = prods.data;
    }



    return (
            <Div style={{display:prods.display}}>
                <H1>Data Table</H1>
                <Table bordered style={{width:"100%", "padding-top": "60px", textAlign:"left", backgroundColor:"white"}}>
                    <thead>
                    <Tr>
                        <th style={{width: "10%"}}>#</th>
                        <th style={{width: "24%"}}>Sensor Id</th>
                        <th style={{width: "18%"}}>Cluster Id</th>
                        <th style={{width: "12%"}}>Type</th>
                        <th style={{width: "12%"}}>Value</th>
                        <th style={{width: "26%"}}>Timestamp</th>
                    </Tr>
                    </thead>
                    <tbody>
                    {Values.map(( listValue, index ) => {
                        return (
                            <TR key={index+1}>
                                <td>{index+1}</td>
                                <td>{listValue.sensorId}</td>
                                <td>{listValue.clusterId}</td>
                                <td>{listValue.type}</td>
                                <td>{listValue.val}</td>
                                <td>{listValue.timestamp}</td>
                            </TR>
                        );
                    })}
                    </tbody>
                </Table>
                {console.log(Values)}
            </Div>
        );
};

export default table;

import React from 'react';
import { Table } from 'reactstrap';
import Styled from 'styled-components';
import '../../Containers/Dashboard/font.css';

const Div = Styled.div`
    width: 92%;
    background-color:white;
    margin-top: -30px;
    padding: 20px 40px;
    border: 1px solid #dcdde1;
    box-shadow: 4px 4px 4px #ecf0f1;
    background-color: white;
    color: grey;
`;


const Tr = Styled.tr`
    height: 60px;
    border: 1px solid red;
    font-family: 'Raleway',san-serif;
`;

const H1 = Styled.h2`
    color: #747474;
    margin-bottom: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
`;



const table = () =>{

    var rows = [];
    for(var x=0; x<5; x++){

        rows.push("<tr><th scope='row'>1</th>td>Mark</td> <td>Otto</td> <td>@mdo</td></tr>");

    }

    const Values = [
        {
            id: 1,
            data:3,
            price:4
        },
        {
                id: 1,
                data:3,
                price:4
        },
        {
                id: 1,
                data:3,
                price:4
         }
    ];

    return (
            <Div>
                <H1>Monthly Budget</H1>
                <Table bordered style={{width:"100%", textAlign:"left", backgroundColor:"white"}}>
                    <thead>
                    <Tr>
                        <th style={{width: "19%"}}>#</th>
                        <th style={{width: "30%"}}>First Name</th>
                        <th style={{width: "32%"}}>Last Name</th>
                        <th style={{width: "24%"}}>Username</th>
                    </Tr>
                    </thead>
                    <tbody>
                    {Values.map(( listValue, index ) => {
                        return (
                            <tr key={index+1}>
                                <td>{index+1}</td>
                                <td>{listValue.id}</td>
                                <td>{listValue.data}</td>
                                <td>{listValue.price}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </Div>
        );
};

export default table;

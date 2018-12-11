import React from 'react';
import Styled from 'styled-components';
import '../../Containers/Dashboard/font.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAtom} from '@fortawesome/free-solid-svg-icons';
import {faDharmachakra} from '@fortawesome/free-solid-svg-icons';
import Sensor from './sensor.png';
const Box = Styled.div`
    width: 30.99%;
    height:100%;
    float: left;
    height: 100%;
    border: 1px solid grey;
    margin-right: 3.2%;
    border: 1px solid #dcdde1;
    background-color: white;
    border-radius: 5px;
    box-shadow: 4px 4px 4px #ecf0f1;
    
    :last-of-type{
        margin-right:0
    }
`;

const H4 = Styled.div`
    font-family: 'Raleway', san-serif;
    height: 40px;
    width: 90%;
    padding-left: 8px;
    margin-top: 5px;
    margin-left: 5%;
    line-height: 45px;
    font-size: 18px;
    border-bottom: 1px solid #dcdde1;
    display: inline-block;
    
`;


const InfoWrapper = Styled.div`
    margin-top: 20px;
    padding-left: 7%;
`;

const InfoHead = Styled.div`
    display: inline-block;
    width: 88%;
`;

const InfoBody = Styled.div`
    display: inline-block;
`;

// const IMG = Styled.img`
//     height: 23px;
//     width: 23px;
//     display: inline-block;
// `;

const Span = Styled.div`
    float: right;
    margin-right: 2.6%;
    font-size: 22px;
`;


const infoBox = (prods) =>{
    return(
        <Box>
            <H4>
                {prods.heading}
                <Span><FontAwesomeIcon icon={faAtom} /></Span>
            </H4>
            <InfoWrapper>
                <InfoHead>{prods.key1[0]}</InfoHead>
                <InfoBody>{prods.value[0]}</InfoBody>
            </InfoWrapper>
            <InfoWrapper>
                <InfoHead>{prods.key1[1]}</InfoHead>
                <InfoBody>{prods.value[1]}</InfoBody>
            </InfoWrapper>
            <InfoWrapper>
                <InfoHead>{prods.key1[2]}</InfoHead>
                <InfoBody>{prods.value[2]}</InfoBody>
            </InfoWrapper>
        </Box>
    );
};

export default infoBox;
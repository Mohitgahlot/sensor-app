import React from 'react';
import Styled from 'styled-components';
import '../../Containers/Dashboard/font.css';

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
    color: grey;
    
`;

const infoBox = (prods) =>{
    return(
        <Box>
            <H4>
                {prods.heading}
            </H4>
        </Box>
    );
};

export default infoBox;
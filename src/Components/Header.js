import React from 'react';
import Styled from 'styled-components';


const Button = Styled.button`
      background-color: #2ecc71;
      color: white;
      height: 40px;
      line-height: 40px;
      padding: 0 30px;
      outline: none;
      border: 0;
      font-size: 15px;
      float: right;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 5px;
      :hover{
         background-color: #27ae60;
      }
`;



const header = (prods) =>{
    return(
    <Button>Sign In</Button>
    );
};

export default header;
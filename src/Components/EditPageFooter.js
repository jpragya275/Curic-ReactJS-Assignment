// import React, { useState } from 'react';
// import { Form, Col } from 'react-bootstrap';
import styled from "styled-components";
// import './EditFooterPage.css'
// import Button from '@material-ui/core/Button';

export const Footer = () => {
  const Button = styled.button`
  background-color: white;
  color: black;
  // font-size: 20px;
  padding: 12px 40px;
  border-radius: 20px;
  border: 3px solid grey;
  // margin: 10px 0px;
  cursor: pointer;
`;
  return (

    <div className='container my-5'>
      <Button style={{ span: 'left' }}>Add Section</Button>
      <Button style={{ float: 'right', padding: '12px 40px' }}>View</Button>
    </div>
  );
};

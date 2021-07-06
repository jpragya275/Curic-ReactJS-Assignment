import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';

export const Header = () => {
  // let myStyle = {
  //   marginTop: "10"
  // }
  return (
    <div className='container my-3'>
      <h1>Edit Page</h1>
      <Form.Group className='my-5' controlId='projectName'>
        <Form.Row>
          <Form.Label column='lg' lg={3}>
            Project Name
          </Form.Label>
          <Col>
            <Form.Control
              size='lg'
              type='text'
              style={{ textAlign: 'center', border: '3px solid grey' }}
              placeholder='Enter project name here...'
            />
          </Col>
        </Form.Row>
        {/* <br /> */}
      </Form.Group>
    </div>
  );
};

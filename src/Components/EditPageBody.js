import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
// import Button from '@material-ui/core/Button';
import './EditPageBody.css';

export const Body = () => {
  // let myStyle = {
  //   marginTop: "10"
  // }
  return (
    <div className='container'>
      <Form.Group>
        <Form.Row>
          <Form.Label column='lg' lg={3}>
            Section Name
          </Form.Label>
          <Col>
            <Form.Control
              size='lg'
              type='text'
              style={{ textAlign: 'center', border: '3px solid grey' }}
              placeholder='Enter section name here...'
            />
          </Col>
        </Form.Row>
        <br />
        <Form.Row>
          <Form.Label column='lg' lg={3}>
            Section Description
          </Form.Label>
          <Col>
            <Form.Control
              as='textarea'
              rows={3}
              style={{ textAlign: 'center', border: '3px solid grey' }}
              placeholder='Enter section details here...'
            />
          </Col>
        </Form.Row>
        <br />
        <Form.Row>
          <Col>
            <Form.File
              id='exampleFormControlFile1'
              style={{ float: 'right' }}
            />
          </Col>
        </Form.Row>
        {/* <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Upload
                    </Button>
                </label> */}
        {/* <input type="file" id="fileElem" accept="image/*" class="visually-hidden" />
                <label htmlFor="fileElem">Select files</label> */}
      </Form.Group>
    </div>
  );
};

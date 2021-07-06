import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import styled from 'styled-components';
// import { Header } from './EditPageHeader';

export const AddSectionOri = ({ addSection }) => {
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
  const [secTitle, setsecTitle] = useState('');
  const [secDesc, setsecDesc] = useState('');
  const [secImage, setsecImage] = useState('');
  const secSubmit = (e) => {
    e.preventDefault();
    if (!secTitle || !secDesc) {
      alert('Section name, or Section description cannot be blank!');
    } else {
      // SectionItem(secTitle, secDesc, secImage);
      setsecTitle('');
      setsecDesc('');
      setsecImage('');
    }
  };
  const submit = (e) => {
    e.preventDefault();
    if (!secTitle || !secDesc) {
      alert('Section name, or Section description cannot be blank');
    } else {
      addSection(secTitle, secDesc, secImage);
      // setsecTitle('');
      // setsecDesc('');
      // setsecImage('');
    }
  };
  return (
    <div className='container my-3'>
      <Form onSubmit={submit}>
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
                value={secTitle}
                onChange={(e) => setsecTitle(e.target.value)}
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <br />
        <Form.Group>
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
                value={secDesc}
                onChange={(e) => setsecDesc(e.target.value)}
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.File
                id='exampleFormControlFile1'
                value={secImage}
                onChange={(e) => setsecImage(e.target.value)}
                style={{ float: 'right' }}
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Button style={{ span: 'left' }} onClick={secSubmit}>
          Add Section
        </Button>
        <Button style={{ float: 'right', padding: '12px 40px' }} type='submit'>
          View
        </Button>
      </Form>
    </div>
  );
};

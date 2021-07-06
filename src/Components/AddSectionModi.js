import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

// import { Header } from './EditPageHeader';

export const AddSectionModi = () => {
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
  const fieldStyle = {
    textAlign: 'center',
    border: '3px solid grey'
  };

  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <div className='container my-3'>
      {fields.map((field, idx) => {
        let secname = `secname-${idx}`,
          secdes = `secdes-${idx}`;
        return (
          <div key={`${field}-${idx}`}>
            <input
              type='text'
              placeholder='Enter text'
              value={field.value || ''}
              onChange={(e) => handleChange(idx, e)}
            />
            <button type='button' onClick={() => handleRemove(idx)}>
              X
            </button>
          </div>
        );
      })}

      <Form>
        <Form.Group>
          <Form.Row>
            <Form.Label column='lg' lg={3}>
              Section Name
            </Form.Label>
            <Col>
              <Form.Control
                size='lg'
                type='text'
                style={fieldStyle}
                placeholder='Enter section name here...'
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
                style={fieldStyle}
                placeholder='Enter section details here...'
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
                style={{ float: 'right' }}
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Button style={{ span: 'left' }}>Add Section</Button>
        <Button style={{ float: 'right', padding: '12px 40px' }} type='submit'>
          View
        </Button>
      </Form>
    </div>
  );
};

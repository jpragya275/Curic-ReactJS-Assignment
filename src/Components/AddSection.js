// import { render } from '@testing-library/react';
// import { recomposeColor } from '@material-ui/core';
import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
// import styled from 'styled-components';
import { Section } from './Section';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import { ViewPage } from './ViewPage';

const StyledButton = withStyles({
  root: {
    backgroundColor: 'white',
    fontSize: '13px',
    color: 'black',
    padding: '12px 40px',
    borderRadius: '25px',
    border: '3px solid grey',
    cursor: 'pointer'
    // padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize'
  }
})(Button);

// export const AddSection = ({ addSection }) =>
export class AddSection extends React.Component {
  state = {
    section: [
      {
        index: Math.random(),
        sectionName: '',
        description: '',
        file: '',
        SnameError: '',
        SdescError: ''
      }
    ],
    projectName: '',
    PnameError: ''
  };

  // handleChange = this.handleChange.bind(this);
  // handleSubmit = this.handleSubmit.bind(this);
  // }

  handleChange = (e) => {
    // let { section, projectName } = this.state;
    let section = [...this.state.section];
    if (['sectionName', 'description', 'file'].includes(e.target.name)) {
      // let section = [...this.state.section];
      if (e.target.name === 'file') {
        console.log('in creating url', e.target.files[0])
        section[e.target.dataset.id][e.target.name] = URL.createObjectURL(e.target.files[0]);
        // section[e.target.dataset.id][e.target.name] = URL.createObjectURL(e.target.files[0]);
      }
      else if (e.target.name === 'sectionName' || e.target.name === 'description') {
        section[e.target.dataset.id][e.target.name] = e.target.value;
      }
    } else if (e.target.name === 'projectName') {
      // if (e.target.value === '') {
      //   alert('Project Name cannot be empty!');
      // }
      this.setState({ [e.target.name]: e.target.value });

    }
  };
  addNewRow = () => {
    console.log('prename', this.state.projectName);
    console.log('predes', this.state.section.description);
    this.setState((prevState) => ({
      section: [
        ...prevState.section,
        {
          index: Math.random(),
          sectionName: '',
          description: '',
          file: ''
        }
      ]
    }));
  };

  deteteRow = (index) => {
    this.setState({
      section: this.state.section.filter((s, sindex) => index !== sindex)
    });
  };
  clickOnDelete(record) {
    this.setState({
      section: this.state.section.filter((r) => r !== record)
    });
  }

  formValidation = () => {
    // let { section, projectName } = this.state;
    let SnameError = '';
    let SdescError = '';
    let PnameError = '';

    if (this.state.projectName.trim().length === 0) {
      PnameError = "The Project Name cannot be empty!";
    }

    if (PnameError) {
      this.setState({ PnameError });
      return false;
    }

    // this.state.section.map((val) => {
    //   if (val.sectionName.trim().length === 0) {
    //     SnameError = "The Section Name cannot be empty!";
    //   }
    //   if (SnameError) {
    //     this.setState({ SnameError });
    //   }
    // })

    // let { section, projectName } = this.state;
    // let isValid = true;
    // const errors = {};
    // if (projectName.trim().length === 0) {
    //   errors.emptyProjectName = "The Project Name cannot be empty!";
    //   isValid = false;
    // }

    // section.map((val, idx) => {
    //   let sectionName = `sectionName-${idx}`,
    //     description = `description-${idx}`;
    //   if (val.sectionName.trim().length === 0 || val.description.trim().length === 0)
    //     return (
    //       <div key={val.index}>
    //         errors.emptySection = "The Section Name and Description cannot be empty!";
    //         isValid = false;
    //       </ div>
    //     )
    // })



    // this.setState({ errors });
    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('before fv');
    const isValid = this.formValidation();
    console.log('after fv');
    // console.log('logs', e.target.projectName.value);
    if (isValid) {
      this.setState({ PnameError: '' });
      console.log('logs', this.state.projectName);
      this.state.section.map((val, idx) => {
        console.log('sectionName', val.sectionName);
        console.log('description', val.description);
        console.log('file', val.file);
      });
    }
  };


  render() {
    let { section, projectName } = this.state;
    return (
      <>
        <div className='container my-3'>
          <h1 style={{ float: 'left' }}>Edit Page</h1>
          <br />
          <br />
          <br />
          <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <Form.Group className='my-5' controlId='projectName'>
              <Form.Row>
                <Form.Label column='lg' lg={3} required>
                  Project Name
                </Form.Label>
                <Col>
                  <Form.Control
                    size='lg'
                    type='text'
                    style={{ textAlign: 'center', border: '3px solid grey' }}
                    name='projectName'
                    value={projectName}
                    onChange={this.handleChange}
                    placeholder='Enter project name here...'
                  />
                </Col>
                <div style={{ textAlign: 'center', color: 'red', fontSize: 20 }}>{this.state.PnameError}</div>
              </Form.Row>
            </Form.Group>
            <Section
              // add={this.addNewRow}
              change={this.handleChange}
              delete={this.clickOnDelete.bind(this)}
              section={section}
            />
            <StyledButton onClick={this.addNewRow}>Add Section</StyledButton>
            {/* <Link
              to={{
                pathname: '/viewpage',
                state: {
                  projectName: this.state.projectName,
                  section: this.state.section,
                  // change: this.handleChange      //Cannot push history error
                }
              }}
            > */}
            <StyledButton
              style={{ float: 'right' }}
              type='submit'
              onClick={this.handleSubmit}
            // path='/viewpage'
            >
              View
            </StyledButton>
            {/* </Link> */}
            {/* {Object.keys(errors).map((key) => {
              return <div key={key}>{(errors[key])}</div>
            })} */}
          </Form>
        </div>
      </>
    );
  }
}
// export class AddSection {}

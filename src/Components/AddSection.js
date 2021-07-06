import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { Section } from './Section';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';

const StyledButton = withStyles({
  root: {
    backgroundColor: 'white',
    fontSize: '13px',
    color: 'black',
    padding: '12px 40px',
    borderRadius: '25px',
    border: '3px solid grey',
    cursor: 'pointer'
  },
  label: {
    textTransform: 'capitalize'
  }
})(Button);

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
    PnameError: '',
    boolViewPage: false,
    redirect: null
  };

  handleChange = (e) => {
    let section = [...this.state.section];
    if (['sectionName', 'description', 'file'].includes(e.target.name)) {
      if (e.target.name === 'file') {
        console.log('in creating url', e.target.files[0])
        section[e.target.dataset.id][e.target.name] = URL.createObjectURL(e.target.files[0]);
      }
      else if (e.target.name === 'sectionName' || e.target.name === 'description') {
        section[e.target.dataset.id][e.target.name] = e.target.value;
      }
    } else if (e.target.name === 'projectName') {
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
    let snameerror = '';
    let sdescerror = '';
    let pnameerror = '';

    if (this.state.projectName.trim().length === 0) {
      pnameerror = "The Project Name cannot be empty!";
    }

    if (pnameerror) {
      this.setState({ PnameError: pnameerror });
      return false;
    }
    else {
      this.setState({ PnameError: '' });
    }

    let sectionValid = true;
    this.state.section.map((val) => {
      console.log('INMAP', val.sectionName.trim().length)
      if (val.sectionName.trim().length === 0) {
        console.log('ERROR')
        snameerror = "The Section Name cannot be empty!";
      }
      if (snameerror) {
        console.log('YAHABAAGYA')
        this.setState({ SnameError: snameerror });
        sectionValid = false;
        return false;
      }
      else {
        this.setState({ SnameError: '' });
      }
      if (val.description.trim().length === 0) {
        console.log('ERROR')
        sdescerror = "The Section Description cannot be empty!";
      }
      if (sdescerror) {
        this.setState({ SdescError: sdescerror });
        sectionValid = false;
        return false;
      }
      else {
        this.setState({ SdescError: '' });
      }
    })
    console.log('sectionValid ', sectionValid);

    if (sectionValid === false) { return false; }
    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('before fv');
    const isValid = this.formValidation();
    console.log('after fv');
    // console.log('logs', e.target.projectName.value);
    console.log('valid', isValid);
    if (isValid === true) {
      this.setState({ PnameError: '' });
      this.setState({ SnameError: '' });
      this.setState({ SdescError: '' });

      console.log('INVIEWPAGERETURN');
      this.setState({ boolViewPage: true });
      this.setState({ redirect: '/ViewPage' });
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
              change={this.handleChange}
              delete={this.clickOnDelete.bind(this)}
              section={section}
            />
            <div style={{ textAlign: 'center', color: 'red', fontSize: 20 }}>{this.state.SnameError}</div>
            <div style={{ textAlign: 'center', color: 'red', fontSize: 20 }}>{this.state.SdescError}</div>
            <StyledButton onClick={this.addNewRow}>Add Section</StyledButton>
            <StyledButton
              style={{ float: 'right' }}
              type='submit'
              onClick={this.handleSubmit}
            >
              View
            </StyledButton>
          </Form>
          {this.state.redirect ? (<Redirect to={{
            pathname: this.state.redirect,
            state: {
              projectName: this.state.projectName,
              section: this.state.section
            }
          }} />) : null}
        </div>
      </>
    );
  }
}

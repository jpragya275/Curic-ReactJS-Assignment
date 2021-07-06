import React from 'react';
import { Form, Col } from 'react-bootstrap';

export const Section = (props) => {
    return props.section.map((val, idx) => {
        let sectionName = `sectionName-${idx}`,
            description = `description-${idx}`,
            file = `file-${idx}`,
            SnameError = `SnameError-${idx}`
        return (
            <div className="container" key={val.index}>
                {console.log('value ', val.index)}
                {console.log('snameerror ', val.SnameError)}
                <br />
                <Form.Group onChange={props.change}>
                    <Form.Row>
                        <Form.Label column='lg' lg={3} className='required'>
                            Section Name
                        </Form.Label>
                        <Col>
                            <Form.Control
                                size='lg'
                                type='text'
                                name='sectionName'
                                // value={val.index.sectionName}
                                data-id={idx}
                                id={sectionName}
                                style={{ textAlign: 'center', border: '3px solid grey' }}
                                placeholder='Enter section name here...'
                            />
                        </Col>
                        {/* <div style={{ textAlign: 'center', color: 'red', fontSize: 20 }}>{val.SnameError}</div> */}
                    </Form.Row>
                </Form.Group>
                <br />
                <Form.Group onChange={props.change}>
                    <Form.Row>
                        <Form.Label column='lg' lg={3} className='required'>
                            Section Description
                        </Form.Label>
                        <Col>
                            <Form.Control
                                as='textarea'
                                rows={3}
                                name='description'
                                // value={val.description}
                                style={{ textAlign: 'center', border: '3px solid grey' }}
                                id={description}
                                data-id={idx}
                                placeholder='Enter section details here...'
                            />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <br />
                <Form.Group onChange={props.change}>
                    <Form.Row>
                        <Col>
                            <Form.File
                                name='file'
                                accept='image/*'
                                //   id='exampleFormControlFile1'
                                // value={val.file}
                                style={{ float: 'right' }}
                                id={file}
                                data-id={idx}
                            />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        {idx === 0 ? (
                            <></>
                        ) : (
                            <button
                                className='btn btn-danger'
                                style={{ marginLeft: '10px' }}
                                onClick={() => props.delete(val)}
                            >
                                Remove Section
                            </button>
                        )}
                    </Form.Row>
                </Form.Group >

            </div >
        );
    });
};
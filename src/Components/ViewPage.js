import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';



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

export const ViewPage = () => {
    // const history = useHistory();
    const location = useLocation();
    const {
        projectName,
        section,
        change
    } = location.state;

    return (
        <div className="container">
            <h2 style={{ float: 'left' }}>View Page</h2>
            <br /><br /><br />
            <div className="container my-3" style={{ textAlign: 'center' }}>
                <h1>{projectName}</h1>
                <br /><br />

                {section.map((val, idx) => {
                    let sectionName = `sectionName-${idx}`,
                        description = `description-${idx}`,
                        file = `file-${idx}`
                    return (
                        <div className="container my-3" style={{ textAlign: 'left' }} key={val.index}>
                            <h3>{val.sectionName}</h3>
                            <p style={{ fontSize: '20px', textAlign: 'center' }}>{val.description}</p>
                            {val.file !== '' ? (<img src={val.file} class='center' style={{
                                height: '500px', width: '500px', display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }} />) : (<></>)}
                            <br /><br />
                        </div>
                    )
                })}
                <br /><br />
                {/* <Link
                    to={{
                        pathname: '/',
                        state: {
                            projectName: projectName,
                            section: section,
                            // change: this.handleChange
                        }
                    }}
                > */}
                <StyledButton
                    // style={{ float: 'right' }}
                    type='submit'
                // onClick={() => history.goBack()}
                // path='/viewpage'
                >
                    Edit
                </StyledButton>
                {/* </Link> */}
            </div>
        </div>
    )

}
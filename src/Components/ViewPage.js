import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    },
    label: {
        textTransform: 'capitalize'
    }
})(Button);

export const ViewPage = () => {
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
                {/* {console.log(', projectName)} */}

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
                <Link
                    to={{
                        pathname: '/',
                    }}
                >
                    <StyledButton
                        type='submit'
                        path='/'
                    >
                        Edit
                    </StyledButton>
                </Link>
            </div>
        </div>
    )

}
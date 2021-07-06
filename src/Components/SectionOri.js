import React from 'react';
export const Section = (props) => {
    return props.section.map((val, idx) => {
        let sectionName = `sectionName-${idx}`,
            description = `description-${idx}`,
            file = `file-${idx}`;
        return (
            <tr key={val.index}>
                <td>
                    <input
                        type='text'
                        name='sectionName'
                        data-id={idx}
                        id={sectionName}
                        className='form-control '
                    />
                </td>
                <td>
                    <textarea
                        name='description'
                        id={description}
                        data-id={idx}
                        className='form-control'
                    ></textarea>
                </td>
                <td>
                    <input
                        type='image'
                        name='description'
                        id={description}
                        data-id={idx}
                        className='form-control '
                    />
                </td>
                {/* <td>
          <select
            name='taskStatus'
            id={taskStatus}
            data-id={idx}
            className='form-control'
          >
            <option value='pending'>Pending</option>
            <option value='In Progress'>In progress</option>
            <option value='Completed'>Completed</option>
            <option value='Hold'>Hold</option>
          </select>
        </td> */}
                <td>
                    {idx === 0 ? (
                        <button
                            onClick={() => props.add()}
                            type='button'
                            className='btn btn-primary text-center'
                        >
                            <i className='fa fa-plus-circle' aria-hidden='true'></i>
                        </button>
                    ) : (
                        <button
                            className='btn btn-danger'
                            onClick={() => props.delete(val)}
                        >
                            <i className='fa fa-minus' aria-hidden='true'></i>
                        </button>
                    )}
                </td>
            </tr>
        );
    });
};
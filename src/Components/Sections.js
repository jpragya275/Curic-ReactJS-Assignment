import React from 'react';
import { SectionItem } from './SectionItem';

export const Sections = (props) => {
  let myStyle = {
    // minHeight: "47vh"
  };
  return (
    <div className='container my-3' style={myStyle}>
      {/* <h3 className="my-3">ToDos List</h3> */}
      if(props.sections.length === 0)
      {}else
      {props.sections.map((section) => {
        return (
          <SectionItem
            section={section}
            key={section.sno}
            onDelete={props.onDelete}
          />
        );
      })}
    </div>
  );
};

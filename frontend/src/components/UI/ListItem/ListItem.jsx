import React from 'react';
import './ListItem.scss'
const ListItem = props => {
  return (
      <div className="ListItem">
      <p className="List_header">
        {props.item.name}
      </p>
      <input className="TaskInput" type="text" placeholder="Add new Task"
      onFocus={e=>e.target.placeholder = ''} onBlur={e=>e.target.placeholder = "Add new Task"}/>
      </div>
  );
};
export default ListItem;
import React from 'react';
import './ListItem.scss'
const ListItem = props => {
  return (
      <div className="ListItem">
      <p className="List_header">
        {props.item.name}
      </p>
      <input className="TaskInput" type="text" placeholder/>
      </div>
  );
};
export default ListItem;
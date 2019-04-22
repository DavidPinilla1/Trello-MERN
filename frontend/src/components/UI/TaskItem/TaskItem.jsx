import React from 'react';
import './TaskItem.scss'
const TaskItem = props => {
  return (
      <div className="TaskItem">
      {props.item.name}
      </div>
  );
};
export default TaskItem;
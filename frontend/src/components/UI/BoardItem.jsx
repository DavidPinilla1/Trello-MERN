import React from 'react';
import { Link } from 'react-router-dom';
import './BoardItem.scss'
const BoardItem = props => {
  return (
    <Link to={`/boards/${props.item._id}`} className="board_item">
      <p className="board_header">
        {props.item.title}
      </p>
    </Link>
  );
};
export default BoardItem;
import React from 'react';
import { Link } from 'react-router-dom';
const BoardItem = item => {
  return (
    <Link to={`/boards/${item._id}`} className="board_item">
      <div className="board_header">
        <h2>{item.name}</h2>
      </div>
    </Link>
  );
};
export default BoardItem;
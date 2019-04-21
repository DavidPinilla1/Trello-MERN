import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBoardById, updateLists, clearBoard } from '../../store/actions/board.js';
import './BoardView.scss';
import ListItem from '../../components/UI/ListItem/ListItem.jsx'
const BoardView =props=> {
useEffect(() => {
    props.dispatch(getBoardById(props.match.params.id));
    return () => {
      props.dispatch(clearBoard());
    }
  }, [])
  const renderBoardLists = board =>(
  board.lists && board.lists.map(item =>(
      <ListItem item={item} key={item._id} />
    ))
  )
  const handleKeyUp = (ev) => {
    if (ev.keyCode === 13) {
      let board=props.board.currentBoard
      let newList={
        name:ev.target.value.trim(),
        tasks:[]
      }
      board.lists.push(newList)
      props.dispatch(updateLists(board._id,board.lists))
      ev.target.value = ''
    }
  }
  let board = props.board.currentBoard;
    {if(board)document.title=board.title+' - Trello MERN'}
    return (<div className="BoardView">
        <title>{board && board.title}</title>
     <h1>{board && board.title }</h1>
      <div className="ListItems">{board && renderBoardLists(board)}
      <input
        type="text" className="newList" onKeyUp={handleKeyUp}  placeholder="Add new List" 
        onFocus={e=>e.target.placeholder = ''} onBlur={e=>e.target.placeholder = "Add new List"} />
      </div>
    </div>)
}
function mapStateToProps(state) {
  return {
    board: state.board
  };
}
export default connect(mapStateToProps)(BoardView);

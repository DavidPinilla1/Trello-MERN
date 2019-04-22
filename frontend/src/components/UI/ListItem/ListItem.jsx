import React from 'react';
import './ListItem.scss';
import {updateLists} from '../../../store/actions/board';
import TaskItem from '../TaskItem/TaskItem.jsx';
import {connect} from 'react-redux'
const ListItem = props => { 
  let board = props.board.currentBoard;
   const renderTasks = List =>(
  List.Tasks && List.Tasks.map(item =>(
      <TaskItem item={item} key={item._id} List={List}/>
    ))
  )
  const handleKeyUp = (ev) => {
    if (ev.keyCode === 13) {
      let newTask={
        name:ev.target.value.trim(),
        subTasks:[]
      }
      props.item.Tasks.push(newTask)
      console.log(props)
      props.dispatch(updateLists(board._id,board.lists))
      ev.target.value = ''
    }
  }
  return (
      <div className="ListItem">
      <p className="List_header">
        {props.item.name}
      </p>
      <div className="TasksItems">{props.item && renderTasks(props.item)}</div>
      <input className="TaskInput" type="text" placeholder="Add new Task" onKeyUp={handleKeyUp}
      onFocus={e=>e.target.placeholder = ''} onBlur={e=>e.target.placeholder = "Add new Task"}/>
      </div>
  );
};
function mapStateToProps(state) {
  return {
    board: state.board
  };
}
export default connect(mapStateToProps)(ListItem);
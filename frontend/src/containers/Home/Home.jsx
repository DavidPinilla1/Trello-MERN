import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.scss';
import BoardItem from '../../components/UI/BoardItem/BoardItem.jsx'
import {newBoard, getBoards} from '../../store/actions/board.js'
class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getBoards());
    document.title="Home - Trello MERN"
  }
  
  renderItems=(boards)=>(
    boards ? 
      boards.map(item =>(
        <BoardItem item={item} key={item._id} />
      ))
    :null
  )
  handleKeyUp=(ev)=>{
    if (ev.keyCode === 13) {
      this.props.dispatch(newBoard(ev.target.value))
      ev.target.value=''
    }
  }
  render() {
    return (
      <div className="Home">
      <div className="BoardItems">{this.props.board.boards && this.renderItems(this.props.board.boards)}
       <input type="text" className="newBoard" onKeyUp={this.handleKeyUp} placeholder="Add new Board"
        onFocus={e=>e.target.placeholder = ''} onBlur={e=>e.target.placeholder = "Add new Board"} />
       </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    board: state.board
  };
}
export default connect(mapStateToProps)(Home);
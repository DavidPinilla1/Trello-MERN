import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.scss';
import BoardItem from '../../components/UI/BoardItem.jsx'
import {newBoard, getboards} from '../../store/actions/board'
class Home extends Component {
  componentWillMount() {
    this.props.dispatch(getboards());
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
   console.log(this.props)
    return (
      <div className="Home">
      <div className="BoardItems">{this.props.board.boards? this.renderItems(this.props.board.boards):''}
       <input type="text" className="newBoard" onKeyUp={this.handleKeyUp} placeholder="Add new Board" />
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
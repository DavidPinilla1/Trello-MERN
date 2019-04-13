import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.scss';
import BoardItem from '../../components/UI/BoardItem.jsx'
class Home extends Component {
  componentWillMount() {
    // this.props.dispatch(getboards(1, 0, 'desc'));
  }

  renderItems=(boards)=>(
    boards.list ? 
      boards.list.map(item =>(
        <BoardItem {...item} key={item._id}/>
      ))
    :null
  )
  render() {
    return (
      <div className="Home">
      {/* this.renderItems(this.props.boards) */}
       <button className="newBoard">Add new Board</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    boards: state.boards
  };
}
export default connect(mapStateToProps)(Home);
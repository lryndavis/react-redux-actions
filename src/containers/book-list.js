import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';
//connect needs to be used when creating containers
// containers are a link betweeen redux and react

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//take the app's state as an argument
//whatever is returned will show up as props inside of book list
//whatever object returned will be available to the component as this.props
//if state changes this container will automatically re render
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

//anything returned from this function will end up as props on booklist container
function mapDispatchToProps(dispatch) {
  //whenever select book is called, result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//connect function says take component and mapStateToProps and return a container
//Promote BookList from a component to a container
// needs to know about dispatch method, selectBook
//Make it (selectBook) available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      <ul classname="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//take the app's state as an argument
//whatever is returned will show up as props inside of book list
//whatever object returned will be available to the component as this.props
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

//connect function says take component and mapStateToProps and return a container
export default connect(mapStateToProps)(BookList);

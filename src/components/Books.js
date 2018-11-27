import React, { Component } from 'react';


class Books extends Component {
  render(){

    let bookItems = this.props.books.map(function(book){
      return(
      <li>{book.title}</li>
    )
    })

    return(
      <div>
      <h1>{this.props.book}</h1>
      {bookItems}
      </div>
    )
  }
}

export default Books;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading.js'
import Books from './components/Books.js'

const BOOKS_URL = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"



class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      books : []
    }
  }


  componentDidMount(){
    fetch(BOOKS_URL).then((response)=>{
      return response.json()
    }).then((json)=>{
      this.setState({
        books : json
      })

    })
  }



  render(){
    return(
      <div>
      <h1>Welcome to Book Barn</h1>
      <Heading/>
      <Books books = {this.state.books} />

      </div>
    )
  }
}

export default App;

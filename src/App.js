import React,  {Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Search from './Search/Search';
import Results from './Results/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }


 
  handleSubmit = (event) => {
    event.preventDefault();
    
    const search = event.target[0].value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
          .then(response => response.json())
          .then(data => {
          
           this.setState({books:data.items})
         })
          .catch(error => console.log(`An error occured: ${error}`));
         }
        

 render() {
  
  return (

    <div className="App">
      <Header />
      <Search handleSubmit={this.handleSubmit} />
      
      {this.state.books ? this.state.books.map((book, index) => {
        return (
          <Results 
          bookTitle={book.volumeInfo.title} 
          bookImage={book.volumeInfo.imageLinks.smallThumbnail} 
          bookAuthors={book.volumeInfo.authors}
          id={index} 
          key={index}/>
        )
      }) : null}
       
    </div>
  );
   }
}
export default App;

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
 
  





  handleSubmit= (event)=> {
    event.preventDefault();
    console.log("this is the event", event)
    let search= event.target.value;
    console.log("this is the search", search)
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     // Add your key after Bearer
    //     "Authorization": "Bearer ",
    //     "Content-Type": "application/json"

      fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
          .then(response => response.json())
          .then(data => {
          // const title =data.volumeInfo.title
           this.setState({books:data})
            //console.log(data);
         });
         } 




 render(){
  
  return (

  
    //handleSubmit={handleSubmit()}
      

    <div className="App">
      <Header />
      <Search handleSubmit={this.handleSubmit} />
       {<Results books={this.state.books}
       /> }

      {/* { this.state.books.items.map(book=>{
        return <Results book={book.volumeInfo.title} />
      })
      
       
    } */}
        
      
      
      
    </div>
  );


 }
}

export default App;

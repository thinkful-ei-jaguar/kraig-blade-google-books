import React, {Component} from 'react';


class Results extends Component{

    
render(){
    console.log(this.props.bookTitle);
return (
  <div className="results-div">
    <img src={this.props.bookImage} alt='error loading'/>
    <h3>Authors: {this.props.bookAuthors}</h3>
    <p>{this.props.bookTitle}</p>
    
  </div>

)

  }
}

export default Results
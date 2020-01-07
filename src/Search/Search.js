import React, {Component} from 'react';

class Search extends Component{

 
    render(){
        
      return (
    
        <form onSubmit={this.props.handleSubmit}>

            <label htmlFor="search" />
            <input className="search" id="search" type="text"/>

            <button type="submit" id="search">Search</button>

            

          

        </form>

)

    }
}



export default Search;
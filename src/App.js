import React, { Component } from 'react';
import Photo from './Photo'

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      photos: []
    }
  }

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then( res=>res.json() )
    .then( photos=>{

      photos = photos.slice(0,100);

      this.setState({ photos })
    } )
  }

  render(){
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-mobile">
          {this.state.photos.map( photo=><Photo key={photo.id} {...photo} /> )}
          </div>
        </div>
      </section>
    )
  }
}

export default App;

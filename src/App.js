import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      query: ''
    }

  }

  search() {
    console.log('this.state', this.state)
  }

  render(){
    return (
    <div>
      <div className='app-title'>Music Maker</div>
      <div>
        <input placeholder="search for an artist..."
        value={this.state.query}
        onKeyPress={event => {
          if(event.key === 'Enter'){
            this.search()
          }
        }}
        onChange={event => {this.setState({query: event.target.value})}}
        ></input>
        <button onClick={()=> this.search()}>search</button>
      </div>
      <div className="profile">
        <div>artist</div>
        <div>artist name</div>
      </div>
      <div className="gallery">
        Gallery
      </div>
    </div>
  );
  }
  
}

export default App;

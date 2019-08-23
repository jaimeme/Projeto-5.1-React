import React,{Component} from 'react';
import './App.css';
//import TextCounter from './TextCounter';  

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      courses:[]
    }
  }
  render(){
    return (
      <div ClassName="app">
        <ul className="courses-list">
          <li class="course">
            <div>Javascript</div>
            <button>X</button>
{/*            <img src=""></img>*/}
            <div>React</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;

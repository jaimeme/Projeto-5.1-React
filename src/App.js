import React,{Component} from 'react';
import './App.css';
import Course from './components/Course.js';
//import TextCounter from './TextCounter';  

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      courses:[
        {
          name:'React',
          category:'JavaScript',
          image:'https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/Masthead_Kirby.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png'
        },
        {
          name:'Angular',
          category:'JavaScript',
          image:'https://www.varanda.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/i/kibe-vf.jpg'  
        }
      ]
    }
  }
  render(){
    const {state} = this;
    return (
      <div ClassName="app">
        <ul className="courses-list">
        {
          state.courses.map(course=><Course course={course} />)
        }    
        </ul>
      </div>
    );
  }
}

export default App;

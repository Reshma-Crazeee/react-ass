import './App.css';
import {Component} from 'react';
class HeadingText extends Component{
  state = {
          choose: false,
          play: false
  };
  barter=()=>{
    const val = this.state.choose;
    this.setState({choose:!val});
  }
  change=()=>{
    const val = this.state.play;
    this.setState({play:!val});
  }
  render(){
    
    return (
      <div className="card"> 
        <h1>Styling Using Functional and Class Component</h1>
        <div className="center">
        <button onClick={this.barter}>To see styling in functional component</button>
        {
          this.state.choose ? <Box1/> :null
        }
        <button onClick={this.change}>To see styling in class component</button>
        {
          this.state.play ? <Box2/> :null
        }
        </div>
        
      </div>
    );
  }
}


function Box1(){
  return(
    <div className="box fun">
      <h2>This is created using functional Component</h2>
      <p>This is done using external css</p>
      <p style={{color:"blue"}}>This is done using inline css</p>
    </div>
  )
}

class Box2 extends Component{
  render(){
  return(
    <div className="box one fun">
      <h2>This is created using class Component</h2>
      <p>This is done using external css</p>
      <p style={{color:"blue"}}>This is done using inline css</p>
   
    </div>
  )
  }
}


function App() {
  return (
    <div className="App">
      <HeadingText/>
    </div>
  );
}

export default App;

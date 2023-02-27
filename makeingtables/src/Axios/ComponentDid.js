import React from 'react'
import Posts from '../Components/Posts';
import Comments from '../Components/Comments';
import Users from '../Components/Users';
import axios from 'axios';

export default class ComponentClass extends React.Component {
    constructor(props) {
    super(props);
  
    // Initializing the state 
    this.state = {
        hello:true,
        renderType:'posts',
        items: [],
      };
  }

  componentDidMount() {
    console.log("componentDidMountCalled",this.state.renderType);
    
    axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
      .then(res => this.setState({
        items:res.data
      }));
  }

  componentDidUpdate(prevProps,prevState){
    console.log(this.state.items);
    if(prevState.renderType!==this.state.renderType){
    axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
        .then(res => this.setState({
        items:res.data
        }));
    }
  }
  
  changeState = ()=>{
    axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
        .then(res => this.setState({
        items:res.data.reverse()
        }));
  }

  render() {
    return (
        <div>
          <center>
            <button onClick={()=>this.setState({renderType:"posts"})}>Posts</button>
            <button onClick={()=>this.setState({renderType:"comments"})}>Comments</button>
            <button onClick={()=>this.setState({renderType:"users"})}>Users</button>
            <button onClick={()=>this.changeState()}>Reverse</button>

            <hr color='black'/>
            <h1>{this.state.renderType}</h1>
            {this.state.renderType=== "posts" && <Posts items = {this.state.items}/> }
            {this.state.renderType === "comments" && <Comments items = {this.state.items}/> }
            { this.state.renderType==="users" && <Users items = {this.state.items}/>} 
            </center>
            
        </div>
    )
  }
}
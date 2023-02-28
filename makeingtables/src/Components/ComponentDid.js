import React from 'react'
import Posts from './Posts';
import Comments from './Comments';
import Users from './Users';
import axios from 'axios';
// import ReactDOM from 'react-dom/clt';
// import { ReactDOM } from 'react';
import {BrowserRouter} from 'react-router-dom'
import { Link } from 'react-router-dom';

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

  // componentDidUpdate(prevProps,prevState){
  //   console.log(this.state.items);
  //   if(prevState.renderType!==this.state.renderType){
  //   axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
  //       .then(res => this.setState({
  //       items:res.data
  //       }));
  //   }
  // }

  handleUpdate=(renderType)=>{
    axios.get(`https://jsonplaceholder.typicode.com/${renderType}`)
          .then(res => this.setState({
          items:res.data,
          renderType:renderType
          }));
  }


  del = (id)=>{
    if (window.confirm("Do you really want to delete?")) {
      const newItems = this.state.items.filter(item => item.id !== id);
      this.setState({items : newItems});
    }
    // confirm("are you sure ? if yes then type yes and click ok");
   
  }

  // changeState = ()=>{
  //   axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
  //       .then(res => this.setState({
  //       items:res.data.sort((a,b)=>b.id-a.id)
  //       }));
  // }

  compareBy = (key) => {
    return function(a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
    };
  };
   
  sortBy = (key) => {
    let arrayCopy = [...this.state.items];
    arrayCopy.sort(this.compareBy(key));
    this.setState({items: arrayCopy});
  };

  render() {
    return ( 
        <div>
          <center>
            <BrowserRouter>
            <Link to="/"><button onClick={<ComponentClass/>}>Home</button></Link>
            <Link to="/posts"><button onClick={()=>this.handleUpdate("posts")}>Posts</button></Link>
            <Link to="/comments"><button onClick={()=>this.handleUpdate("comments")}>Comments</button></Link>
            <Link to="/users"><button onClick={()=>this.handleUpdate("users")}>Users</button></Link>
            </BrowserRouter>
             
            {/* <button onClick={()=>this.handleUpdate("comments")}>Comments</button>
            <button onClick={()=>this.handleUpdate("users")}>Users</button> */}
            {/* <button onClick={()=>this.changeState()}>Reverse</button> */}

            <hr color='black'/>
            <h1>{this.state.renderType}</h1>
            {this.state.renderType=== "posts" && <Posts items = {this.state.items} del = {this.del} sortBy ={this.sortBy}/> }
            {this.state.renderType === "comments" && <Comments items = {this.state.items} del = {this.del} sortBy ={this.sortBy}/> }
            { this.state.renderType==="users" && <Users items = {this.state.items} del = {this.del} sortBy ={this.sortBy}/>} 
            </center>
            
        </div>
    )
  }
}
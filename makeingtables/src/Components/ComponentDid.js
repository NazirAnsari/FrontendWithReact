import {React,Component} from 'react'
import Posts from './Posts';
import Comments from './Comments';
import Users from './Users';
import axios from 'axios';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom';

export default class ComponentClass extends Component {
    constructor() {
    super();
  
    // Initializing the state 
    this.state = {
      renderType:"",
      };
  }

  handleUpdate=(renderTypeVal)=>{

    axios.get(`https://jsonplaceholder.typicode.com/${renderTypeVal}`)
          .then(res => this.setState({
          items:res.data,
          renderType:renderTypeVal
          }));
  }


  del = (id)=>{
    if (window.confirm("Do you really want to delete?")) {
      const newItems = this.state.items.filter(item => item.id !== id);
      this.setState({items : newItems});
    }
  }


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
        <>
          <center>
            <BrowserRouter>
            <Link to="/"><button onClick={()=><ComponentClass/>}>Home</button></Link>
            <Link to="/posts"><button onClick={()=>this.handleUpdate("posts")}>Posts</button></Link>
            <Link to="/comments"><button onClick={()=>this.handleUpdate("comments")}>Comments</button></Link>
            <Link to="/users"><button onClick={()=>this.handleUpdate("users")}>Users</button></Link>
            

            <hr color='black'/>
            <h1>{this.state.renderType.toUpperCase()}</h1>
            <Routes>
          <Route path="posts"  element={<Posts items = {this.state.items} del = {this.del} sortBy ={this.sortBy}/>}/> 
          <Route path="comments" element={<Comments items = {this.state.items} del = {this.del} sortBy ={this.sortBy}/>}/> 

          <Route path="users" element={<Users items = {this.state.items} del = {this.del} sortBy ={this.sortBy}  />}/> 

           
            </Routes>
            </BrowserRouter>
            </center>
            
        </>
    )
  }
}
// export default class Users extends Component {



  // componentDidMount() {
  //   console.log("componentDidMountCalled",renderType);
    
  //   axios.get(`https://jsonplaceholder.typicode.com/${renderType}`)
  //     .then(res => this.setState({
  //       items:res.data
  //     }));
  // }

//   render() {
//     return (
//       <> 
//         <br />
//         <table border={2}>
//         <thead>
//             <tr>
//                 <th>Id <ImportExportIcon onClick={()=>this.props.sortBy('id')}/></th>
//                 <th>Name <ImportExportIcon onClick={()=>this.props.sortBy('name')}/></th>
//                 <th>Email <ImportExportIcon onClick={()=>this.props.sortBy('email')}/></th>
//                 <th>Username <ImportExportIcon onClick={()=>this.props.sortBy('username')}/></th>
//                 <th>Phone <ImportExportIcon onClick={()=>this.props.sortBy('phone')}/></th>
//                 <th>Delete </th>
//             </tr>
//             </thead>
//             <tbody>
//             {this.props.items && this.props.items.map((item, index)=>{
//           return (<tr key={index}><td>{item.id}</td><td>{item.name}</td><td>{item.email}</td><td>{item.username}</td>
//           <td>{item.phone}</td> 
//             <td> <DeleteIcon className='changeColor' onClick={()=>this.props.del(item.id)} /> </td></tr>)
//          })}
//             </tbody>
//         </table>
//         <br />
//       </>
//     )
//   }
// }


     // changeState = ()=>{
  //   axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
  //       .then(res => this.setState({
  //       items:res.data.sort((a,b)=>b.id-a.id)
  //       }));
  // }
    // changeState = ()=>{
  //   axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
  //   .then(res => this.setState({
  //     items:res.data.reverse()
  //   }));
  // }
    // componentDidUpdate(prevProps,prevState){
  //   console.log(this.state.items);
  //   if(prevState.renderType!==this.state.renderType){
  //   axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
  //       .then(res => this.setState({
  //       items:res.data
  //       }));
  //   }
  // }

     {/* {this.state.renderType === "comments" && <Comments items = {this.state.items} del = {this.del} sortBy ={this.sortBy}/> }
            { this.state.renderType==="users" && <Users items = {this.state.items} del = {this.del} sortBy ={this.sortBy}/>}  */}
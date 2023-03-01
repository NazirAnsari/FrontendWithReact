import {React,Component} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ImportExportIcon from '@mui/icons-material/ImportExport';

export default class Posts extends Component {
  
  // changeState = ()=>{
  //   axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
  //   .then(res => this.setState({
  //     items:res.data.reverse()
  //   }));
  // }


  render() {
    // const Posts = this.props.items;
    return (
      <> 
        <table border={2}>
          <tbody>
            <tr>
                <th>UserId <ImportExportIcon onClick={()=>{this.props.sortBy('userId')}}/></th>
                <th>Id <ImportExportIcon onClick={()=>{this.props.sortBy('id')}}/></th>
                <th>Title <ImportExportIcon onClick={()=>{this.props.sortBy('title')}}/></th>
                <th>Body <ImportExportIcon onClick={()=>{this.props.sortBy('body')}}/></th>
                <th>Delete</th>
            </tr>
          </tbody>

        <tbody>

          
        {this.props.items && this.props.items.map((item)=>{
          return (<tr><td>{item.userId }</td><td>{item.id}</td><td>{item.title}</td> <td>{item.body}</td>  <td> <DeleteIcon className='changeColor' onClick={()=>{this.props.del(item.id)}} />
       </td></tr>)
        })}
        </tbody>
        </table>
      </>
    )
  }
}
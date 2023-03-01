import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ImportExportIcon from '@mui/icons-material/ImportExport';


export default class Users extends React.Component {

 


  render() {
    return (
      <> 
        <br />
        <table border={2}>
        <thead>
            <tr>
                <th>Id <ImportExportIcon onClick={()=>{this.props.sortBy('id')}}/></th>
                <th>Name <ImportExportIcon onClick={()=>{this.props.sortBy('name')}}/></th>
                <th>Email <ImportExportIcon onClick={()=>{this.props.sortBy('email')}}/></th>
                <th>Username <ImportExportIcon onClick={()=>{this.props.sortBy('username')}}/></th>
                <th>Phone <ImportExportIcon onClick={()=>{this.props.sortBy('phone')}}/></th>
                <th>Delete </th>
            </tr>
            </thead>
            <tbody>
              {this.props.items && this.props.items.map(user =><tr><td>{user.id}</td>
                <td>{user.name}</td><td>{user.email}</td> <td>{user.username}</td> <td>{user.phone}</td> <td><DeleteIcon className='changeColor' onClick={()=>{this.props.del(user.id)}} /></td></tr>)}
            </tbody>
        </table>
        <br />
      </>
    )
  }
}
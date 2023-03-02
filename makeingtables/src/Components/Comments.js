import {React} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ImportExportIcon from '@mui/icons-material/ImportExport';

export default function Comments (props) {
  
    return (
      <> 
        <table border={2} >
          <thead>
            <tr>
                <th>PostId<ImportExportIcon onClick={()=>props.sortBy('postId')}/></th>
                <th>Id<ImportExportIcon onClick={()=>props.sortBy('id')}/></th>
                <th>Name<ImportExportIcon onClick={()=>props.sortBy('name')}/></th>
                <th>Email<ImportExportIcon onClick={()=>props.sortBy('email')}/></th>
                <th>Delete</th>
            </tr>
          </thead>

        <tbody>

        {props.items && props.items.map((item, index)=>{
          return (<tr key={index}><td>{item.postId}</td><td>{item.id}</td><td>{item.name}</td><td>{item.email}</td><td><DeleteIcon className='changeColor' onClick={()=>props.del(item.id)} /></td></tr>)
         })}
        </tbody>
        </table>
      </>
    )
  }

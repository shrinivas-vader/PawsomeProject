import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { getNotes } from '../actions/notesActions'

const HomeScreen = (props) => {
  const dispatch = useDispatch()
  const notes = useSelector((store) => store.notes)
  const { error, response, loading } = notes

  console.log(response)
  const history = useNavigate()
  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getNotes())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onAddNote = () => {
    
    history('/add-note')
  }

  return (
    <div>
      <Header title="Home" />
      <div class="row ">
      
      
      </div>
    <div class="container">
      <div class="row">
      <div class="col-md-2"> <a
                class="nav-link active"
                aria-current="page"
                href="/add-note"
              >
               Add Doctor
              </a></div>

  <div class="col-md-2"> <a
                class="nav-link active"
                aria-current="page"
                href="/adddog"
              >
               Add Dog
              </a></div>

              <div class="col-md-2"> <a
                class="nav-link active"
                aria-current="page"
                href="/addcommunity"
              >
               Add Community
              </a></div>

              <div class="col-md-2"> <a
                class="nav-link active"
                aria-current="page"
                href="/addlocation"
              >
               Add Location
              </a></div>
</div>
</div>
    <div class="container-fluid " >
      <table className="table table-striped" style={{background: 'orange'}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Password</th>
            <th>Pincode</th>
          </tr>
        </thead>
        <tbody>
         
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((note) => {
              return (
                <tr>
                  <td>{note.id}</td>
                  <td>{note.fname}</td>
                  <td>{note.lname}</td>
                  <td>{note.mobile}</td>
                  <td>{note.email}</td>
                  <td>{note.password}</td>
                  <td>{note.pincode}</td>
                  <td></td>
                </tr>
              )
            })}
        </tbody>
        {/* //----------------------------------------------------------------------------------------------------------------------- */}
        {/* <tbody style={{background: 'white'}}>
        <tr>
                  <td>1</td>
                  <td>Shiv</td>
                  <td>contact@shiv.com</td>
                  <td><button  className="btn btn-danger" style={{background: 'black'}}>
        Delete Donor
      </button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Om</td>
                  <td>contact@Om.com</td>
                  <td><button  className="btn btn-danger" style={{background: 'black'}}>
        Delete Donor
      </button></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sai</td>
                  <td>contact@Sai.com</td>
                  <td><button  className="btn btn-danger" style={{background: 'black'}}>
        Delete Donor
      </button></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Sss</td>
                  <td>contact@Sss.com</td>
                  <td><button  className="btn btn-danger" style={{background: 'black'}} >
        Delete Donor
      </button></td>
                </tr>
        </tbody> */}
      </table>
      </div>
    </div>
  )
}

export default HomeScreen

//--------------------------------------------------------------------------------------------------------------------------------------------

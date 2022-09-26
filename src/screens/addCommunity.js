import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { addCommunity } from '../actions/notesActions'

const AddCommunity = (props) => {

  // id      
// name    
// email   
// password
  // const [drid, setDrid] = useState('')
  const [cname, setCname] = useState('')
  const [pincode, setPincode] = useState('')
 
  

  const dispatch = useDispatch()

  const history = useNavigate()

  const addNotesStore = useSelector((store) => store.addNotes)
  const { loading, response, error } = addNotesStore

  useEffect(() => {
    if (response && response.status == 'success') {
      history('/home')
    } else if (error) {
      alert('error')
    }
  }, [loading, response, error])

  const onAdd = () => {
    dispatch(addCommunity(cname,pincode))
  }

  const onCancel = () => {
    history('/home')
  }

  return (
    <div>
      <Header title="Add Community" />
      <div className="form">
        {/* <div className="mb-3">
          <label className="form-label">Id</label>
          <input
            onChange={(e) => {
              setDrid(e.target.value)
            }}
            type="text"
            className="form-control"
            placeholder="title"
          />
        </div> */}
        <div className="mb-3">
          <label className="form-label">Community Name</label>
          <input
            onChange={(e) => {
              setCname(e.target.value)
            }}
            className="form-control"
            ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Community Pincode</label>
          <input
            onChange={(e) => {
              setPincode(e.target.value)
            }}
            className="form-control"
            ></input>
        </div>

       

        <div className="mb-3">
          <button onClick={onAdd} className="btn btn-success">
            Add
          </button>
          <button onClick={onCancel} className="btn btn-danger float-end">
            Cancel
          </button>
        </div>
        <a
                class="nav-link active"
                aria-current="page"
                href="/chooseoption"
              >
               home
              </a>
      </div>
    </div>
  )
}

export default AddCommunity

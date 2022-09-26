import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { addNote } from '../actions/notesActions'

const AddNoteScreen = (props) => {

  // id      
// name    
// email   
// password
  // const [drid, setDrid] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
    dispatch(addNote(fname,lname,mobile,email,password,pincode))
  }

  const onCancel = () => {
    history('/home')
  }

  return (
    <div>
      <Header title="Add Doctor" />
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
          <label className="form-label">First Name</label>
          <input
            onChange={(e) => {
              setFname(e.target.value)
            }}
            className="form-control"
            ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            onChange={(e) => {
              setLname(e.target.value)
            }}
            className="form-control"
            ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input
            onChange={(e) => {
              setMobile(e.target.value)
            }}
            className="form-control"
            ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="form-control"
            ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="form-control"
            ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Pincode</label>
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
      </div>
    </div>
  )
}

export default AddNoteScreen

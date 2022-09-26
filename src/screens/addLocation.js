import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { addLocation } from '../actions/notesActions'


const AddLocation = (props) => {

  // id      
// name    
// email   
// password
  // const [drid, setDrid] = useState('')
  const [pincode, setPincode] = useState('')
  const [location, setLocation] = useState('')

 
  

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
    dispatch(addLocation(pincode,location))
  }

  const onCancel = () => {
    history('/home')
  }

  return (
    <div>
      <Header title="Add Location" />
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
          <label className="form-label">Location Pincode</label>
          <input
            onChange={(e) => {
              setPincode(e.target.value)
            }}
            className="form-control"
            ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Location Name</label>
          <input
            onChange={(e) => {
                setLocation(e.target.value)
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

export default AddLocation

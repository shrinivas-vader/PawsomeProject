import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { getNotes } from '../actions/notesActions'

const ChooseOption = (props) => {
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
      <div class="column">
      <div class="col-md-2"> <a
                class="nav-link active"
                aria-current="page"
                href="/add-note"
              >
               <button  className="btn btn-success" href="/add-note" >
            Add doctor
          </button>
              </a></div>

  <div class="col-md-2"> <a
                class="nav-link active"
                aria-current="page"
                href="/adddog"
              >
              <button  className="btn btn-success" href="/adddog" >
            Add dog
          </button>
              </a></div>

              <div class="col-md-2"> <a
                class="nav-link active"
                aria-current="page"
                href="/addcommunity"
              >
              <button  className="btn btn-success" href="/addcommunity" >
            Add Community
          </button>
              </a></div>

              <div class="col-md-2"> <a
                class="nav-link active"
                aria-current="page"
                href="/addlocation"
              >
              <button  className="btn btn-success" href="/addlocation" >
            Add Location
          </button>
              </a></div>
</div>
</div>
    
    </div>
  )
}

export default ChooseOption

//--------------------------------------------------------------------------------------------------------------------------------------------

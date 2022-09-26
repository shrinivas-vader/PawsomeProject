import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { signin } from '../actions/userActions'
import sweetalert from "sweetalert";


const SigninScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useNavigate()

  const userSignin = useSelector((store) => store.userSignin)
  const { loading, error, response } = userSignin

  const dispatch = useDispatch()
  
  const onSignin = () => {
    dispatch(signin(email, password))
  }

  useEffect(() => {
    if (response && response.status == 'fail') {
      sessionStorage.setItem('token', response.data.token)
      history('/home')
    } else if (response && response.status == 'error') {
      sweetalert(response.error)
    } else if (error) {
      sweetalert(error)
    }
  }, [loading, error, response])

  return (
    <div>
      
      <Header title="Sign-In" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            className="form-control"
            placeholder="test@test.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="form-control"
            placeholder="*****"></input>
        </div>
        <div className="mb-3">
          <button onClick={onSignin} className="btn btn-success">
            Singin
          </button>
          <div className="float-end">
            New User? <Link to="/signup">Signup here</Link>
          </div>
        </div>
      </div>
      {loading && <div>waiting for response</div>}
     
      
    </div>
  )
}

export default SigninScreen

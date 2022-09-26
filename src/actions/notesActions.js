import {
  NOTE_ADD_FAIL,
  NOTE_ADD_REQUEST,
  NOTE_ADD_SUCCESS,
  NOTE_FETCH_FAIL,
  NOTE_FETCH_REQUEST,
  NOTE_FETCH_SUCCESS,
} from '../constants/notesConstants'
import axios from 'axios'

export const addNote = ( 
  fname,
  lname,
  mobile,
  email,
  password,
  pincode) => {
  return (dispatch) => {
    dispatch({
      type: NOTE_ADD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const body = {
      
      fname,
      lname,
      mobile,
      email,
      password,
      pincode
    }
    const url = 'http://localhost:4000/admin/addDoctor'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: NOTE_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: NOTE_ADD_FAIL,
          payload: error,
        })
      })
  }
}
//---------------------------------------------------------

export const addDog = ( 
  dname,dage,dbreed) => {
  return (dispatch) => {
    dispatch({
      type: NOTE_ADD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const body = {
      
      dname,dage,dbreed
    }
    const url = 'http://localhost:4000/admin/addDog'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: NOTE_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: NOTE_ADD_FAIL,
          payload: error,
        })
      })
  }
}
//----------------------------------------------------------------------------
export const addCommunity = ( 
  cname,pincode) => {
  return (dispatch) => {
    dispatch({
      type: NOTE_ADD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const body = {
      
      cname,pincode
    }
    const url = 'http://localhost:4000/admin/addCommunity'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: NOTE_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: NOTE_ADD_FAIL,
          payload: error,
        })
      })
  }
}
//------------------------------------------------------------------
export const addLocation = ( 
  pincode,location) => {
  return (dispatch) => {
    dispatch({
      type: NOTE_ADD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const body = {
      
      pincode,location
    }
    const url = 'http://localhost:4000/admin/addLocation'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: NOTE_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: NOTE_ADD_FAIL,
          payload: error,
        })
      })
  }
}

























export const getNotes = () => {
  return (dispatch) => {
    dispatch({
      type: NOTE_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    
    const url = 'http://localhost:4000/notes/'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: NOTE_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: NOTE_FETCH_FAIL,
          payload: error,
        })
      })
  }
}
//----------------------------
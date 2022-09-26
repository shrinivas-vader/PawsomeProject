import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'
import HomeScreen from './screens/homeScreen'
import AddNoteScreen from './screens/AddNoteScreen'
import AboutScreen from './screens/AboutScreen'
import Navigation from './components/Navigation'
//----------------------------------------

import Addcommunity from './screens/addCommunity'
import AddLocation from './screens/addLocation'
import ChooseOption from './screens/chooseOption'


function App() {
  return (
    <div >
      <Router>
        <Navigation/>
        <div className="container" >
          <Routes>
            <Route path="/" element={<SigninScreen/>} />
            <Route path="/signup" element={<SignupScreen/>} />
            {/* <Route path="/home" element={<HomeScreen/>} /> */}
            <Route path="/add-note2" element={<HomeScreen/>}/>
            <Route path="/add-note" element={<AddNoteScreen/>} />
            <Route path="/about" element={<AboutScreen/>} />
            <Route path="/adddog" element={<AddDog/>} />
            <Route path="/addcommunity" element={<Addcommunity/>} />
            <Route path="/addlocation" element={<AddLocation/>} />
            <Route path="/chooseoption" element={<ChooseOption/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
// component
// path="/"
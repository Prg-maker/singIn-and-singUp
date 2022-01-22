import {SingUp} from './pages/SingUp'
import {SingIn} from './pages/SingIn'

import style from './style.App.module.scss'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SingUp/>}/>
        <Route path="/sing-in" element={<SingIn/>}/>
      </Routes>
    </Router>
  )
}

export default App

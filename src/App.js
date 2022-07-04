import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Explore from './pages/Explore'
import ForgotPassword from './pages/ForgotPassword'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Offers from './pages/Offers'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/profile' element={<SignIn/>}/>
          <Route path='/offers' element={<Offers/>}/>
        </Routes>
        <Navbar/>
      </Router>
    </>
  );
}

export default App;

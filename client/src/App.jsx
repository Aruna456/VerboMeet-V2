import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './pages/Landing'
import { SignIn,SignUp } from './pages/AuthPage'
import Home from './pages/Home'
import Debates from './pages/Debates'
import UserProfile from './pages/UserProfile'
import AdminPage from './pages/AdminPage'
import AdminProfile from './pages/AdminProfile'
import AdminDebates from './pages/AdminDebates'
const App = () => {
  return (
    <div>
       <ToastContainer />
        <BrowserRouter>
       <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/debates' element={<Debates/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/adminhome' element={<AdminPage/>}/>
        <Route path='/adminprofile' element={<AdminProfile/>}/>
        <Route path='/admindebates' element={<AdminDebates/>}/>
       </Routes>
       </BrowserRouter> 
     
    </div>
  )
}

export default App
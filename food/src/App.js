import { NavbarC } from './components/navbar';
import Footer from './components/footer';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import HomePage from './pages/homePage';
import Loginpage from './pages/loginpage';
import MenuPage from './pages/menuPage';
import SignupPage from './pages/signupPage';
 import NoPage from './pages/noPage';

import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavbarC/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='login' element={<Loginpage/>}/>
      <Route path='menu' element={<MenuPage/>}/>
      <Route path='signup' element={<SignupPage/>}/>
      <Route path='*' element={<NoPage/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

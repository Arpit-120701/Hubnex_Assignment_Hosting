import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from '../src/Pages/Home'
import './App.css';
import Signup from './Pages/Signup';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element=<Home /> />
        <Route  path='/sign' element=<Signup  /> />
        <Route path='/dashboard' element=<Dashboard /> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

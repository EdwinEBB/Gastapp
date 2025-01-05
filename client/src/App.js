import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="app">
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route element={<Navbar/>}>
            <Route path='/inicio' element={<Dashboard/>} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;

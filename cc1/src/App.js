import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Registration' element={<Registration/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

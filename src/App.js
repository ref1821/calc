import './App.css';
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import {Home} from './components/Home'
import {Mediciones} from './components/Mediciones'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route index element={<Home />} />
          <Route path="/Mediciones" element={<Mediciones />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

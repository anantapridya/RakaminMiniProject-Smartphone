import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import Dashboard from './Pages/Dashboard';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/product/:id' element={< ProductDetail/>}/>
      </Routes>
    </BrowserRouter>
    // <div>
    //   < Dashboard />
    // </div>
  );
}

export default App;

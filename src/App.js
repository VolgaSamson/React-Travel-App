
import Navbar from './components/Navbar';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Product';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} >
      <Route path='/services' element={<Services />} />
      <Route path='/products' element={<Products />} />
      <Route path='/sign-up' element={<SignUp />} />

        </Route>
      </Routes>
    </BrowserRouter>
    
      
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Component/Main';
import Header from './Component/Header'
import Cart from './Component/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/cart' element={<Cart /> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

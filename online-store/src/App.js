import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Products from './components/Products/Products';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

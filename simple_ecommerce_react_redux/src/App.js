import './App.css';
import Header from './Containers/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from './Containers/ProductListing';
import ProductDetail from './Containers/ProductDetail';
import AddedCartItems from './Containers/AddedCartItems';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<ProductListing/>} />
          <Route path='/product/:productId' exact element={<ProductDetail/>} />
          <Route path='/cart/:productId' exact element={<AddedCartItems/>} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

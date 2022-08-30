import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Home, Contact, Category, Details, Products, About, Cart, Login} from './pages/index';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/:category/productdetails/:id" element={<Details />}>
          </Route>
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;

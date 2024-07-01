// App.js
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './redux/features/auth/authSlice';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ShopDetails from './pages/ShopDetails';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router>

      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/shop/:id" element={<ShopDetails />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Navbar onLogout={handleLogout} />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
          </>
        )}
      </Routes>
      <Navbar isLoggedIn={!isLoggedIn} onLogout={handleLogout} />

    </Router>
  );
};

export default App;
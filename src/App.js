// App.js
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/common/Navbar';
import Home from './pages/home/Home';
import Wishlist from './pages/wishlist/Wishlist';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ShopDetails from './pages/shop/ShopDetails';
import Cart from './pages/cart/Cart';
import MapComponent from './pages/map/MapComponent';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { selectAuth } from './redux/features/auth/authSlice';
import { createBrowserHistory } from 'history';
import { getStoredAuthToken } from './utils/authToken';
import PaymentSuccess from './pages/payment/PaymentSuccess';

const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useSelector(selectAuth);
  const token = getStoredAuthToken()
  return isLoggedIn && token ? element : <Navigate to="/login" />;
};

const history = createBrowserHistory();

const App = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  const token = getStoredAuthToken()

  const routes = [
    { path: "/home", element: <PrivateRoute element={<Home />} />, navbar: true },
    { path: "/maps/:id", element: <PrivateRoute element={<MapComponent />} />, navbar: true },
    { path: "/shop/:id", element: <PrivateRoute element={<ShopDetails />} /> },
    { path: "/wishlist", element: <PrivateRoute element={<Wishlist />} />, navbar: true },
    { path: "/cart", element: <PrivateRoute element={<Cart />} />, navbar: true },
    { path: "/profile", element: <PrivateRoute element={<Profile />} />, navbar: true },
    { path: "/login", element: isLoggedIn && token ? <Navigate to="/home" /> : <Login /> },
    { path: "/signup", element: isLoggedIn && token ? <Navigate to="/home" /> : <Signup /> },
    { path: "/payment-success", element: <PrivateRoute element={<PaymentSuccess />} /> },
    { path: "/", element: isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/signup" /> },
  ];

  return (
    <Router history={history}>
      <Routes>
        {routes.map(({ path, element, navbar }) => (
          <Route key={path} path={path} element={navbar ? <NavbarRoute element={element} /> : element} />
        ))}
      </Routes>
    </Router>
  );
};

const NavbarRoute = ({ element }) => {
  const { isLoggedIn } = useSelector(selectAuth);
  const token = getStoredAuthToken();
  if (!isLoggedIn || !token) {
    return element;
  }
  return (
    <>
      <Navbar />
      {element}
    </>
  );
};

export default App;

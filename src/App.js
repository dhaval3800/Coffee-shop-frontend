// App.js
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ShopDetails from './pages/ShopDetails';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { selectAuth } from './redux/features/auth/authSlice';

const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useSelector(selectAuth);
  return isLoggedIn ? element : <Navigate to="/login" />;
};

const NavbarRoute = ({ element }) => {
  const { isLoggedIn, user } = useSelector(selectAuth);
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} user={user} />
      {element}
    </>
  );
};

const App = () => {
  const routes = [
    { path: "/home", element: <Home />, private: true, navbar: true },
    { path: "/shop/:id", element: <ShopDetails />, private: true, navbar: false },
    { path: "/wishlist", element: <Wishlist />, private: true, navbar: true },
    { path: "/profile", element: <Profile />, private: true, navbar: true },
    { path: "/login", element: <Login />, private: false, navbar: false },
    { path: "/signup", element: <Signup />, private: false, navbar: false },
    { path: "/", element: <Navigate to="/signup" />, private: false, navbar: false },
  ];

  return (
    <Router>
      <Routes>
        {routes.map(({ path, element, private: isPrivate, navbar }) => (
          <Route
            key={path}
            path={path}
            element={
              isPrivate ? (
                <PrivateRoute element={navbar ? <NavbarRoute element={element} /> : element} />
              ) : (
                element
              )
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
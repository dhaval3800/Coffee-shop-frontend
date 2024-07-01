    import Home from './pages/Home';
    import Menu from './pages/Menu';
    import Wishlist from './pages/Wishlist';
    import SavedShops from './pages/SavedShops';
    import Profile from './pages/Profile';
    import Login from './pages/Login';
    import Signup from './pages/Signup';

    export const routes = [
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup /> },
        { path: '/menu', element: <Menu /> },
        { path: '/wishlist', element: <Wishlist /> },
        { path: '/saved-shops', element: <SavedShops /> },
        { path: '/profile', element: <Profile /> },
    ];
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Setting from './Pages/Setting';
import Users from './Pages/Users';
import Navbar from './Components/Navbar';
import Signup from './Pages/SignUp';
import Login from './Pages/Login';
import ForgotPswd from './Pages/ForgotPswd';
import ResetPswd from './Pages/ResetPswd';
import Profile from './Pages/Profile';
import Analytics from './Pages/Analytics';
import Products from './Pages/Products';
import AddProduct from './Components/AddProduct'

const AppContent = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup', '/forgot-password', '/reset-password'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className='h-screen'>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPswd />} />
        <Route path="/reset-password" element={<ResetPswd />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />


      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

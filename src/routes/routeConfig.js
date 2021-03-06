import { Navigate, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Register from '../pages/Register';
import UserOrder from '../pages/User/Order';
import FreelanceOrder from '../pages/Freelance/Order';
import Home from '../pages/Home';
import CreateServices from '../pages/Services/CreateServices';
import Login from '../pages/Login';
import Payment from '../pages/Payment';
import ForgetPassword from '../pages/ForgetPassword';
import Chat from '../pages/Chat';
import Post from '../components/Post/Post';
import MyPost from '../pages/Post/MyPost';
import SubcategaryCatalogue from '../pages/Post/SubcategaryCatalogue';
import ScrollToTop from '../components/Utils/ScrollToTop';
import TestOrderFreelancePage from '../pages/Test/TestOrderFreelancePage';
import TestOrderUserPage from '../pages/Test/TestOrderUserPage';

import { UserContext } from '../contexts/UserContext';

function RouteConfig() {
  const { user } = useContext(UserContext);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {user?.id ? (
          <>
            <Route path="/create-post" element={<CreateServices />} />
            <Route path="/message" element={<Chat />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/my/post" element={<MyPost />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        <Route path="/" element={<Home />} />
        <Route path="/user/order" element={<UserOrder />} />
        <Route path="/freelance/order" element={<FreelanceOrder />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/sub-category/:id" element={<SubcategaryCatalogue />} />
        <Route path="/post/:id" element={<Post />} />
        <Route
          path="/test/order/freelance"
          element={<TestOrderFreelancePage />}
        />
        <Route path="/services/add" element={<CreateServices />} />
        <Route path="test/order/user" element={<TestOrderUserPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default RouteConfig;

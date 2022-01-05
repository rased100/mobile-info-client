import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Pages/context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
// import Header from './Pages/Header/Header';
import Register from './Pages/Login/Register/Register';
import MoreProducts from './Pages/MoreProducts/MoreProducts';
import AddReview from './Pages/Review/AddReview';
import OrderNow from './Pages/OrdeNow/OrderNow';
import MyOrder from './Pages/OrdeNow/MyOrder';
import Iphones from './Pages/Filtering/Phones/Iphones/Iphones';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import AdminRoute from './Pages/Admin/AdminRoute';
import ManageAllOrders from './Pages/Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Pages/Admin/ManageProducts/ManageProducts';
import AddProduct from './Pages/Admin/AddProduct/AddProduct';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>

          <Routes>

            <Route path="/home" element={<Home />}>
            </Route>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/moreproduct" element={<MoreProducts />}>
            </Route>

            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            {/* <Route path="/iphone" element={<Iphones />}>
            </Route> */}
            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route path={`/dashboard/manageproducts`} element={<AdminRoute>
                <ManageProducts></ManageProducts>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/manageallorders`} element={<AdminRoute>
                <ManageAllOrders></ManageAllOrders>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/additems`} element={<AdminRoute>
                <AddProduct></AddProduct>
              </AdminRoute>}>
              </Route>
            </Route>
            <Route path="/ordernow/:itemId" element={<PrivateRoute>
              <OrderNow />
            </PrivateRoute>}></Route>
            <Route path="/myorders" element={<PrivateRoute>
              <MyOrder />
            </PrivateRoute>}></Route>
            <Route path="/addReview" element={<PrivateRoute>
              <AddReview />
            </PrivateRoute>}></Route>
            <Route path="*" element={<NotFound />}>
            </Route>
          </Routes>

        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;

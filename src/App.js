import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Pages/context/AuthProvider/AuthProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Register from './Pages/Login/Register/Register';

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

            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>

          </Routes>

        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;

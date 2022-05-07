import { Route, Routes } from 'react-router';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import SingUp from './components/SingUp/SingUp';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
     <Route path="/" element={<Home></Home>}></Route>
     <Route path="/Home" element={<Home></Home>}></Route>
     <Route path="/Inventory" element={<Inventory></Inventory>}></Route>
     <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
     <Route path="/Login" element={<Login></Login>}></Route>
     <Route path="/SingUp" element={<SingUp></SingUp>}></Route>
     </Routes>
    </div>
  );
}

export default App;

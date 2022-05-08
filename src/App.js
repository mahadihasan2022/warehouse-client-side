import { Route, Routes } from 'react-router';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import ManageInventories from './components/ManageInventories/ManageInventories';
import MyItem from './components/MyItem/MyItem';
import NotFound from './components/NotFound/NotFound';
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
     <Route path="/manageinventories" element={<ManageInventories></ManageInventories>}></Route>
     <Route path="/AddItem" element={<AddItem></AddItem>}></Route>
     <Route path="/MyItem" element={<MyItem></MyItem>}></Route>
     <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;

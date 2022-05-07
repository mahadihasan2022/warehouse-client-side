import React, { useState } from 'react';
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import HeaderLink from '../HeaderLink/HeaderLink';
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { Nav } from 'react-bootstrap';

const Navber = () => {
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
      signOut(auth);
    };

  const routes = [
    { id: 1, name: "Home", link: "/Home" },
    { id: 2, name: "Inventory", link: "/Inventory" },
    { id: 3, name: "Blogs", link: "/Blogs" },
    { id: 4, name: "Login", link: "/Login" },
    { id: 5, name: "SingUp", link: "/SingUp" },
  ];
    return (
        <nav className="bg-black h-full">
      <div
        onClick={() => setOpen(!open)}
        className="h-8 w-8 md:hidden text-white"
      >
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <ul
        className={`md:flex md:h-12 items-center md:bg-black justify-center font-bold absolute md:static duration-1000 ease-in ${open ? 'top-8' : 'top-[-120px]' }
        `}
      >
        {routes.map((route) => (
          <HeaderLink key={route.id} route={route}></HeaderLink>
        ))}

{
              user ?
              <Nav.Link as={Link} to="/manageinventories" className='text-white p-6 font-bold'>Manage Inventories</Nav.Link>
              :
              <Nav.Link as={Link} to="/manageinventories" className='text-white'></Nav.Link>
            }
            {
              user ?
              <Nav.Link as={Link} to="/additem" className='text-white p-6 font-bold'>Add Item</Nav.Link>
              :
              <Nav.Link as={Link} to="/additem" className='text-white p-6'></Nav.Link>
            }
            {
              user ?
              <Nav.Link as={Link} to="/myitem" className='text-white font-bold p-6'>My Item</Nav.Link>
              :
              <Nav.Link as={Link} to="/myitem" className='text-white'></Nav.Link>
            }
             {user ? (
            <button className="text-white font-bold" onClick={handleSignOut}>
              Sign out
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
      </ul>
    </nav>
  );
};

export default Navber;
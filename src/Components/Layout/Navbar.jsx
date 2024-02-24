import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div className='flex-1'>
            <Link to='/' className=' text-2xl font-bold'>
              <span className='rotate-12 text-green-700'>Crazy</span> Shop{" "}
              <span className='text-red-500'>BD</span>
            </Link>
          </div>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 text-lg font-bold '>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Product</Link>
          </li>
          <li>
            <a>Service</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <div className='space-x-5'>
          <Link to='/login'>
            <button className='btn btn-active btn-primary'>Login</button>
          </Link>

          <Link to='/sign-up'>
            <button className='btn btn-active btn-accent'>
              Create Account
            </button>
          </Link>
        </div>
        <div
          tabIndex={0}
          role='button'
          className='btn btn-ghost btn-circle avatar'
        >
          <div className='w-10 rounded-full'>
            <img
              alt='Tailwind CSS Navbar component'
              src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

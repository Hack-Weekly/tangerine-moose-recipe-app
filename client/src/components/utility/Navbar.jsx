import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const [open, updateOpen] = useState(false);
  const [openMobile, updateOpenMobile] = useState(false);

  return (
    <>
      <nav className='bg-gray-800'>
        <div className='mx-auto max-w-10xl px-2 sm:px-6 lg:px-4'>
          <div className='relative flex h-16 items-center justify-between'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              {/* <!-- Mobile menu button--> */}
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
                onClick={() => updateOpenMobile(!openMobile)}>
                <span className='sr-only'>Open main menu</span>
                {/* <!-- Icon when menu is closed. Menu open: "hidden", Menu closed: "block" --> */}

                <svg
                  className='block h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                </svg>
                {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className='hidden h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
              {/* <div className='flex flex-shrink-0 items-center'>
                <img
                  className='block h-8 w-auto lg:hidden'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                  alt='Your Company'
                />
                <img
                  className='hidden h-8 w-auto lg:block'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                  alt='Your Company'
                />
              </div> */}
              <div className='hidden sm:ml-3 sm:block'>
                <div className='flex'>
                  {/* space-x-4 */}
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  {/* <a href='#' className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' aria-current='page'> */}
                  <NavLink
                    to='/search'
                    // className='active:bg-gray-900 active:text-white text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                    className={({ isActive }) => {
                      var temp = "hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";
                      if (isActive) {
                        temp = "bg-gray-900 text-white " + temp;
                      } else {
                        temp = "text-gray-300 " + temp;
                      }
                      return temp;
                    }}>
                    Search
                  </NavLink>
                  {/* </a> */}
                  {/* <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'> */}
                  <NavLink
                    to='/my-recipes'
                    // className='active:bg-gray-900 active:text-white text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                    className={({ isActive }) => {
                      var temp = "hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";
                      if (isActive) {
                        temp = "bg-gray-900 text-white " + temp;
                      } else {
                        temp = "text-gray-300 " + temp;
                      }
                      return temp;
                    }}>
                    My Recipes
                  </NavLink>
                  <NavLink
                    to='/add'
                    // className='active:bg-gray-900 active:text-white text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                    className={({ isActive }) => {
                      var temp = "hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";
                      if (isActive) {
                        temp = "bg-gray-900 text-white " + temp;
                      } else {
                        temp = "text-gray-300 " + temp;
                      }
                      return temp;
                    }}>
                    Add Recipe
                  </NavLink>
                  {/* </a> */}
                </div>
              </div>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              {/* <!-- Profile dropdown --> */}
              <div className='relative ml-3'>
                <div>
                  <button
                    type='button'
                    className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 lg:mr-2'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                    onClick={() => updateOpen(!open)}>
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='h-8 w-8 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </button>
                </div>

                {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
                {open && (
                  <div
                    className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                    role='menu'
                    // menu={false}
                    aria-orientation='vertical'
                    aria-labelledby='user-menu-button'
                    tabIndex='-1'>
                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                    <div
                      // href='#'
                      className='block w-full px-4 py-2 text-sm text-gray-700 hover:cursor-pointer'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-2'>
                      Sign out
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {openMobile && (
          <div className='sm:hidden' id='mobile-menu'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <NavLink
                to='/search'
                className='bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium'
                aria-current='page'>
                Search
              </NavLink>
              <NavLink
                to='/my-recipes'
                className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'>
                My Recipes
              </NavLink>
            </div>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

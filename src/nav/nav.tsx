import { NavLink } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { useHistory } from "react-router";
import { Menu, Transition } from "@headlessui/react";
import Searchcard from "../searchbar/Searchcard";
import {
  FiBook,
  FiCalendar,
  FiEdit,
  FiInfo,
  FiLogOut,
  FiMenu,
  FiPenTool,
  FiUser,
  FiX,
} from "react-icons/fi";
import { Fragment, useContext, useState } from "react";
import { UserContext } from "../users/UserAuthContext";
import Login from "../login/login";

function Nav() {
  const usercontext = useContext(UserContext);
  const [open, setOpen] = useState(true);
  let history = useHistory();
  return (
    <>
      <Login open={open} setState={setOpen} />
      <nav className="py-4 sm:py-6 px-2 sm:px-12 w-full flex justify-between items-center border-b">
        <NavLink className="flex gap-x-3 items-center" to="/">
          <img
            className="h-8 w-8"
            src="https://storage.googleapis.com/ezap-prod/colleges/7918/shri-ram-institute-of-science-and-technology-jabalpur-logo.jpg"
            alt="website logo"
          />
          <h2 className="text-xl">
            <strong>SRIST</strong>
            <span className="font-light">space</span>
          </h2>
        </NavLink>
        <div className="hidden md:flex items-center gap-x-6 mr-6">
          <Searchcard></Searchcard>
          <ul className="flex gap-x-8">
            <li className="flex items-center">
              <NavLink
                className="links text-base font-medium hover:text-lime-600"
                activeClassName="text-lime-600"
                to="/notes"
              >
                Notes
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                className="links text-base font-medium hover:text-lime-600"
                activeClassName="text-lime-600"
                to="/events"
              >
                Events
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                className="links text-base font-medium hover:text-lime-600"
                activeClassName="text-lime-600"
                to="/articles"
              >
                Articles
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                className="links text-base font-medium hover:text-lime-600"
                activeClassName="text-lime-600"
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li className="flex items-center">
              {/* Login menu*/}
              <div className="relative">
                {!usercontext.user.login ? (
                  <button
                    className="px-5 py-2 bg-lime-500 text-base hover:bg-lime-600 text-white font-medium rounded-lg"
                    onClick={(e) => {
                      setOpen(!open)
                    }}
                  >
                    Login
                  </button>
                ) : (
                  <Menu>
                    <Menu.Button className="flex items-center">
                      <div className="h-[48px] w-[48px] bg-gray-300 flex items-center justify-center rounded-full">
                        <FiUser size={24} />
                      </div>
                      <div className="ml-2">{usercontext.user.name}</div>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute hidden md:flex top-[56px] right-0 z-10  w-56 mt-2 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 w-full">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-lime-500 text-white"
                                    : "text-gray-900"
                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                onClick={() => {
                                  history.push("/users/" + usercontext.user.user_id);
                                }}
                              >
                                <FiEdit size={18} className="mr-2" />
                                My Profile
                              </button>
                            )}
                          </Menu.Item>
                          {usercontext.user.login ? (
                            <Menu.Item>
                              {({ active }) => (
                                <UserContext.Consumer>
                                  {({user, updatedUser, updatLogin}) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-rose-300 text-white"
                                      : "text-gray-900"
                                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                  onClick={() => {
                                    updatedUser({
                                      user_id: "",
                                      login: false,
                                      name: ""
                                    })
                                    updatLogin(false);
                                  }}
                                >
                                  <FiLogOut size={18} className="mr-2" />
                                  Logout
                              </button>)}
                            </UserContext.Consumer>
                              )}
                            </Menu.Item>
                          ) : (
                            ""
                          )}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </li>
          </ul>
        </div>
        {/* Pop over menu */}
        <Popover className="sm:hidden relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? "" : "text-opacity-90"}
                text-white group bg-white px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <FiMenu
                  size={24}
                  className={`${open ? "" : "text-opacity-70"}
                  h-6 w-6 text-gray-600 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-full"
              >
                <Popover.Panel className="fixed z-10 w-10/12 top-0 right-0">
                  {({ close }) => (
                    <div className="overflow-hidden shadow-lg ring-1 ring-black bg-white ring-opacity-5 h-screen">
                      <div className="flex pt-6 mx-4 justify-between">
                        <div className="relative">
                          {!usercontext.user.login ? (
                            <button
                              className="px-5 py-2 bg-lime-500 text-base hover:bg-lime-600 text-white font-medium rounded-lg"
                              onClick={(e) => {setOpen(!open)}}
                            >
                              Login
                            </button>
                          ) : (
                            <>
                              <div className="h-[48px] w-[48px] bg-gray-300 flex items-center justify-center rounded-full">
                                <FiUser size={24} />
                              </div>
                              <div className="ml-2">{usercontext.user.name}</div>
                            </>
                          )}
                        </div>
                        <Popover.Button>
                          <FiX size={24} />
                        </Popover.Button>
                      </div>
                      <div className="relative grid gap-2 pt-6 px-2 lg:grid-cols-2">
                        <NavLink
                          className="links p-3 text-base rounded-lg font-medium hover:text-lime-600"
                          activeClassName="text-lime-600 bg-gray-50"
                          to="/notes"
                          onClick={(e) => {
                            close();
                          }}
                        >
                          <FiBook className="mr-2 inline" size={18} />
                          Notes
                        </NavLink>
                        <NavLink
                          className="links p-3 text-base rounded-lg font-medium hover:text-lime-600"
                          activeClassName="text-lime-600 bg-gray-50"
                          to="/articles"
                          onClick={(e) => {
                            close();
                          }}
                        >
                          <FiPenTool className="mr-2 inline" size={18} />
                          Articles
                        </NavLink>
                        <NavLink
                          className="links p-3 text-base rounded-lg font-medium hover:text-lime-600"
                          activeClassName="text-lime-600 bg-gray-50"
                          to="/events"
                          onClick={(e) => {
                            close();
                          }}
                        >
                          <FiCalendar className="mr-2 inline" size={18} />
                          Events
                        </NavLink>
                        <NavLink
                          className="links p-3 text-base rounded-lg font-medium hover:text-lime-600"
                          activeClassName="text-lime-600 bg-gray-50"
                          to="/about"
                          onClick={(e) => {
                            close();
                          }}
                        >
                          <FiInfo className="mr-2 inline" size={18} />
                          About
                        </NavLink>
                        <NavLink
                          className="links p-3 text-base rounded-lg font-medium text-rose-500 hover:text-lime-600"
                          activeClassName="text-lime-600 bg-gray-50"
                          to="/about"
                          onClick={(e) => {
                            close();
                          }}
                        >
                          <FiLogOut className="mr-2 inline" size={18} />
                          Logout
                        </NavLink>
                      </div>
                    </div>
                  )}
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </nav>
    </>
  );
}

export default Nav;

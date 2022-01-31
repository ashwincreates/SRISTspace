import { NavLink } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import Searchcard from "../searchbar/Searchcard";
import { FiMenu, FiX } from "react-icons/fi";
import { Fragment } from "react";
function Nav() {
  return (
    <>
      <nav className="py-4 sm:py-6 px-2 sm:px-12 w-full flex justify-between items-center border-b">
        <NavLink className="flex gap-x-3 items-center" to="/">
          <img
            className="h-8 w-8"
            src="https://storage.googleapis.com/ezap-prod/colleges/7918/shri-ram-institute-of-science-and-technology-jabalpur-logo.jpg"
            alt="website logo"
          />
          <h2 className="text-xl"><strong>SRIST</strong><span className="font-light">space</span></h2>
        </NavLink>
        <div className="hidden md:flex items-center gap-x-6 mr-6">
          <Searchcard></Searchcard>
          <ul className="flex gap-x-8">
            <li>
              <NavLink
                className="links text-base font-medium hover:text-lime-600"
                activeClassName="text-lime-600"
                to="/notes"
              >
                Notes
              </NavLink>
            </li>
            <li>
              <NavLink
                className="links text-base font-medium hover:text-lime-600"
                activeClassName="text-lime-600"
                to="/events"
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                className="links text-base font-medium hover:text-lime-600"
                activeClassName="text-lime-600"
                to="/articles"
              >
                Articles
              </NavLink>
            </li>
            <li>
              <NavLink
                className="links text-base font-medium hover:text-lime-600"
                activeClassName="text-lime-600"
                to="/about"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
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
											<div className="flex pt-6 mx-4 justify-end">
												<Popover.Button>
													<FiX size={24}/>
												</Popover.Button>
											</div>
                      <div className="relative grid gap-2 pt-6 px-2 lg:grid-cols-2">
                        <NavLink
                          className="links p-3 text-base rounded-lg font-medium hover:text-lime-600"
                          activeClassName="text-lime-600 bg-gray-50"
                          to="/notes"
                        >
                          Notes
                        </NavLink>
                        <NavLink
                          className="links p-3 text-base rounded-lg font-medium hover:text-lime-600"
                          activeClassName="text-lime-600 bg-gray-50"
                          to="/articles"
                        >
                          Articles
                        </NavLink>
                        <NavLink
                          className="links p-3 text-base rounded-lg font-medium hover:text-lime-600"
                          activeClassName="text-lime-600 bg-gray-50"
                          to="/events"
                        >
                          Events
                        </NavLink>
                        <NavLink
                          className="links p-3 text-base rounded-lg font-medium hover:text-lime-600"
                          activeClassName="text-lime-600 bg-gray-50"
                          to="/about"
                        >
                          About
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

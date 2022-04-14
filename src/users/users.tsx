import {Menu, Transition} from "@headlessui/react";
import {Fragment, useContext, useState} from "react";
import { useHistory } from "react-router";
import {FiEdit, FiLogOut, FiUser} from "react-icons/fi";
import {NavLink} from "react-router-dom";
import Login from "../login/login";
import {UserContext} from "./UserAuthContext";

const User = () => {
  const usercontext = useContext(UserContext);
  const [open, setOpen] = useState(true);
  let history = useHistory();
  return (
    <>
      <Login open={open} setOpen={setOpen} />
      <div className="relative">
        {!usercontext.login ?
        <button className="px-5 py-2 bg-lime-500 text-base hover:bg-lime-600 text-white font-medium rounded-lg" onClick={(e) => {/*setOpen(!open)*/}}>
          Login
        </button>
        :
      <Menu>
        <Menu.Button className="flex items-center">
          <div className="h-[48px] w-[48px] bg-gray-300 flex items-center justify-center rounded-full">
            <FiUser size={24} />
          </div>
          <div className="ml-2">
            {usercontext.name}
          </div>
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
                      active ? 'bg-lime-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={() => {
                      history.push("/users/" + usercontext.user_id)
                    }}
                  >
                    <FiEdit size={18} className="mr-2"/>
                    My Profile
                  </button>
                )}
              </Menu.Item>
          {usercontext.login ?
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-rose-300 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <FiLogOut size={18} className="mr-2"/>
                    Logout
                  </button>
                )}
              </Menu.Item>
            :""}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    }
  </div>
</>
  )
}

export default User;

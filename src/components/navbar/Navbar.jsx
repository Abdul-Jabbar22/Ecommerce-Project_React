import React, { Fragment, useContext, useState } from "react";
import myContext from "../../context/data/myContext";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

function Navbar() {
  const context = useContext(myContext);
  const { mode, toggleMode } = context;
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };

  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="bg-white sticky top-0 z-50  ">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-900 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  {user ? (
                    <div className="flow-root">
                      <Link
                        to={"/order"}
                        style={{ color: mode === "dark" ? "white" : "" }}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Order
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="flow-root">
                    {user?.user?.email === "abduljabbarray@gmail.com" ? (
                      <Link
                        to={"/dashboard"}
                        className="-m-2 block p-2 font-medium text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        admin
                      </Link>
                    ) : null}
                  </div>

                  {user ? (
                    <div className="flow-root">
                      <a
                        onClick={logout}
                        className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="flow-root">
                    <Link
                      to={"/"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                    >
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://avatars.githubusercontent.com/u/123597574?v=4&size=64"
                        alt="Abdul Jabbar"
                      />{" "}
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* desktop  */}
      <header className="relative bg-white">
        <p
          className="flex h-10 items-center justify-center bg-purple-400  px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{
            backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          Get free shipment on orders over RS : 1500
        </p>

        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl "
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex ">
                    <h1
                      className=" text-2xl font-bold text-black  px-2 py-1 rounded"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      E-Commerce
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link
                    to={"/"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
              Home
                  </Link>
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  {user ? (
                    <Link
                      to={"/order"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Order
                    </Link>
                  ) : (
                    ""
                  )}
                  {user?.user?.email == "abduljabbarray@gmail.com" ? (
                    <Link
                      to={"/dashboard"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </Link>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <a
                      onClick={logout}
                      className="text-sm font-medium text-gray-700 cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </a>
                  ) : (
                    ""
                  )}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-sm font-medium"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      J_Tech
                    </span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://avatars.githubusercontent.com/u/123597574?v=4"
                      alt="Abdul Jabbar"
                    />
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className="" onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === "light" ? (
                      <FiSun className="" size={30} />
                    ) : "dark" ? (
                      <BsFillCloudSunFill size={30} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <span
                      className="ml-2 text-sm font-medium text-gray-700 group-"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
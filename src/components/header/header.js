import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

const navigation = [
  { name: "About Me", href: "/about", current: false },
  { name: "Projects", href: "/projects", current: false },
  {
    name: "Blog",
    href: "https://mohammad-imran.medium.com/",
    current: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Header = ({ siteTitle }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {}, [])

  const handleClick = () => {
    if (show) {
      document.body.style.overflow = "scroll"
    } else {
      document.body.style.overflow = "hidden"
    }
    setShow(!show)
  }

  return (
    <>
      <nav
        className={classNames(
          show ? "" : "transform -translate-x-full",
          "transition duration-500 ease-in-out  bg-green-500 absolute z-10 h-screen w-full p-10 "
        )}
      >
        <div className="flex justify-end">
          <div onClick={handleClick}>
            <XIcon className="block h-6 w-6  text-white" aria-hidden="true" />
          </div>
        </div>
        <ul className="">
          {navigation.map(item => (
            <li className="my-10">
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : " hover:bg-green-700 ",
                  "block p-6 rounded-md text-center text-white text-2xl tracking-wider font-semibold uppercase"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {/* {open ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : ( */}

              <MenuIcon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={handleClick}
              />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className=" flex items-center text-2xl md:text-3xl lg:text-4xl text-gray-900  brand-name">
              <span classname="text-lowercase">
                <a href="/">mohammad imran</a>
              </span>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:block sm:ml-6 text-center">
              <div className="flex space-x-4 text-center">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-green-500 hover:text-white",
                      "px-3 py-2 rounded-md  text-md lg:text-lg font-normal text-center"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

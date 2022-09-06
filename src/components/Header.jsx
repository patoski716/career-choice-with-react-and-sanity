import React from 'react'
import Logo from '../img/section.png'
import { Link } from "react-router-dom";
import "../dist/output.css"


const Header = () => {
  return (
    <>
        <header className='flex items-center  justify-between bg-black  text-white p-5'>
            <div className="logo">
                <Link to="/">
                        <img src={Logo} alt="logo"  />
                </Link>
            </div>
            <nav>
                <ul className="flex">
                    <li className="mr-5 lg:text-lg">
                    <button>
                        <Link to="/">Home</Link>
                    </button>
                    </li>
                    <li className="lg:text-lg">
                    <button>
                        <Link to="/career">Career</Link>
                    </button>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header
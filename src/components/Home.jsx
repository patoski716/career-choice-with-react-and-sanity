import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='showcase'>
        <section className="overlay text-white flex flex-col items-center justify-center text-center h-screen">
        <h2 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl">
          Know what career best fits your personality
        </h2>
        <p className='pb-5'>Choose a career path that matches your preferences and you will increase your  chances of beign successfull</p>
        <button>
          <Link
            to="/career"
            className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-white font-bold"
          >
            Learn more
          </Link>
        </button>
      </section>
    </div>
  )
}

export default Home
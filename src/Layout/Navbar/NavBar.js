import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../../assets/images/DevLab_logo.png"
import {FaHeart, FaSearch} from 'react-icons/fa'
import {CgUser} from 'react-icons/cg'

function NavBar() {

    const hover = "hover:text-red transitions text-black "

    const Hover =({isActive})=> (isActive ? "hover:text-red":hover)

  return (
    <>
    <div className="bg-white shadow-md sticky top-0 z-20">

        <div className=" container  mx-auto py-6 px-2 lg:grid gap-20 grid-cols-7 justify-between items-center" >
            {/* Le logo */}
            <div className="col-span-1 lg:block hidden px-6 bg-black ">

            <Link to="/"  >
                <img src={Logo} alt="" className='w-full h-12 object-contain' />
            </Link>

            </div>

            {/* Search form */}

            <div className='col-span-3' >

                <form className='w-full text-sm bg-slate-400 rounded flex-btn gap-4'>

                    <button type='submit' className='bg-red rounded w-12 flex-colo h-12 text-white '  >

                    <FaSearch/>
                    </button>

                    <input type="text" placeholder='Search Movie' className='font-medium placeholder:text-border  w-11/12 h-12 bg-transparent border-none px-2 text-black  '  />

                </form>

            </div>

            {/* Menu */}

            <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">

                <NavLink to="/course" className={Hover}>Course</NavLink>
                <NavLink to="/about-us" className={Hover}>About us</NavLink>
                <NavLink to="/contact-us" className={Hover}>Contact us</NavLink>
                <NavLink to="/login" className={Hover}> <CgUser className="w-8 h-8" /> </NavLink>
                <NavLink to="/login" className={`${Hover} relative `  }> <FaHeart className='w-6 h-6 text-black' />
                
                <div className='w-5 h-5 flex-colo rounde-full text-xs bg-red absolute -top-5 -right-1 text-white' >3</div>

                 </NavLink>

            </div>
              
        </div>

    </div>
    </>
  )
}

export default NavBar

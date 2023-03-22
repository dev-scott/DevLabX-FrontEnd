import React from 'react'
import Footer from './Footer/Footer'
import NavBar from './Navbar/NavBar'

function Layout({children}) {
  return (
    <div>
        <>
        <div className="bg-primary text-white">

            <NavBar/>
                {children}
            <Footer/>

        </div>
         
        </>
      
    </div>
  )
}

export default Layout

import React, { useState } from 'react'

const NavBar = () => {
    const[isOpen,setIsOpen] = useState(false);

    const togglemenu=() => setIsOpen(!isOpen)
    const closeMenu = ( ) => setIsOpen(false)

  return (
    <header className='top-0 left-0 right-0 bg-black/90 fixed z-50'>
        ggg
    <div className='text-white mx-auto max-w-7xl'>
   
         Box in box 
               <div className='flex justify-between items-center py-5 mx-auto c-space'>
                <a href='/' className='text-neutral-300 font-bold text-xl hover:text-white transition-colors'>
                    Naveen Pandian
                </a>
                <button
                onClick={togglemenu}
                className=''
                aria-label='Toggle Menu nov'
                 
                   >
                    <img src={ isOpen?"public/assets/close.svg" : "assets/menu.svg"} alt="toggle" />
                    </button>
                        
                
                </div>


    </div>
    
    </header>
    
  )
}

export default NavBar
import {useState} from "react"
import logo from '../assets/logo.png'
import {FaTimes, FaBars} from 'react-icons/fa'

const Navbar = () => {
   const navLinks = [
      {
         title:'Home',
         link:'/'
      },
      {
         title:'About',
         link:'/about'
      },
      {
         title:'Services',
         link:'/serives'
      },
      {
         title:'Contact',
         link:'/contact'
      }
   ]

   const [open, setOpen] = useState(false);

   const handleMenu = () => {
      setOpen(!open);
      console.log(open)
   }

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
         <div className="flex items-center justify-between h-16">
         <div className="flex items-center">
            <a href="/"><img src={logo} className="h-14 "/></a>
         </div>
         {/* navlinks */}
         <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
               {navLinks.map((link, index) => (
                     <a 
                     key={index} 
                     href={link.link} className="text-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-lg transition-all font-medium">{link.title}</a>
                     ))
               }
            </div>
         </div>
         {/* hamburger */}
         <div className="-mr-2 flex md:hidden">
            <button type="button" 
            onClick={handleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
               <span className="sr-only transition-all">Open Main Menu</span>
               {open == true ? <FaTimes size={25}/> : <FaBars size={25} />}
            </button>
         </div>
         </div>
      </div>
      {/* mobile-view */}
         {open ? (
            <div className="md:hidden ">
               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
               {navLinks.map((link, index) => (
                     <a 
                     key={index} 
                     href={link.link} className="text-black  text-right hover:bg-gray-700 pr-[2rem] hover:text-white block px-3 py-2 rounded-md text-lg font-medium transition-all ">{link.title}</a>
                     ))
               }
            </div>
            </div>
         ): null }
    </div>
  )
}

export default Navbar
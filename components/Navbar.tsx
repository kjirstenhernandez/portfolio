'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'


const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <>
    <div className='fixed top=0 right=0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className = 'w-full'/>
    </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
            <a href='#top'>
                <Image src={assets.logo} alt="logo image" className='w-32 cursor-pointer mr-14'/>
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} `}>
                <li><a href='#top' className='font-Esteban'>Home</a></li>
                <li><a href='#about'className='font-Esteban'>About Me</a></li>
                <li><a href='#resume'className='font-Esteban'>Resumé</a></li>
                <li><a href='#work'className='font-Esteban'>Projects</a></li>
                <li><a href='#contact'className='font-Esteban'>Contact Me</a></li>
            </ul>
            <div className='flex items-center gap-4'>
                <div>
                    <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact <Image alt="arrow icon"src={assets.arrow_icon} className='w-3' /></a>
                </div>
                <div>
                    <a href='https://github.com/kjirstenhernandez?tab=repositories' className='hidden lg:flex items-center gap-3 px-2.5 py-2.5 border border-gray-500 rounded-full ml-4'><Image alt="arrow icon"src={assets.github_icon} className='max-w-8'/></a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/kjirsten-hernandez/' className='hidden lg:flex items-center gap-3 px-2.5 py-2.5 border border-gray-500 rounded-full ml-4'><Image alt="arrow icon"src={assets.linkedin_icon} className='max-w-8'/></a>
                </div>
                
            </div>

            {/* Mobile-Friendly Menu */}
            <div className="absolute top-0 right-0 max-w-screen-xl flex flex-wrap items-center justify-between  p-4 md:hidden">
                <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-hamburger" aria-expanded={isMenuOpen ? 'true' : 'false'} onClick={toggleMenu}>
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
                </button>
                {isMenuOpen && (
                        <div className="absolute top-10 right-10 w-[250px]">
                            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 px-">
                                <li>
                                    <a href="#top" className="block py-2 px-3 text-white bg-blue-700 rounded-sm" >Home</a>
                                </li>
                                <li>
                                    <a href="#about" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">About</a>
                                </li>
                                <li>
                                    <a href="#resume" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Resume</a>
                                </li>
                                <li>
                                    <a href="work" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Projects</a>
                                </li>
                            </ul>
                        </div>
                    )}
            </div>
            {/* <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed translate-x-full top-0 bottom-0 w-64 z-50 h-screen bg-lime-200 bg-opacity-80 backdrop-blur-lg transition duration-500 '>

                <div className='absolute top-4 right-4 flex items-center justify-center cursor-pointer' onClick={closeMenu}>
                    <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                </div>

                    <li><a href='#top' className='font-Esteban'>Home</a></li>
                    <li><a href='#about'className='font-Esteban'>About Me</a></li>
                    <li><a href='#resume'className='font-Esteban'>Resumé</a></li>
                    <li><a href='#work'className='font-Esteban'>Projects</a></li>
                    <li><a href='#contact'className='font-Esteban'>Contact Me</a></li>
                    
            </ul> */}
            
            
        </nav>
    </>
    
  )
}

export default Navbar

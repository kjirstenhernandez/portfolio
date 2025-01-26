'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, {useEffect, useRef, useState} from 'react'

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef<HTMLUListElement>(null);

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)';
        }
    }
    
    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)';
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])

  return (
    <>
    <div className='fixed top=0 right=0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className = 'w-full'/>
    </div>
        <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
            <a href='#top'>
                <Image src={assets.logo} alt="logo image" className='w-32 cursor-pointer mr-14'/>
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>
                <li><a href='#top' className='font-Ovo'>Home</a></li>
                <li><a href='#about'className='font-Ovo'>About Me</a></li>
                <li><a href='#resume'className='font-Ovo'>Resumé</a></li>
                <li><a href='#work'className='font-Ovo'>My Work</a></li>
                <li><a href='#contact'className='font-Ovo'>Contact Me</a></li>
            </ul>
            <div className='hidden lg:flex items-center'>
                <div>
                    <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact <Image alt="arrow icon"src={assets.arrow_icon} className='w-3' /></a>
                </div>
                <div>
                    <a href='https://github.com/kjirstenhernandez?tab=repositories' className='hidden lg:flex items-center gap-3 px-2.5 py-2.5 border border-gray-500 rounded-full ml-4'><Image alt="arrow icon"src={assets.github_icon} className='max-w-8'/></a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/kjirsten-hernandez/' className='hidden lg:flex items-center gap-3 px-2.5 py-2.5 border border-gray-500 rounded-full ml-4'><Image alt="arrow icon"src={assets.linkedin_icon} className='max-w-8'/></a>
                </div>
                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={assets.menu_black} alt='' className='w-6' />
                </button>
            </div>
            
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
            </div>

                <li><a href='#top' className='font-Ovo'>Home</a></li>
                <li><a href='#about'className='font-Ovo'>About Me</a></li>
                <li><a href='#resume'className='font-Ovo'>Resumé</a></li>
                <li><a href='#work'className='font-Ovo'>My Work</a></li>
                <li><a href='#contact'className='font-Ovo'>Contact Me</a></li>
        </ul>
            
            
        </nav>
    </>
    
  )
}

export default Navbar

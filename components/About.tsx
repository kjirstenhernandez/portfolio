import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Esteban'>
               Introduction 
            </h4>
            <h2 className='text-center text-5xl font-Esteban'>
                About Me
            </h2>
            <div className='flex w-full flex-col lg:flex-row items-center justify-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
                </div>
                <div className='flex-1'> 
                    <p className='mb-10 max-w-2xl font-Quicksand'>
                        I have a passion for analyzing complex problems and finding an efficient solution.  I&apos;m gaining hands-on experience in both front-end and back-end development, and I have a solid foundation in algorithms, data structures, and software design principles.  With 10 years of experience as a Certified Ophthalmic Technician, I&apos;ve seen firsthand how technology can significantly improve lives, and I&apos;m eager to contribute to future innovations. I&apos;m excited to work with a team and continue developing my skills as I work towards becoming a software engineer. 
                    </p>
                </div> 
                
            </div>
           
             
        </div>
    )
}

export default About;

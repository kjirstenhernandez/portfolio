import { assets, projectData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className = 'w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>
               Introduction 
            </h4>
            <h2 className='text-center text-5xl font-Ovo'>
                About Me
            </h2>
            <div className='flex w-full flex-col lg:flex-row items-center justify-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
                </div>
                <div className='flex-1'> 
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        I have a passion for analyzing complex problems and finding an efficient solution.  I'm gaining hands-on experience in both front-end and back-end development, and I have a solid foundation in algorithms, data structures, and software design principles.  With 10 years of experience as a Certified Ophthalmic Technician, I've seen firsthand how technology can significantly improve lives, and I'm eager to contribute to future innovations. I'm excited to work with a team and continue developing my skills as I work towards becoming a software engineer. 
                    </p>
                </div> 
                
            </div>
            <h4 id='work' className='text-center text-5xl font-Ovo scroll-mt-20'>My Personal Projects</h4>
            {projectData.map(({title, image, description}, index) => (
                <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96" key={index}>
                    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md flex justify-center">
                        <Image src={image} alt="card-image"  />
                    </div>
                    <div className="p-4">
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                        {title}
                        </h6>
                        <p className="text-slate-600 leading-normal font-light">
                        {description} 
                        </p>
                    </div>
                    <div className="px-4 pb-4 pt-0 mt-2 flex justify-center">
                        <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        See more
                        </button>
                    </div>
                </div> 
            ))}
             
        </div>
    )
}

export default About;
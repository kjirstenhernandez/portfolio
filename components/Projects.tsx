import { projectData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
    function handleClick() {

    }
    return (
        <div className='w-full mx-auto px-6 sm:px-12 py-10 scroll-mt-20'>
            <h4 id='work' className='text-center text-5xl font-Esteban scroll-mt-20'>Projects</h4>
            <div className='flex flex-col justify-evenly items-start md:flex-row'>
                {projectData.map(({title, image, description, link}, index) => (
                    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg max-w-xs " key={index}>
                        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md flex justify-center">
                            <Image className='object-cover w-4/5 h-full' src={image} alt="card-image" />
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
                            <a target="_blank" href={link}>
                                <div className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    Visit
                                </div>
                            </a>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    )
}

export default Projects;
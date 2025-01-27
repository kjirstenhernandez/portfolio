import { projectData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div className='w-full px-[12%] py-10'>
            <h4 id='work' className='text-center text-5xl font-Esteban scroll-mt-20'>Projects</h4>
            {projectData.map(({title, image, description}, index) => (
                <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96" key={index}>
                    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md flex justify-center">
                        <Image className='object-cover w-full h-full' src={image} alt="card-image" />
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
                        Visit
                        </button>
                    </div>
                </div> 
            ))}
        </div>
    )
}

export default Projects;
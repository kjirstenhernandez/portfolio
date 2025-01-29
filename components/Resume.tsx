'use client'
import { educationInfo, experienceInfo, skillsList }from '@/assets/assets'
import React, { useState } from 'react';

const Resume: React.FC = () => {
const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const minusSVG = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
            <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
        </svg>
    );

    const plusSVG = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
        </svg>
    );


    return (
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-12 py-10 scroll-mt-20" id="resume">
            <h2 className="text-center text-5xl font-Esteban">Resumé</h2>
            <div className="border-b border-slate-200" key='education'>
                    <button
                        onClick={() => toggleAccordion(1)}
                        className="w-full flex justify-between items-center py-5 text-slate-800 font-Quicksand"
                    >
                        <h3 className="text-2xl">Education</h3>
                        <span className="text-slate-800 transition-transform duration-300">
                            {activeIndex === 1 ? minusSVG : plusSVG}
                        </span>
                    </button>
                    <div id={`content-${1}`} className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 1 ? 'max-h-[500px]' : 'max-h-0'}`}>
                        <div className="pb-5 text-md text-slate-600 max-h-[400px] overflow-y-auto scrollbar-none">{
                            educationInfo.map(({degree, school, dates, accomplishments}, index) => (
                                <div className=' bg-white border border-gray-200 rounded-lg shadow-sm px-6 pb-4'key={index}>
                                    <div className='flex py-5 lg:flex-row sm:flex-col'>
                                        <div className='grow'>
                                            <h4 className='font-Esteban text-lg'>{degree}</h4>
                                            <p className='italic'>{school}</p>
                                        </div>
                                        <div className=''>
                                            <p>{dates}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <ol className='px-3 pb-'>
                                        {accomplishments.map(({bullet}, index) => (
                                            <li className='m-0.5 list-disc' key={index}>
                                                {bullet}
                                            </li>
                                        ))}
                                        </ol>
                                    </div>
                                </div>
                            ))
                        }</div>
                    </div>
                </div>
                <div className="border-b border-slate-200" key='experience'>
                    <button
                        onClick={() => toggleAccordion(2)}
                        className="w-full flex justify-between items-center py-5 text-slate-800 font-Quicksand"
                    >
                        <h3 className="text-2xl">Experience</h3>
                        <span className="text-slate-800 transition-transform duration-300">
                            {activeIndex === 2 ? minusSVG : plusSVG}
                        </span>
                    </button>
                    <div id={`content-${2}`} className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 2 ? 'max-h-[500px]' : 'max-h-0'}`}>
                        <div className="pb-5 text-md text-slate-600 px-6 max-h-[400px] overflow-y-auto scrollbar-none">{
                            experienceInfo.map(({position, location, dates, business, accomplishments}, index) => (
                                
                                <div className=' bg-white border border-gray-200 rounded-lg shadow-sm px-6 pb-4 mb-3'key={index}>
                                    <div className='flex py-5 lg:flex-row sm:flex-col'>
                                        <div className='grow'>
                                            <h4 className='font-Esteban text-lg'>{position}</h4>
                                            <p className='italic'>{business} - {location}</p>
                                        </div>
                                        <div className=''>
                                            <p>{dates}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <ol className='px-3'>
                                        {accomplishments.map(({bullet}, index) => (
                                            <li className='m-0.5 list-disc' key={index}>
                                                {bullet}
                                            </li>
                                        ))}
                                        </ol>
                                    </div>
                                </div>
                            ))
                        }</div>
                    </div>
                </div>
                <div className="border-b border-slate-200" key='skills'>
                    <button
                        onClick={() => toggleAccordion(3)}
                        className="w-full flex justify-between items-center py-5 text-slate-800 font-Quicksand"
                    >
                        <h3 className="text-2xl">Skills</h3>
                        <span className="text-slate-800 transition-transform duration-300">
                            {activeIndex === 3 ? minusSVG : plusSVG}
                        </span>
                    </button>
                    <div id={`content-${3}`} className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 3 ? 'max-h-[500px]' : 'max-h-0'}`}>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 pb-5 px-6">{
                            skillsList.map((skill) => (
                                <div className='flex items-center justify-center rounded-md border border-slate-300 py-1 px-3 text-center text-wrap text-md transition-all shadow-sm text-slate-600 ' key={skill}>
                                    {skill}
                                </div>
                            ))
                        }</div>
                    </div>
                </div>      
        </div>
    );
}

export default Resume;

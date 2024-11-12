import React from 'react';
import AboutImage from '../../assets/imgg1.png';
import { IoArrowForward } from 'react-icons/io5';

function About() {
    return (
        <div id="About" className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-gradient-to-r from-purple-800 to-indigo-600 shadow-2xl mx-0 md:mx-20 opacity-90 rounded-2xl p-12'>
            <div className='mb-6 md:mb-0'>
                <h2 className='text-3xl md:text-5xl font-bold text-yellow-400'>About Me</h2>
            </div>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center gap-8'>
                <img className='md:h-80 rounded-md shadow-lg' src={AboutImage} alt="About" />
                <ul className='space-y-6'>
                    <div className='flex gap-3 py-4 items-center'>
                        <IoArrowForward size={30} className='text-yellow-300' />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold text-white leading-normal'>
                                FrontEnd Developer
                            </h1>
                            <p className='text-sm md:text-md text-gray-200 leading-tight'>
                                Passionate about creating interactive and responsive UIs that enhance user experiences.
                            </p>
                        </span>
                    </div>

                    <div className='flex gap-3 py-4 items-center'>
                        <IoArrowForward size={30} className='text-yellow-300' />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold text-white leading-normal'>
                                Java Developer
                            </h1>
                            <p className='text-sm md:text-md text-gray-200 leading-tight'>
                                Skilled in Java backend development, building robust and scalable applications.
                            </p>
                        </span>
                    </div>

                    <div className='flex gap-3 py-4 items-center'>
                        <IoArrowForward size={30} className='text-yellow-300' />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold text-white leading-normal'>
                                Full Stack Developer
                            </h1>
                            <p className='text-sm md:text-md text-gray-200 leading-tight'>
                                Experienced in full-stack development with a focus on end-to-end solutions.
                            </p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default About;

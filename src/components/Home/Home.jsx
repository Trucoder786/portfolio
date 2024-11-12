import React from 'react';
import avatar from '../../assets/img3.png';
import { IoArrowForward } from 'react-icons/io5';

function Home() {
    return (
        <div className='text-white md:flex flex-col md:flex-row overflow-hidden items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 shadow-xl mx-0 md:mx-20 opacity-95 rounded-3xl p-12 m-8'>
            <div className='mb-6 md:mb-0'>
                <h2 className='text-3xl md:text-5xl font-bold text-yellow-400 leading-tight'>
                    Hello, I am <span className='text-indigo-200'>Divyanshu</span>
                </h2>
                <p className='text-md md:text-2xl text-gray-200 mt-4'>
                    Passionate about building beautiful and responsive websites and applications with the latest web technologies.
                </p>
                <a href="#Footer">
                <button className='mt-8 text-white py-3 px-6 text-lg bg-indigo-500 rounded-2xl hover:bg-indigo-400 transition-all duration-300'>
                    Contact Me
                </button>
                </a>
            </div>

            <div className='mt-8 md:mt-0 md:w-2/4'>
                <img className='md:h-80 rounded-xl shadow-2xl' src={avatar} alt="Divyanshu" />
            </div>
        </div>
    );
}

export default Home;

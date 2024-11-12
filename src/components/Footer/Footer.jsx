import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

function Footer() {
  return (
    <div id="Footer" className='bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12 px-6 md:px-12 mx-4 md:mx-20 rounded-3xl'>
        <div className='max-w-6xl mx-auto text-center md:text-left'>
            <h1 className='text-3xl md:text-5xl font-bold mb-4'>Contact</h1>
            <h3 className='text-sm md:text-xl font-normal mb-8'>
                Feel free to reach out for collaborations, inquiries, or just to connect.
            </h3>
            <div className='flex flex-col md:flex-row justify-center md:justify-start gap-8'>
                <ul className='space-y-4'>
                    <li className='flex items-center gap-3 text-lg'>
                        <MdOutlineEmail size={24} className='text-yellow-300' />
                        <span className='text-lg'>divyanshukhatri313@gmail.com</span>
                    </li>
                    <li className='flex items-center gap-3 text-lg'>
                        <CiLinkedin size={24} className='text-blue-500' />
                        <span className='text-lg'>
                            <a href='https://www.linkedin.com/in/divyanshu-khatri-538210258' target='_blank' rel='noopener noreferrer'>
                                LinkedIn
                            </a>
                        </span>
                    </li>
                    <li className='flex items-center gap-3 text-lg'>
                        <FaGithub size={24} className='text-gray-200' />
                        <span className='text-lg'>
                            <a href='https://github.com/Trucoder786?tab=repositories' target='_blank' rel='noopener noreferrer'>
                                GitHub
                            </a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Footer;

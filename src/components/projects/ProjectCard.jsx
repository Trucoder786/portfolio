import React from 'react';
import EventManImage from '../../assets/EventMan.jpg';
import TableBookingImage from '../../assets/TableBooking.jpg';

function ProjectCard({ title, main,image,link }) {
  return (
    <div className='p-5 md:p-5 flex flex-col w-80 bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg rounded-2xl'>
        <img className='w-full h-48 object-cover rounded-2xl shadow-md' src={image} alt="Event" />
        <h3 className='text-xl md:text-2xl font-semibold text-white py-3'>{title}</h3>
        <p className='text-sm md:text-md text-gray-200 leading-tight'>{main}</p>
        <div className='mt-4'>
           <a href={link}>
             <button className='w-full text-white py-2 text-sm md:text-lg font-semibold rounded-3xl bg-blue-700 hover:bg-blue-600 transition-all'>
                Source Code
            </button>
            </a>
        </div>
    </div>
  );
}

export default ProjectCard;

import React from 'react'
import ProjectCard from './ProjectCard'
import EventManImage from '../../assets/EventMan.jpg';
import TableBookingImage from '../../assets/TableBooking.jpg';
import CrypoImage from '../../assets/Crypto.jpg';

function Projects() {
    return (
        <div id="Projects" className='p-10 md:p-24 text-white '>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>
                Projects
            </h1>
            <div className='py-12 px-8 flex justify-between flex-wrap gap-5 '>
                <ProjectCard title="Avalokan webSite" main="This website is Build mainly for college student in this website student can see the currenct college events and also they can participate in the college event. as well as they can also see the college clubs" image={EventManImage} link="https://github.com/Trucoder786/Avalokan" />

                <ProjectCard title="Table Booking" main="Created a web application for restaurant reservations that enables users to book tables and pre-order meals, 
                ensuring food preparation aligns with their arrival time" image={TableBookingImage} link="https://github.com/Trucoder786/Restaurant-Booking"/>

                <ProjectCard title="Crypto And Stock Price" main="Built a dynamic web application using RapidAPI to fetch and display real-time cryptocurrency and stock prices. Integrated APIs to gather data from multiple sources, ensuring accurate and up-to-date information." image={CrypoImage} link="https://github.com/Trucoder786/CryptoCal" />

            </div>
        </div>
    )
}

export default Projects
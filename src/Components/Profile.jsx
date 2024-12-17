import React, { useEffect } from 'react'
import pp from '../assets/fotoaku.jpeg'
import { Button } from 'flowbite-react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profile = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
    });
  }, [])

  return (
    <div>
      <div className="flex items-center justify-evenly h-screen gap-8 flex-wrap " id='home'>
        <div className='absolute top-0 -left-4 w-100 h-100 bg-blue-300 rounded-full filter blur-xl mt-10 z-0 opacity-40'></div>
        <div className='absolute top-100 right-0 w-72 h-72 bg-purple-300 rounded-full filter blur-xl mt-10 z-0 opacity-40'></div>
        <div className="relative flex flex-col" data-aos="fade-right" data-aos-duration="2500">
          
          <div className='relative z-10'>
            <h5 className="mb-3 md:text-2xl font-small text-gray-800 dark:text-white">
              Hello!
            </h5>
            <h5 className="mb-3 md:text-5xl font-medium text-gray-900 dark:text-white">
              I'm Hansel Vincentius
            </h5>
            <h5 className="mb-3 md:text-5xl font-medium text-gray-900 dark:text-white">
              Christian Dinata
            </h5>
            <span className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-md">
              Junior Programmer
            </span>

            <div className="flex gap-7 mt-5">
              <Button color="blue" pill href='#about'>
                About me 
              </Button>
              <Button color="blue" pill href='#skill'>
                My Skills
              </Button>
            </div>
          </div>
        </div>
        
        <img
          alt="image"
          src={pp}
          className="w-80 h-80" data-aos='fade-left' data-aos-duration="2500"
        />
      </div>
    </div>
  )
}

export default Profile;

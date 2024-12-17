import { Progress } from 'flowbite-react'
import React from 'react'

const MySkills = () => {
  return (
    <div className='relative mt-9 p-40 h-screen' id='skill'>
        <div className='absolute top-45 left-45 w-72 h-72 bg-blue-300 rounded-full filter blur-xl mt-10 z-0 opacity-40'></div>
        <div className='absolute top-100 right-8 w-72 h-72 bg-purple-300 rounded-full filter blur-xl mt-10 z-0 opacity-40'></div>
        <div className='text-center' data-aos="fade-down" data-aos-duration="2500">
            <div>
                <h5 className="mb-3 md:text-5xl font-medium text-gray-900 dark:text-white">
                My Skills
            </h5>
            <span className="text-lg md:text-xl  text-gray-500 dark:text-gray-400 max-w-md">
                Passionate about coding and always eager to explore new ideas and challenges.
            </span> 
            </div>
        </div>
        <div className='flex justify-evenly gap-8 my-5 ' data-aos="fade-up" data-aos-delay="250"  data-aos-duration="2500">
            <div className='flex flex-col gap-2 w-100'>
                <div className="text-base font-medium ">React</div>
                <Progress progress={50} color="blue" />
                <div className="text-base font-medium ">JavaScript</div>
                <Progress progress={60} color="blue" />
                <div className="text-base font-medium ">Php</div>
                <Progress progress={65} color="blue" />
                <div className="text-base font-medium ">CSS</div>
                <Progress progress={80} color="blue" />
            </div>
            <div className='flex flex-col gap-2 w-100' data-aos="fade-up" data-aos-delay="350"  data-aos-duration="2500">
                <div className="text-base font-medium ">CSS</div>
                <Progress progress={45} color="blue" />
                <div className="text-base font-medium ">Figma</div>
                <Progress progress={90} color="blue" />
                <div className="text-base font-medium ">Laravel</div>
                <Progress progress={30} color="blue" />
                <div className="text-base font-medium ">Bootstrap And Tailwind</div>
                <Progress progress={60} color="blue" />
            </div>  
        </div>
    </div>
  )
}

export default MySkills
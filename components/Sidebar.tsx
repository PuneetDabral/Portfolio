import React from 'react';
import {AiFillGithub,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {GiTie} from 'react-icons/gi'
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Sidebar = () => {
    const { theme,setTheme } = useTheme();
    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
  return <div>
      <Image src="https://user-images.githubusercontent.com/86554356/151674745-eed524f3-cd2d-4eac-b8b7-5debdbbbe972.png" 
      alt="user image" 
      className="mx-auto rounded-full "
      width='128'
      height='128'
      quality='100'
      />

      <h3 className="my-4 text-3xl font-medium font-kaushan">
     <span className="text-green">Puneet </span>
     Kumar
     </h3>

     <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
         Software Developer
     </p>

    <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200" 
    href="images/1955991617_Puneet.pdf" download='Puneet Kumar Resume'>
    <GiTie className="w-6 h-6"/>
     Download Resume
     </a>
  
     {/* //socail icons */}
     <div className="flex justify-around w-9/12 my-5 text-green md:w-full">  {/*width w-9/12 75% of screen md is for large or mediam screen*/}
     <a href="https://www.instagram.com/puneet__dabral/" >
     <AiFillInstagram className="w-6 h-6 courser-pointer"/>
     </a>
     <a href="https://github.com/PuneetDabral" >
     <AiFillGithub className="w-6 h-6 courser-pointer"/>
     </a>
     <a href="https://www.linkedin.com/in/puneet-dabral-kumar-90566521b/" >
     <AiFillLinkedin className="w-6 h-6 courser-pointer"/>
     </a>
     </div>
     
     {/* adress */}
     <div  className="py-4 my-5 bg-gray-200 dark:bg-dark-200" style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
         <div className="flex items-center justify-center space-x-2">
            <GoLocation />
             <span> Ambala,India</span>
         </div>
         <p className="my-2">puneetdabral2000@gmail.com</p>
         <p className="my-2">+91740442936</p>
     </div>
     {/* email button */}
     <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
      onClick={()=>window.open('mailto:puneetdabral2000@gmail.com')}>Email me</button>
     <button onClick={changeTheme} className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">Toggle Theme</button>
  </div>;
};

export default Sidebar;

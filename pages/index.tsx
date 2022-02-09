import React from 'react';
import ServiceCard from '../components/ServiceCard';
import {services} from '../data'
import { motion } from 'framer-motion';
import { fadeINUp, routeAnimation, stagger } from '../animation';
import Head from 'next/head';

const index = () => {
  //console.log(services)
  return(
   <motion.div className="flex flex-col flex-grow px-6 pt-1" variants={routeAnimation} initial='initial'
    animate='animate' exit='exit'>
      <Head>
        <title>Portfolio | Puneet</title>
      </Head>
    <h5 className="my-3 font-medium"> I am currently pursuing B.Tech Degree(Third Year) in 
    Information Technology from Chitkara University. I have love to work in 
   Full Stack Web Development and intrest in Devops
    </h5>

     <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"   style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}>
       <h6 className="my-3 text-xl font-bold tracking-wide">What I doing</h6>

       <motion.div className="grid gap-6 lg:grid-cols-2" 
       variants={stagger} initial='initial' animate='animate'>
         { services.map(service=>(
           <motion.div variants={fadeINUp} 
           className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1">
              <ServiceCard service={service} />
           </motion.div>
         
          ))}
       </motion.div>

     </div>
  </motion.div>
  )
  
};


export default index;


//data fatching for our api
// /!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }


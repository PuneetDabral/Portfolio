import React from 'react';
import ServiceCard from '../components/ServiceCard';
import {services} from '../data'
const index = () => {
  //console.log(services)
  return(
   <div className="flex flex-col flex-grow px-6 pt-1">
    <h5 className="my-3 font-medium"> I am currently pursuing B.Tech Degree(Third Year) in Information technology 
  Engineering from Chitkara University. I have love to work in 
   Full Stack Web Development and intrest in Devops
    </h5>

     <div className="flex-grow p-4 mt-5 bg-gray-400"   style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}>
       <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
       <div className="grid gap-6 lg:grid-cols-2">
         { services.map(service=>(
           <div className="bg-gray-200 rounded-lg lg:col-span-1">
              <ServiceCard service={service} />
           </div>
         
          ))}
       </div>

     </div>
  </div>
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


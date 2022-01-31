import React from 'react';
import Bar from '../components/Bar';
import { languages, tools } from '../data';

const resume = () => {
  return <div className="px-6 py-4">
   {/* educayion &exp */}
   <div className="grid gap-6 md:grid-cols-2">

     <div>
       <h5 className="my-3 text-2xl font-bold">Education</h5>
       <div>
         <h5 className="my-2 text-xl font-bold">Information Technology</h5>
         <p className="font-semibold">Chitkara University(2020-2023)</p>
         <p className="my-3">I am currently pursuing B.Tech Degree(Third Year) in 
         Information Technology from Chitkara University</p>
       </div>
     </div>

     <div>
       <h5 className="my-3 text-2xl font-bold">Experience</h5>
       {/* <div>
         <h5 className="my-2 text-xl font-bold">making Project in Web Dev</h5>
         <p className="font-semibold">intrest in Devops</p>
         <p className="my-3">Exporing more technologies</p>
       </div> */}
     </div>

     
   </div>
    


    {/* lang & tools */}
    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <h5 className="my-3 text-2xl font-bold">Language & Frameworks</h5>
        <div className="my-2">
         {
           languages.map(Language => <Bar data={Language} key={Language.name} />) 
         }
        </div>
      </div>

      <div>
        <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
        <div className="my-2">
         {
           tools.map(Tool => <Bar data={Tool} key={Tool.name} />) 
         }
        </div>
      </div>
    </div>
  </div>;
};

export default resume;

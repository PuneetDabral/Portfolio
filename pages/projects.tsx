import { projects as projectData} from '../data';
import ProjectCart from '../components/ProjectCart';
import { ProjectNavbar } from '../components/ProjectNavbar';
import { useState } from 'react';
import { Category } from '../types';


const Projects = () => {
  const [projects, setProject] = useState(projectData);
  const [active, setActive] = useState('all');

  const handlerFilterCategory = (category:Category | 'all') => {
    if(category==='all'){
      setProject(projectData);
      setActive(category); 
      return;
    }
   const newArray = projectData.filter(project=>project.category.includes(category))
  setProject(newArray);
  setActive(category);
  }
  return <div className='px-5 py-2 overflow-y-scroll' style={{height:'65vh'}}>
  <ProjectNavbar handlerFilterCategory={handlerFilterCategory} active={active}/>
      <div className='relative grid grid-cols-12 gap-4 my-3'>
        {
          projects.map((project) => (
            <div className='col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200'>
             <ProjectCart project={project} key={project.name} />
            </div>


          ))
        }
      
        
      </div>
    </div>

      
  
};

export default Projects;

import React from 'react'
import { Link } from 'react-router-dom';

const ResearchItem = ({research}) => {
    const { links, title } = research;
  return (
    <div className="space-x-2 border-1 bg-teal-900 p-2 border rounded-3xl cyan-500">
        <div className="text-left">
         
          
            <h3 className="uppercase">{title}</h3>

            <Link to={links}><button className='bg-red-950 w-full btn' >links</button></Link>
            
            

           
          
        </div>
      </div>
  )
}

export default ResearchItem
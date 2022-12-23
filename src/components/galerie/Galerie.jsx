import React from 'react'
import './Galerie.css';
import { Link } from 'react-router-dom';

const Galerie = () => {
  return (
    <div className='Galerie-flex'>
      <div className='project-one'>

  <h1 className='Galerie-h1'><Link to='/Pictures'>Project One </Link></h1>  
       <div className='project-one-cercle'></div>
      </div>
      <div className='Project-two'>
        

        <h1 className='Galerie-h1'><Link to='/Pictures'>Project two </Link></h1>
        <div className='project-two-cercle'></div>
      </div>
    </div>
  )
}
export default Galerie
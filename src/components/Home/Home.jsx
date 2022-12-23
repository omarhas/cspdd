import React from 'react'
import './Home.css';
import { Router,Routes,Link } from 'react-router-dom';
import Pictures from '../galerie/Pictures';
const Home = () => {
  return (
    <div>
        <ul>
            <li><a href='#'>Home</a></li>

            <li>
                <a href='#'>Galerie</a>
                <ul className='dropdown'>
                    <li><Link to="/Galerie">Pictures</Link></li>
                    <li><Link to="/">Videos</Link></li>
                </ul>
            
            </li>
        </ul>
    </div>
  )
}

export default Home
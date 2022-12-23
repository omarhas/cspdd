import { width } from '@mui/system';
import {React,useState} from 'react'
import  './Pictures.css'
import carre1 from '../images/carre1.png'
import x from '../images/1.jpeg'
import xx from '../images/2.jpg'
import xxx from '../images/3.jpeg'
import xxxx from '../images/4.webp'
import xxxxx from '../images/5.webp'
import laptop from '../images/laptop.jpg'
import CloseIcon from '@mui/icons-material/Close';
const Pictures = () => {
    //storing pictures 
    let data=[
        {
            id:1,
            imgSrc:x
        },  {
            id:2,
            imgSrc:carre1
        },  {
            id:3,
            imgSrc:xx
        },  {
            id:4,
            imgSrc:x
        },
        {
            id:5,
            imgSrc:xxx
        },{
            id:6,
            imgSrc:xxxx
        },
        {
            id:7,
            imgSrc:xxxxx
        },{
            id:8,
            imgSrc:laptop
        }
    ]
    const [model,setModel]=useState(false)
    const [tempimgSrc,setTempimgSrc]=useState('')
    const getImg =(imgSrc)=>{
setTempimgSrc(imgSrc);
setModel(true);
    }
    return ( 
        <>
        <div className={model ? "model open" : "model"}>
            <img src={tempimgSrc} />
            <CloseIcon onClick={()=> setModel(false)}/>
        </div>
  <div className='gallery'>
    {
        
        data.map((item,index)=> {
            return(
                <div className='pics' key={index} onClick={()=> getImg(item.imgSrc )}>
                    <img src={item.imgSrc} style={{width:'100%'}}></img>
                </div>
            )
        })
    }

  </div>
  </>  )
  };
  
  export default Pictures
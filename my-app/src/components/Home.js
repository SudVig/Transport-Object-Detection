import { useState } from 'react'
import React from 'react'
import Upload from './widgets/Upload'
import './Home.css'
import Imgcont from './widgets/Imgcont'

const Home = () => {
  const [Image,setImage]=useState('');
  const [OutputImage,setOutputImage]=useState('');
  const [isprocessed,setprocessed]=useState(false)


  
  return (
    
    <div className='main'>
<center><div className="upload">
         {isprocessed?<Imgcont setprocessed={setprocessed} Image={Image} OutputImage={OutputImage} />:<Upload setImage={setImage} setOutputImage={setOutputImage} Image={Image} OutputImage={OutputImage} setprocessed={setprocessed}/> } 
            
        </div></center>
        

<div className="img"></div>


      
    </div>
  )
}

export default Home

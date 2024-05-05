import React from 'react'
import './Imgcont.css'
import { IoMdArrowRoundBack } from "react-icons/io";


const Imgcont = ({Image,OutputImage,setprocessed}) => {

  const imageUrl = URL.createObjectURL(Image);
 

function goback()

{

    console.log(Image)
    setprocessed(false);
}
  return (
    <div className='outerimgbox'>
      <div className="back"><button onClick={goback} ><IoMdArrowRoundBack  size='20px' /></button></div>

<div className='imgbox'>
        
<div className="imgwraper">
    <p>Original Image</p>
    <img src={imageUrl} alt="" /></div>
        
    <div className="imgwraper">
    <p>Processed Image</p>

    <img src={OutputImage} alt="" /></div>  
    </div>
    </div>
   
  )
}

export default Imgcont

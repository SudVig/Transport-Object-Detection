import React, { useState } from 'react'
import axios from 'axios'
import './Upload.css'


const Upload = ({setImage,setOutputImage,Image,OutputImage,setprocessed}) => {

  
 

function handleImage(e)
{

  setImage(e.target.files[0]);


}

function handleApi()
{
  const formdata=new FormData()
  formdata.append('image',Image)
  axios.post('http://localhost:5000/process_image',formdata,{
    headers: {
      'Content-Type': 'multipart/form-data',
      
    },
    responseType: 'blob'
  }).then((response)=>{
 // Create a temporary URL for the image blob
 const blob = response.data;
 const imageUrl = URL.createObjectURL(blob);
 setOutputImage(imageUrl);
 setprocessed(true);


    // setImage(res.data)
  })
}

  return (
    <div className='outerbox'>

      <div className='uploadbox'>
      <input type="file" name="" id="" onChange={handleImage} />
      <br />
      <button  className="submit"onClick={handleApi}>submit</button>
      </div>
    </div>
  )
}

export default Upload

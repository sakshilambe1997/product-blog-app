import React from 'react'
import { useParams } from 'react-router-dom'
import {blogs} from "./../../data"
import "./BlogView.css"

function BlogView() {

  const {id} = useParams();
  const selectedData = blogs.find((blogObject)=>blogObject.id===id);
  return (
    <>
    <div className='blogview-container'>
      <img src={selectedData.image} className='blogview-image'/>
  
      <h1 className='blogview-title'>{selectedData.title}</h1>

      <p className='blogview-des'>{selectedData.description}</p>

      <p className='blogview-price'>{selectedData.price}</p>

      <button className='buy-now-btn'>Buy Now</button>
      </div>
    </>
  )
}

export default BlogView
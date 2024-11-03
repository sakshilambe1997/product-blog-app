import React from 'react'
import "./Home.css"
import { blogs } from '../../data'
import BlogCard from '../../components/BlogCard/BlogCard'
function Home() {
  return (
    <div>
      <h1 className='heading'>Electronics blogs</h1>
      <div className='cards-container'>
        {
          blogs.map((blogObject,i)=>{
            const { id ,
              title,
              image,
              description,
              ratings,
              Price}=blogObject
            return<BlogCard
            id={id}
            key={i}
            title={title}
            image={image}
            description={description}
            ratings={ratings}
            Price={Price}

            />
          })
        }
      </div>
      
    </div>
  )
}

export default Home
import React from 'react'
import "./BlogCard.css"
import { Link } from 'react-router-dom'

function BlogCard(
    {
        id,
        title,
        image,
        price,
        description
       
    }
) {

  return (
    <div className='card-div'>
        <img src={image} className='card-image'/>
        <p className='card-title'>{title}</p>
        <p className='card-description'>{description}</p>
        <p className='card-price'>{price}</p>
        <Link to={`/blog/${id}`} className='konw-more-btn'>know more</Link>
    </div>
  )
}

export default BlogCard
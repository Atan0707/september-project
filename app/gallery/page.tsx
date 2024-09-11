import Link from 'next/link'
import React from 'react'

const Gallery = () => {
  return (
    <div>
        Gallery
        <h2>
            <Link href='/gallery/add-picture' className='hover:underline'>Add picture</Link>
        </h2>
        
    </div>
    
  )
}

export default Gallery
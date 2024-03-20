import React from 'react'

function NotFoundContact() {
  return (
    <div className='flex items-center gap-2 justify-center my-6 shadow-sm shadow-white p-5'>
        <img src='/contactLogo.png'/>
        <h3 className='text-white text-2xl font-semibold'>Contact Not Found</h3>
    </div>
  )
}

export default NotFoundContact
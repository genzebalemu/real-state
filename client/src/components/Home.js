import React from 'react'
import Navbar from './Navbar'
import ImageSlider from './Imageslider'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='mx-1 '>
      <div className='max-w-3xl ps-48 pt-6 space-y-2'>
        <h1 className='text-3xl font-bold text-slate-600'>Build your next idea even fasterexample </h1>
        <p className="truncate w-48">In this example, w-48 sets the maximum width of the container to 12rem (48 * 0.25rem). You can adjust the w-48 class according to your desired width. The truncate class in Tailwind will automatically apply the necessary styles to truncate the text with an ellipsis (...) if it overflows.</p>
         <p><Link to={"/detail"} className='text-blue-400 underline '>showmore</Link></p>
      </div>

      <ImageSlider  />
    </div>
  )
}

export default Home;

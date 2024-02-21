import React, { useState } from 'react';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
import ProfilePhoto from './ProfilePhoto';

const Navbar = () => {
  const [navbarImage, setNavbarImage] = useState('/images/genz.jpg');

  const updateNavbarImage = (newImage) => {
    setNavbarImage(newImage);
  };

  return (
    <div className='bg-gray-400 flex flex-col sm:flex-row  shadow-xl items-center justify-between py-4 sm:py-8 px-4 sm:px-8'>
      <div className='flex items-center'>
        <h1 className='text-3xl text-blue-700 font-bold'>EthioBet</h1>
      </div>

      <div className='mt-4 sm:mt-0'>
        <Searchbar />
      </div>

      <div className='flex mt-4 sm:mt-0'>
        <Link to='/' className='font-bold text-lg mr-4 sm:mr-8'>
          Home
        </Link>
        <Link to='/about' className='font-bold text-lg mr-4 sm:mr-8'>
          About
        </Link>
        <ProfilePhoto imageUrl={navbarImage} profileLink='/profile' updateNavbarImage={updateNavbarImage} className='sm:shrink-0' />
      </div>
    </div>
  );
};

export default Navbar;

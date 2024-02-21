import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePhoto = ({ imageUrl, profileLink, updateNavbarImage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(profileLink);
    updateNavbarImage(imageUrl);
  };

  return (
    <div onClick={handleClick} >
      <img src={imageUrl} alt="Profile" className='w-8 h-8 rounded-full ' />
    </div>
  );
};

export default ProfilePhoto;

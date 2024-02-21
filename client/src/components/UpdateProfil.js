import React, { useState } from 'react';

const UpdateProfil = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    // Handle selected image file
    const imageFile = e.target.files[0];
    setProfileImage(imageFile);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // TODO: Implement logic to update the user profile with formData and profileImage
  
    console.log('Selected profile image:', profileImage);
  };

  return (
    <div className='h-full w-screen bg-gray-100'>
      <div className='flex flex-col space-y-4 shadow-lg max-w-lg mt-8'>
        <h1 className='text-lg font-bold'>Profile</h1>
        {/* Display user profile image */}
        {profileImage ? (
          <img
            src={URL.createObjectURL(profileImage)}
            alt=''
            className='h-8 w-8 rounded-full'
          />
        ) : (
          <img src="/images/genz.jpg" alt='' className='h-8 w-8 rounded-full' />
        )}
        {/* Input for updating profile photo */}
        <input
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          className='border rounded-md'
        />
        <form className='space-y-4'>
          {/* Input fields for updating profile information */}
          <input
            name='name'
            type='text'
            value={formData.name}
            onChange={handleChange}
            className='border rounded-md h-6'
          />
          <input
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            className='border rounded-md h-6'
          />
          <input
            name='password'
            type='password'
            value={formData.password}
            onChange={handleChange}
            className='border rounded-md h-6'
          />
          {/* Button to update profile information */}
          <button className='bg-gray-700 rounded-md h-6' onClick={handleUpdate}>
            UPDATE
          </button>
          <button className='bg-green-700 rounded-md h-6'>CREATE LIST</button>
        </form>
        <div className='flex space-justify'>
          <p className='text-red'>Delete Account</p>
          <p className='text-red'>Sign Out</p>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfil;


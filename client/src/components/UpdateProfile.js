import React, { useRef, useState } from 'react';
import { storage } from '../firebase';
import { v4 } from 'uuid';
import { UpdateSuccess, UpdateStart, UpdateFailure } from '../redux/Slice/UserSlice';
// Remove the incorrect import: import { Ref } from 'react';

const UpdateProfile = () => {
  const fileRef = useRef(storage);
  const [imageUpload, setImageUpload] = useState(null);

  const UploadImage = () => {
    fileRef.current.click();
    // const imageUploadRef = ref(storage,`/images/${imageUpload}`+v4())
    // uploadBytes(imageUploadRef,imageUpload).then(()=>{

    // })
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    setImageUpload(() => e.target.files[0]);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <div className='h-full w-screen bg-gray-100'>
      <div className='flex flex-col space-y-4  max-w-lg  mx-auto p-8'>
        <h1 className='text-lg font-bold self-center'>Profile</h1>
        <input
          type='file'
          hidden
          ref={fileRef}
          accept='image/*'
          onChange={handleImageUpload}
          className='border rounded-md '
        />
        <img
          src='/images/genz.jpg'
          alt=''
          onClick={UploadImage}
          className='h-24 w-24 rounded-full self-center mb-8 '
        />

        <form className='flex flex-col space-y-4 '>
          {/* Input fields for updating profile information */}
          <input
            name='name'
            type='text'
            value={formData.name}
            onChange={handleChange}
            placeholder='name'
            className='border rounded-md p-2'
          />
          <input
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='email'
            className='border rounded-md p-2'
          />

          <input
            name='password'
            type='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='password'
            className='border rounded-md p-2'
          />

          {/* Button to update profile information */}
          <button className='bg-gray-700 rounded-md p-3 text-white font-semibold' onClick={handleUpdate}>
            UPDATE
          </button>
          <button className='bg-green-700 rounded-md p-3 text-white font-semibold'>CREATE LIST</button>
        </form>
        <div className='flex justify-between '>
          <p className='text-red-400'>Delete Account</p>
          <p className='text-red-400'>Sign Out</p>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

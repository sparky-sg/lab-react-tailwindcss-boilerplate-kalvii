import React from 'react';
import './index.css';
const Bookstore = () => {
  return (
    <div>
      <div className='justify-between p-5 border-t-3 bg-red-500 flex border--500'>
        <div className='flex'>
          <h2 className='text-white pr-4'>Kalvium</h2>
          <h3 className='text-white-500 pr-2'>About us</h3>
          <h3 className='text-white-500 pr-2'>Contacts</h3>
          <h3 className='text-white-500 pr-2'>Courses</h3>
        </div>
        <div>
          <button className='border border-white-500 rounded pl-3 pr-3 pb-2 pt-2 text-white text-xs'>Login</button>
        </div>
      </div>
      <button className='bg-red-500 m-5 p-3 rounded text-white'>Browse here</button>
      <div className='bg-red-200 border border-red-500 m-5 p-3 text-red-500'>
        <span className='font-bold font-mono'>Alert!</span> This is Awesome!
      </div>
      <div className='flex m-5 justify-center items-center border-2 border-500 pr-2 pt-2
      pb-2 pl-2'>
        <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" />
        <div className='ml-2'>
          <h2 className='font-bold'>Kalvium Store</h2>
          <p>You have a new course suggestion</p>
        </div>
      </div>
      <div className='bg-gray-300 text-center p-3 pt-3'>
        &copy; 2021 Copyright: Kalvium
      </div>
    </div>
  );
};

export default Bookstore;


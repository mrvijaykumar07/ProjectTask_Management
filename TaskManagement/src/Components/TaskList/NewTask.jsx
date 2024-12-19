import React from 'react';

const NewTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>20 Feb 2024</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>Make a YouTube video</h2>
      <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <div className='mt-4'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;

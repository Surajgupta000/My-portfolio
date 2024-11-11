import React from 'react';

export default function Tsection({ title = 'Default Title' }) {
  return (
    <div className='flex gap-10 items-center py-10'>
      <h1 className='text-3xl text-seconadry'>{title}</h1>
      <div className='w-60 h-[1px] bg-tertiary'>

      </div>
    </div>
  );
}
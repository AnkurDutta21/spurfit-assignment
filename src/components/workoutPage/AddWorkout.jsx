import React from 'react';
import question from '../../assets/Group.png';

const AddWorkout = ({initialBlocks}) => {

  return (
    <div className="w-full shadow-md p-8 rounded-xl">
      <div className="flex items-end max-w-max">
        <h3 className='text-lg'>Click or drag the blocks to build workout</h3>
        <figure className="ml-2">
          <img src={question} alt="question icon" />
        </figure>
      </div>
      <hr className="w-11/12 mx-auto mt-4" />
      <div className="grid grid-cols-3 gap-5 mt-5 max-w-max">
        {initialBlocks?.map((item, index) => (
          <figure key={index} className="max-w-fit">
            <img src={item?.image} alt={item?.type} className="h-full w-full object-contain" />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default AddWorkout;

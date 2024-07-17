import React from 'react';
import hamburgerIcon from '../../assets/Tap Area.png';
import movIcon from '../../assets/movIcon.png';

const Steps = ({ blocks }) => {
  return (
    <div className='bg-white shadow-lg rounded-2xl mt-4 p-8'>
      <div className="flex items-center justify-end">
        <figure>
          <img src={hamburgerIcon} alt="hamburger" />
        </figure>
      </div>
      <hr className=' bg-gray-300 my-6' />
      {blocks.map((item, index) => (
        <React.Fragment key={item.id}>
          {item.subSteps?.length > 0 ? (
            item.subSteps.map((subStep, subIndex) => (
              <div className='relative' key={`${item.id}-${subIndex}`}>
                <div className=" flex items-center justify-between p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl">
                  <div className=" flex items-center gap-8">
                    <figure>
                      <img src={movIcon} alt="move"/>
                    </figure>
                    <figure>
                      <img src={item.image} alt="picture" className="w-12" />
                    </figure>
                    <h1 className="text-xl font-bold">{item.type}</h1>
                  </div>
                  <div className=" flex items-center gap-8">
                    <input type="text" value={subStep} readOnly className="w-16 border border-gray-300 px-2 rounded-md" />
                    <figure className='weran w-8 bg-white rounded-md'>
                    <img src={hamburgerIcon} alt="hamburger" />
                    </figure>
                  </div>
                </div>
                <hr className=' bg-gray-300 my-10' />
                <button className='addbtn'>
                  <span>Add substep</span>
                </button>
              </div>
            ))
          ) : (
            <div className='relative'>
              <div className=" flex items-center justify-between p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl">
                <div className=" flex items-center gap-8">
                  <figure>
                    <img src={movIcon} alt="move"/>
                  </figure>
                  <figure>
                    <img src={item.image} alt="picture" className="w-12"/>
                  </figure>
                  <h1 className="text-xl font-bold">{item.type}</h1>
                </div>
                <div className=" flex items-center gap-8">
                  <input type="number" value={item.distance} readOnly className="w-16 border border-gray-300 px-2 rounded-md" />
                  <figure className=' w-8 bg-white rounded-md'>
                  <img src={hamburgerIcon} alt="hamburger" />
                  </figure>
                </div>
              </div>
              <hr className='bg-gray-300 my-10' />
              <button className='addbtn'>
                <span>Add substep</span>
              </button>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Steps;

import React from 'react';
import hamburgerIcon from '../../assets/Tap Area.png';
import movIcon from '../../assets/movIcon.png';

const Steps = ({ blocks }) => {
  return (
    <div className='main'>
      <div className="top flex items-center justify-end">
        <figure>
          <img src={hamburgerIcon} alt="hamburger" />
        </figure>
      </div>
      <hr className='hr1' />
      {blocks.map((item, index) => (
        <React.Fragment key={item.id}>
          {item.subSteps?.length > 0 ? (
            item.subSteps.map((subStep, subIndex) => (
              <div className='relative' key={`${item.id}-${subIndex}`}>
                <div className="inner flex items-center justify-between p-4 bg-gradient-to-r from-indigo-100 to-purple-100">
                  <div className="inner-right flex items-center gap-8">
                    <figure>
                      <img src={movIcon} alt="move" className="w-12" />
                    </figure>
                    <figure>
                      <img src={item.image} alt="picture" className="w-12" />
                    </figure>
                    <h1>{item.type}</h1>
                  </div>
                  <div className="inner-left flex items-center gap-8">
                    <input type="text" value={subStep} readOnly className="w-16 border border-gray-300 px-2 rounded-md" />
                    <figure className='weran w-8 bg-white rounded-md'></figure>
                  </div>
                </div>
                <hr className='hr2' />
                <button className='addbtn'><span>Add substep</span></button>
              </div>
            ))
          ) : (
            <div className='relative'>
              <div className="inner flex items-center justify-between p-4 bg-gradient-to-r from-indigo-100 to-purple-100">
                <div className="inner-right flex items-center gap-8">
                  <figure>
                    <img src={movIcon} alt="move" className="w-12" />
                  </figure>
                  <figure>
                    <img src={item.image} alt="picture" className="w-12" />
                  </figure>
                  <h1>{item.type}</h1>
                </div>
                <div className="inner-left flex items-center gap-8">
                  <input type="number" value={item.distance} readOnly className="w-16 border border-gray-300 px-2 rounded-md" />
                  <figure className='weran w-8 bg-white rounded-md'></figure>
                </div>
              </div>
              <hr className='hr2' />
              <button className='addbtn'><span>Add substep</span></button>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Steps;

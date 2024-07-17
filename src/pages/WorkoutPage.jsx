import React, { useState } from 'react';
import Graph from '../components/workoutPage/Graph';
import AddWorkout from '../components/workoutPage/AddWorkout';
import Topbar from '../components/common/Topbar';
import Steps from '../components/workoutPage/Steps';
import block0 from '../assets/Block.png';
import block1 from '../assets/Block (1).png';
import block2 from '../assets/Block (2).png';
import block3 from '../assets/Block (3).png';
import block4 from '../assets/Block (4).png';
import block5 from '../assets/Block (5).png';

const WorkoutPage = () => {
  const [blocks, setBlocks] = useState([
    { id: '4', type: 'Repeat Steps', distance: 4, subSteps: ['2KM', '2KM'], image: block3 },
    {
      id: '6',
      type: 'Ramp Down',
      distance: 4,
      subSteps: ['1 KM', '1 KM', '1 KM', '1 KM'],
      image: block5,
    }, 
    { id: '1', type: 'Warm Up', distance: 3, image: block0 },
  ]);
  const initialBlocks = [
    { id: '1', type: 'Warm Up', distance: 3, image: block0 },
    { id: '2', type: 'Active', distance: 3, image: block1 },
    { id: '3', type: 'Cool Down', distance: 3, image: block2 },
    { id: '4', type: 'Repeat Steps', distance: 4, subSteps: ['2KM', '2KM'], image: block3 },
    { id: '5', type: 'Ramp Up', distance: 5, subSteps: ['2 KM', '1 KM', '1 KM', '1 KM'], image: block4 },
    { id: '6', type: 'Ramp Down', distance: 4, subSteps: ['1 KM', '1 KM', '1 KM', '1 KM'], image: block5 },
  ];

  const handleBtnClick = () => {
    console.log('do Something');
  };

  return (
    <>
      <Topbar name="Run Workout" handleBtnClick={handleBtnClick} />
      <div className="cont w-90 grid grid-cols-3 gap-16 mx-auto">
        <AddWorkout initialBlocks={initialBlocks} className="col-span-1" />
        <div className="new col-span-2">
          <Graph blocks={blocks} />
          <Steps blocks={blocks}/>
        </div>
      </div>
    </>
  );
};

export default WorkoutPage;

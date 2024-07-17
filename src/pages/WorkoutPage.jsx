import React, { useState } from 'react'
import Graph from '../components/workoutPage/Graph'
import AddWorkout from '../components/workoutPage/AddWorkout'
import Topbar from '../components/common/Topbar'
import Steps from '../components/workoutPage/Steps'
import block0 from '../assets/Block.png';
import block1 from '../assets/Block (1).png';
import block2 from '../assets/Block (2).png';
import block3 from '../assets/Block (3).png';
import block4 from '../assets/Block (4).png';
import block5 from '../assets/Block (5).png';

const WorkoutPage = () => {
  const [blocks,setBlocks] = useState([{ id: '5', type: 'Ramp Up', distance: 5, subSteps: ['2 KM', '1 KM', '1 KM', '1 KM'], image: block4 },])
  const initialBlocks = [
    { id: '1', type: 'Warm Up', distance: 3, image: block0 },
    { id: '2', type: 'Active', distance: 3, image: block1 },
    { id: '3', type: 'Cool Down', distance: 3, image: block2 },
    { id: '4', type: 'Repeat Steps', distance: 4, subSteps: ['Hard', 'Easy'], image: block3 },
    { id: '5', type: 'Ramp Up', distance: 5, subSteps: ['2 KM', '1 KM', '1 KM', '1 KM'], image: block4 },
    { id: '6', type: 'Ramp Down', distance: 4, subSteps: ['1 KM', '1 KM', '1 KM', '1 KM'], image: block5 },
  ];
  return (
    <>
      <Topbar />
      <div className='w-11/12 mx-auto mt-3'>
      <AddWorkout initialBlocks={initialBlocks}/>
      <Graph blocks={blocks}/>
      <Steps />
      </div>
    </>
  )
}

export default WorkoutPage

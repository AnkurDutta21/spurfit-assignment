import React, { useState } from 'react';
import Graph from '../components/workoutPage/Graph';
import AddWorkout from '../components/workoutPage/AddWorkout';
import Topbar from '../components/common/Topbar';
import Steps from '../components/workoutPage/Steps';
import warmUp from '../assets/warmUp.png';
import active from '../assets/active.png';
import cooldown from '../assets/cooldown.png';
import repeatSteps from '../assets/repeatSteps.png';
import rampUp from '../assets/rampUp.png';
import rampDown from '../assets/rampDown.png';
import { DragDropContext } from 'react-beautiful-dnd';

const WorkoutPage = () => {
  const [blocks, setBlocks] = useState([]);

  const initialBlocks = [
    { id: '1', type: 'Warm Up', distance: 3, image: warmUp },
    { id: '2', type: 'Active', distance: 3, image: active },
    { id: '3', type: 'Cool Down', distance: 3, image: cooldown },
    { id: '4', type: 'Repeat Steps', distance: 4, subSteps: ['2 KM', '2 KM'], image: repeatSteps },
    { id: '5', type: 'Ramp Up', distance: 5, subSteps: ['2 KM', '1 KM', '1 KM', '1 KM'], image: rampUp },
    { id: '6', type: 'Ramp Down', distance: 4, subSteps: ['1 KM', '1 KM', '1 KM', '1 KM'], image: rampDown },
  ];

  const handleBtnClick = () => {
    console.log('do Something');
  };

  const handleResetBlocks = () => {
    setBlocks([]);
  };
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    
    let updatedBlocks = [...blocks];
    
    if (source.droppableId !== destination.droppableId) {
      const newBlock = initialBlocks[source.index]; // Ensure source.index exists
      updatedBlocks.splice(destination.index, 0, newBlock);
    } else if(destination.droppableId === 'graph') {
      const [movedBlock] = updatedBlocks.splice(source.index, 1);
      updatedBlocks.splice(destination.index, 0, movedBlock);
    }
    
    setBlocks(updatedBlocks);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Topbar name="Run Workout" handleBtnClick={handleBtnClick} />
        <div className="w-11/12 grid grid-cols-4 gap-8 mx-auto">
          <AddWorkout initialBlocks={initialBlocks} setBlocks={setBlocks} className="col-span-1" />
          <div className="new col-span-3">
            <Graph blocks={blocks} handleResetBlocks={handleResetBlocks} />
            {blocks?.length > 0 && <Steps blocks={blocks} />}
          </div>
        </div>
      </DragDropContext>
    </>
  );
};

export default WorkoutPage;

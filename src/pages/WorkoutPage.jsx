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
import { DragDropContext } from 'react-beautiful-dnd';

const WorkoutPage = () => {
  const [blocks, setBlocks] = useState([]);

  const initialBlocks = [
    { id: '1', type: 'Warm Up', distance: 3, image: block0 },
    { id: '2', type: 'Active', distance: 3, image: block1 },
    { id: '3', type: 'Cool Down', distance: 3, image: block2 },
    { id: '4', type: 'Repeat Steps', distance: 4, subSteps: ['2 KM', '2 KM'], image: block3 },
    { id: '5', type: 'Ramp Up', distance: 5, subSteps: ['2 KM', '1 KM', '1 KM', '1 KM'], image: block4 },
    { id: '6', type: 'Ramp Down', distance: 4, subSteps: ['1 KM', '1 KM', '1 KM', '1 KM'], image: block5 },
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
      const newBlock = initialBlocks[source.index];
      updatedBlocks.splice(destination.index, 0, newBlock);
    } else {
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

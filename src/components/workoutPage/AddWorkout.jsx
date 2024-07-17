import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import question from '../../assets/Group.png';

const AddWorkout = ({ initialBlocks,setBlocks }) => {
  const addBlock = (block) => {
    setBlocks(prevBlocks => [...prevBlocks, block]);
  };
  return (
    <Droppable droppableId="droppable">
      {(provided) => (
        <div
          className="w-96 max-h-72 shadow-md p-8 rounded-xl bg-white mt-4"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className="flex items-end max-w-max">
            <h3 className='text-lg'>Click or drag the blocks to build workout</h3>
            <figure className="ml-2">
              <img src={question} alt="question icon" />
            </figure>
          </div>
          <hr className="w-11/12 mx-auto mt-4" />
          <div className="grid grid-cols-3 gap-5 mt-5 max-w-max max-h-max">
            {initialBlocks.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                {(provided) => (
                  <figure
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="max-w-fit max-h-fit"
                    onClick={()=>addBlock(item)}
                  >
                    <img src={item.image} alt={item.type} className="h-full w-full object-contain" />
                  </figure>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default AddWorkout;
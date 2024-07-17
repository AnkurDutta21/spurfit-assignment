import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Graph = ({ blocks, handleResetBlocks }) => {
  const totalDistance = blocks?.reduce((sum, block) => sum + block.distance, 0);

  const getHeight = (type, index, subStepCount) => {
    switch (type) {
      case 'Warm Up':
        return 30;
      case 'Cool Down':
        return 10;
      case 'Active':
        return 50;
      case 'Repeat Steps':
        return index === 0 ? 60 : 40;
      case 'Ramp Up':
        return (index + 1) * (100 / subStepCount);
      case 'Ramp Down':
        return (subStepCount - index) * (100 / subStepCount);
      default:
        return 50;
    }
  };

  return (
    <div className="w-full h-72 border border-gray-300 mt-4 p-6 rounded-xl shadow-md bg-white relative">
      <button
        className="border-gray-300 rounded-xl shadow-md p-1 absolute top-[-0.28px] right-2 text-sm font-semibold bg-white"
        onClick={handleResetBlocks}
      >
        Clear Blocks
      </button>
      <div className="relative w-full h-full">
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between p-2 text-right">
          <div>100%</div>
          <div>75%</div>
          <div>50%</div>
          <div>25%</div>
          <div>0%</div>
        </div>
        <Droppable droppableId="graph" direction="horizontal">
          {(provided) => (
            <div
              className="absolute left-16 right-0 top-0 bottom-0 flex"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {blocks.map((block, index) => {
                if (block.subSteps) {
                  const subStepCount = block.subSteps.length;
                  return block.subSteps.map((subStep, subIndex) => (
                    <Draggable key={`${block.id}-${subIndex}`} draggableId={block.id} index={index}>
                      {(provided) => (
                        <div
                          className="flex flex-col items-center justify-end mr-1"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{ flexBasis: `${(block.distance / totalDistance) * 100 / subStepCount}%` }}
                        >
                          <div
                            className="w-full bg-opacity-50 bg-indigo-600"
                            style={{ height: `${getHeight(block.type, subIndex, subStepCount)}%`, marginBottom: '4px' }}
                          />
                          <div className="text-center text-xs mt-1">{subStep}</div>
                        </div>
                      )}
                    </Draggable>
                  ));
                } else {
                  return (
                    <Draggable key={block.id} draggableId={block.id} index={index}>
                      {(provided) => (
                        <div
                          className="flex flex-col items-center justify-end mr-1"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{ flexBasis: `${(block.distance / totalDistance) * 100}%` }}
                        >
                          <div
                            className="w-full bg-opacity-50 bg-indigo-600"
                            style={{ height: `${getHeight(block.type)}%`, marginBottom: '4px' }}
                          />
                          <div className="text-center text-xs mt-1">{block.distance} KM</div>
                        </div>
                      )}
                    </Draggable>
                  );
                }
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default Graph;

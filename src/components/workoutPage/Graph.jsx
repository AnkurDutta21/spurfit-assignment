import React, { useState } from 'react';

const Graph = ({blocks}) => {

  // Calculate total distance to scale the X-axis
  const totalDistance = blocks.reduce((sum, block) => sum + block.distance, 0);

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
    <div className="w-full h-72 border border-gray-300 mt-4 p-6 rounded-xl shadow-md">
      <div className="relative w-full h-full">
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between p-2 text-right">
          <div>100%</div>
          <div>75%</div>
          <div>50%</div>
          <div>25%</div>
          <div>0%</div>
        </div>
        
        <div className="absolute left-16 right-0 top-0 bottom-0 flex">
          {blocks.map((block, index) => {
            if (block.subSteps) {
              const subStepCount = block.subSteps.length;
              return block.subSteps.map((subStep, subIndex) => (
                <div
                  key={`${block.id}-${subIndex}`}
                  className="flex flex-col items-center justify-end mr-1"
                  style={{ flexBasis: `${(block.distance / totalDistance) * 100 / subStepCount}%` }}
                >
                  <div
                    className="w-full bg-opacity-50 bg-indigo-600"
                    style={{ height: `${getHeight(block.type, subIndex, subStepCount)}%`, marginBottom: '4px' }}
                  />
                  <div className="text-center text-xs mt-1">{subStep}</div>
                </div>
              ));
            } else {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-end mr-1"
                  style={{ flexBasis: `${(block.distance / totalDistance) * 100}%` }}
                >
                  <div
                    className="w-full bg-opacity-50 bg-indigo-600"
                    style={{ height: `${getHeight(block.type)}%`, marginBottom: '4px' }}
                  />
                  <div className="text-center text-xs mt-1">{block.distance} KM</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Graph;

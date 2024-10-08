import React from 'react'
import back from "../../assets/Icons.png"
import edit from "../../assets/Vector.png"

const Topbar = ({name,handleBtnClick}) => {
  return (
    <div className='flex items-center justify-between p-4 shadow-md w-11/12 mx-auto rounded-b-2xl bg-white'>
      <div className='flex items-center gap-4 text-2xl'>
        <img src={back} alt="back-arrow" />
        <h2>{name}</h2>
        <img src={edit} alt="edit" />
      </div>
      <button onClick={handleBtnClick} className='rounded-full px-4 py-2 text-white text-base bg-gradient-to-r from-blue-600 to-purple-600'>
        Save Workout
      </button>
    </div>
  )
}

export default Topbar

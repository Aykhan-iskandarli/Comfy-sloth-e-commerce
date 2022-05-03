import React from 'react'
import loading from "../../assets/images/loading.jpg"

const Loading = () => {
  return (
    <div className='loading-cont'>
        <div className="loading-gif">
            <img src={loading} alt="" />
        </div>
    </div>
  )
}

export default Loading
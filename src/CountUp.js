import React from 'react'

const CountUp = ({addOne}) => {
  return (
    <div className="btns">
      <button className="btn1" onClick={addOne}>Count Up</button>
    </div>
  )
}

export default CountUp

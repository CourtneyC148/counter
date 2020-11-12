import React from 'react'

const CountDown = ({takeAwayOne}) => {
    return (
        <div className="btns">
            <button className="btn2" onClick={takeAwayOne}>Count Down</button>
        </div>
    )
}

export default CountDown

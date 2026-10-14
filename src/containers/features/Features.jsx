import React from 'react'
import './Features.css';

const Features = ({ title, text }) => {
  // there are two classes Features and Feature so dont get confused
  return (
    <div className='gpt3__features-container__feature'>
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Features
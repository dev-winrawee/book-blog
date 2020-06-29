import React from 'react'


const State = ({titleA,titleB,infoA,infoB, children}) => {
  return (
    <div className="state">
        <h4>{infoA}</h4>
        <h3>{infoB}</h3>
        <h1>{titleA}</h1>
        <h2>{titleB}</h2>
        {children}
    </div>
  )
}

export default State
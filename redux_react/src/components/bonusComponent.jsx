import React from 'react'
import './compo.css'

const BonusComponent = ({bonus , setBonus}) => {
    function incBonus() {
        setBonus(bonus + 1)
    }
  return (
    <div className='compoDiv'>
        <p>Bonus Component</p>
        <h3>Total points : {bonus}</h3>
        <button onClick={incBonus}>Increment</button>
    </div>
  )
}

export default BonusComponent
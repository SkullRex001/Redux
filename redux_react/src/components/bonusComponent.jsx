import React from 'react'
import './compo.css'
import { incrementBonus } from '../actions/actionName'

const BonusComponent = ({store}) => {
 
  return (
    <div className='compoDiv'>
        <p>Bonus Component</p>
        <h3>Total points : {store.getState().bonusReducer.bonus}</h3>
        <button onClick={()=>{
            return store.dispatch(incrementBonus())
        }}>Increment</button>
    </div>
  )
}

export default BonusComponent
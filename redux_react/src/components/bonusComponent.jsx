import React from 'react'
import './compo.css'
import { incrementBonus } from '../actions/actionName'
import { useDispatch, useSelector } from 'react-redux'

const BonusComponent = () => {
    const bonus = useSelector(state=> state.bonusReducer.bonus)
    const dispatch = useDispatch()
 
  return (
    <div className='compoDiv'>
        <p>Bonus Component</p>
        <h3>Total points : {bonus}</h3>
        <button onClick={()=>{
            return dispatch(incrementBonus())
        }}>Increment</button>
    </div>
  )
}

export default BonusComponent
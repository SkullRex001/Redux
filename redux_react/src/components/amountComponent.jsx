import React from 'react'
import './compo.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, getUserAccount } from '../actions/actionName'

const AmountComponent = ({ incBy, setInBy }) => {

    const amount = useSelector(state => state.accountReducer.amount)
    const dispatch = useDispatch()
    return (
        <div className='compoDiv'>
            <p>Account Component</p>
            <h3>Amount : ${amount}</h3>
            <div>
                <button onClick={() => {
                    return dispatch(increment())
                }}>Increment</button>
                <button onClick={() => {

                    return dispatch(decrement())

                }}>Decrement</button>
                <input type="number" onChange={(e) => {
                    setInBy(e.target.value)
                }} />
                <button onClick={() => {
                    return dispatch(incrementByAmount(incBy))

                }} >Increment By {incBy}</button>

                <button onClick={() => {
                    return dispatch(getUserAccount(1))

                }} >Get User Account</button>
            </div>
        </div>
    )
}

export default AmountComponent
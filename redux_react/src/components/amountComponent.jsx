import React from 'react'
import './compo.css'

const AmountComponent = ({amount , setAmount , incBy , setInBy}) => {
    function increment() {
        setAmount({amount : amount.amount + 1})
    }
    function decrement() {
        setAmount({amount : amount.amount - 1})
    }
    function  incByValue(value) {
        setAmount({amount : amount.amount + parseInt(value)})

    }
  return (
    <div className='compoDiv'>
        <p>Account Component</p>
        <h3>Amount : ${amount.amount}</h3>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <input type="number" onChange={(e)=>{ setInBy(e.target.value)

            }}/>
            <button onClick={()=>{
                incByValue(incBy)
            }} >Increment By {incBy}</button>
        </div>
    </div>
  )
}

export default AmountComponent
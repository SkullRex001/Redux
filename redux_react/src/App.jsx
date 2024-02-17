import { useState } from 'react'
import './App.css'
import AmountComponent from './components/amountComponent'
import BonusComponent from './components/bonusComponent'

function App() {
  const [amount , setAmount] = useState(0)
  const [bonus , setBonus ] = useState(0)
  const [incBy , setInBy] = useState(0)

  return (
    <>
    <p>App</p>
    <h3>Current Amount : {amount}</h3>
    <h3>Total Bonus : {bonus}</h3>
    <AmountComponent amount={amount} setAmount={setAmount} incBy={incBy} setInBy={setInBy}/>
    <BonusComponent bonus={bonus} setBonus={setBonus}/>
    </>
  )
}

export default App

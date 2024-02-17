import { useState } from 'react'
import './App.css'
import AmountComponent from './components/amountComponent'
import BonusComponent from './components/bonusComponent'

function App({store}) {
  const [amount , setAmount] = useState({amount : 0})
  const [bonus , setBonus ] = useState({bonus : 0})
  const [incBy , setInBy] = useState(0)

  return (
    <>
    <p>App</p>
    <h3>Current Amount : ${store.getState().accountReducer.amount}</h3>
    <h3>Total Bonus : {store.getState().bonusReducer.bonus}</h3>
    <AmountComponent amount={amount} setAmount={setAmount} incBy={incBy} setInBy={setInBy}/>
    <BonusComponent store = {store}/>
    </>
  )
}

export default App

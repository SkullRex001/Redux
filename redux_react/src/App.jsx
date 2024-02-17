import { useState } from 'react'
import './App.css'
import AmountComponent from './components/amountComponent'
import BonusComponent from './components/bonusComponent'
import { useSelector } from 'react-redux'



function App() {
  // const [amount , setAmount] = useState({amount : 0})
  // const [bonus , setBonus ] = useState({bonus : 0})
  const [incBy , setInBy] = useState(0)
  const amount = useSelector(state=>state.accountReducer.amount)
  const bonus = useSelector(state=>state.bonusReducer.bonus)
  const account = useSelector(state=>state.accountReducer)


  return (
    <>
    <p>App</p>
    {account.pending ? <p>loading...</p>:account.error? <h3>Something Went Wrong</h3>:<h3>Current Amount : ${amount}</h3>}
    <h3>Total Bonus : {bonus}</h3>
    <AmountComponent incBy={incBy} setInBy={setInBy}/>
    <BonusComponent/>
    </>
  )
}

export default App

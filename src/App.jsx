import { useState } from 'react'
import InputSection from './components/InputSection/InputSection'
import ButtonGridSection from './components/ButtonGridSection/ButtonGridSection'
import ResultsSection from './components/ResultsSection/ResultsSection'
import './App.css'

function App() {
  const [rate, setRate] = useState(15)
  const [bill, setBill] = useState(142.55)
  const [people, setPeople] = useState(5)


  const resetValues = () => {
    setRate(0)
    setBill(0)
    setPeople(0)
  }

  const changeValue = (value, stateSet) => {
    if (!isNaN(value)){
      stateSet(value)
    } else {
      stateSet(0)
    }
  }

  const changeRate = (value) => {
    if(!isNaN(value)){
      setRate(value)
    }
  }

  const getTip = (percentage,total) => {
    if (percentage>=0){
      return (total*percentage)/100
    }
  }
 
  const getPayPerPerson = (peopleNum, percentage, total) => {
    if (!isNaN(peopleNum) && !isNaN(percentage) && !isNaN(total)){
      if (peopleNum>0){
        return Math.floor((getTip(percentage,total) + total) / peopleNum * 100) / 100
      } else {
        return 0.00
      }
    }
    else {
      return 0.00
    } 
  }

  const getTipPerPerson = (peopleNum, percentage, total) => {
    if(!isNaN(peopleNum) && !isNaN(percentage) && !isNaN(total)){
      if (peopleNum>0){
        return Math.floor(getTip(percentage,total) / peopleNum * 100) / 100
      } else {
        return 0.00
      }
    }
    else {
      return 0.00
    }
  }
 
  return (
    <div className='mainContainer'>
      <img className='logo' src="/logo.svg" alt="Splitter_Logo" />
      <div className='calculator'>
        <div className='topContent'>
          <InputSection title='Bill' imageSrc='/icon-dollar.svg' value={bill} changeFn={changeValue} stateFn={setBill} />
          <ButtonGridSection rateValue={rate} changeStateFn={changeRate} />
          <InputSection title='Number of People' imageSrc='/icon-person.svg' value={people} changeFn={changeValue} stateFn={setPeople} />
        </div>
        <ResultsSection tipAmount={getTipPerPerson(people,rate,bill)} total={getPayPerPerson(people,rate,bill)} resetFn={resetValues} resetEnabled={(rate!=0)||(bill!=0)||(people!=0)} />
      </div>
    </div>
  )
}

export default App;
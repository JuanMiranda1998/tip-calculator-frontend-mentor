import './ResultsSection.css'

const resultsSection = ({tipAmount,total,resetFn,resetEnabled}) => {
  return (
    <section className='resultContainer'>
        <div className='itemGroup'>
        <div className='resultItem'>
            <h3 className='resultLabel'>Tip Amount <span>/ person</span></h3>
            <p className='resultValue'>${tipAmount}</p>
        </div>
        <div className='resultItem'>
            <h3 className='resultLabel'>Total <span>/ person</span></h3>
            <p className='resultValue'>${total}</p>
        </div>
        </div>
        <button className={`resetBtn ${resetEnabled?'resetEnabled':'resetDisabled'}`} onClick={resetFn}>Reset</button>
    </section>
  )
}

export default resultsSection
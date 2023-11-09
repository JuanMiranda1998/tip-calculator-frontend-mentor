import './ButtonGridSection.css';
import OptionBtn from '../OptionBtn/OptionBtn';

const buttonGridSection = ({ rateValue, changeStateFn }) => {
  return (
    <section>
        <h2 className='title'>Select Tip %</h2>
        <div className='buttonGroup'>
            <OptionBtn value='5' rateValue={rateValue} rateFn={changeStateFn} />
            <OptionBtn value='10' rateValue={rateValue} rateFn={changeStateFn} />
            <OptionBtn value='15' rateValue={rateValue} rateFn={changeStateFn} />
            <OptionBtn value='25' rateValue={rateValue} rateFn={changeStateFn} />
            <OptionBtn value='50' rateValue={rateValue} rateFn={changeStateFn} />
            <input className={ `numInput ${ rateValue == 0 ? 'error' : '' }` } placeholder='Custom' onChange={(e)=>changeStateFn(e.target.value)} value={rateValue} />
        </div>
    </section>
  )
}

export default buttonGridSection;
import './OptionBtn.css'

const optionBtn = ({value, rateValue, rateFn}) => ( 
    <button className={`numBtn ${rateValue==value?'active':''}`} onClick={()=>rateFn(value)}>{value}%</button>
)

export default optionBtn;


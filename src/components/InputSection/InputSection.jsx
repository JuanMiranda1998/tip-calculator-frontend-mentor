import './InputSection.css'

const inputSection = ({title,imageSrc,value,changeFn,stateFn}) => {
  return (
    <section>
        <div className='textContainer'>
          <h1 className='title'>{title}</h1>
          {value==0 ? (<p className='errorMessage'>Can&apos;t be zero</p>):null}
        </div>
        <div className="display">
            <img className='icon' src={imageSrc} />
            <input 
            className={`displayNum ${value==0 ? 'error' : ''}`} 
            onChange={(e) => {
                const inputValue = parseFloat(e.target.value)
                changeFn(inputValue,stateFn)
            }}
            value={!isNaN(value)?(value):(0)}
            />
        </div>
    </section>
  )
}

export default inputSection
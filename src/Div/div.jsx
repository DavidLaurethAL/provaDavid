import './div.css'
import logo from '../../img/icon-star.svg'

const Div = () => {
    return(
        <div className='container'>
            <form>
                <img className='img' src={logo} alt="" />
                <h1 className='letras'>How did we do?</h1>
                <p className='letras'>Please let us know how we did with your <br />suport request. All feedback is appreciated<br />to help us improve our offering!</p>
                <button className='botoes' id='botao1'>1</button>
                <button className='botoes'>2</button>
                <button className='botoes'>3</button>
                <button className='botoes'>4</button>
                <button className='botoes'>5</button>
                <button className='SUBMIT'>SUBMIT</button>
            </form>
        </div>
    )
}

export default Div
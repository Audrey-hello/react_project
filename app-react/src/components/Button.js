import './Button.scss';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--large', 'btn--medium']

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle :  STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return(
    <Link to='/home' className='bten-mobile'>
      <button className={'btn ${checkButtonStyle} ${checkButtonSize}'}>
        {children}
      </button>

    </Link>
  )
}

//============================
// COLOR BUTTONS
// Blue, Red, Green, Yellow, White
//============================

import './styles.css'

const Button = ({label, action, color = "blue"}) => {
    const handleClick = (e = null) => {
        e.preventDefault()
        action(e)
    }

    return (
        <button className={`btn btn-${color}`} onClick={handleClick}>{label}</button>
    )
}

export default Button
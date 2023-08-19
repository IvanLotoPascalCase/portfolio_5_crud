import React from 'react'
import { buttonStyles } from '../../styles/inputs'

const Button = ({ value, buttonType }) => {

    const styleToApply = buttonType == 'main' ? buttonStyles.main : buttonStyles.secondary;

    return (
        <div>
            <button className={styleToApply} type='button'>
                {value}
            </button>
        </div>
    )
}

export default Button


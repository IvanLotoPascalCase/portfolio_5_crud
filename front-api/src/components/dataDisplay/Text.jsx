import React from 'react'
import { textStyles } from '../../styles/dataDisplay'

const Text = ({ value, type, extra }) => {
    let textStyle = textStyles[type]
    textStyle = `${textStyle} ${extra}`

    return (
        <h3 className={textStyle}>
            {value}
        </h3>
    )
}

export default Text
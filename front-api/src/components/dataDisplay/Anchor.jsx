import React from 'react'
import { anchorStyle } from '../../styles/dataDisplay'

const Anchor = ({ value, url, newTab}) => {
    const target = newTab == false ? null : '__blank'
    return (
        <a className={anchorStyle.basic} target={target} href={url}>{value}</a>
    )
}

export default Anchor
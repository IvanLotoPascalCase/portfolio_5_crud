import React from 'react'
import { textStyles } from '../../styles/dataDisplay'

const MainTitle = ({value}) => {
  return (
    <p className={textStyles.sub}>
        {value}
    </p>
  )
}

export default MainTitle
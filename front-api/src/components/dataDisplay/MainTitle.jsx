import React from 'react'
import { textStyles } from '../../styles/dataDisplay'

const MainTitle = ({value}) => {
  return (
    <h3 className={textStyles.main}>
        {value}
    </h3>
  )
}

export default MainTitle
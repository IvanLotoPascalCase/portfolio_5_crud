import React from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { shareButtonStyles } from '../../styles/inputs'

const Share = ({ size }) => {
    const shareStyle = size == 'sm' ? shareButtonStyles.sm : size == 'md' ? shareButtonStyles.md : shareButtonStyles.l
    return (
        <button type='submit' className='rounded-full hover:bg-orange-300 transition-colors p-4'>
            <span className={shareStyle}>
                <AiOutlineShareAlt />
            </span>
        </button>
    )
}

export default Share
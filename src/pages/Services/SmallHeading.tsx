import React from 'react'

interface SmallHeadingProps {
    children: string
}

const SmallHeading = ({ children }: SmallHeadingProps) => {
    return (
        <p className='textext-lg font-bold'>
            {children}
        </p>
    )
}

export default SmallHeading

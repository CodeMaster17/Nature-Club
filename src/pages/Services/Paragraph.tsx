import React from "react"

interface ParagraphProps {
    children: React.ReactNode
}
const Paragraph = ({ children }: ParagraphProps) => {
    return (
        <p>
            {children}
        </p>
    )
}

export default Paragraph

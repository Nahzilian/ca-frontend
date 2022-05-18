import { useState, useEffect } from 'react'
import styles from '../../styles/components/Layouts.module.sass'

interface ContentWrapper {
    className?: string,
    children?: any,
}

const ContentWrapper = ({ className = '', children}: ContentWrapper) => {

    // For class styling, look into layout modules
    return (
        <div className={`${styles.content_wrapper} ${className}`}>
            {children}
        </div>
    )
}

export default ContentWrapper
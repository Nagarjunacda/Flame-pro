import React, { useEffect } from 'react'
import styles from '../../styles/toast.module.css'

const Toast = ({ toastMsg, showToast, setShowToast }) => {
    useEffect(() => {
        if (showToast) {
            const timeout = setTimeout(() => {
                setShowToast(false)
            }, 3000)

            return () => clearTimeout(timeout)
        }
    }, [showToast, setShowToast])

    return (
        <div
            className={styles.toastMain}
        >
            {toastMsg}
        </div>
    )
}

export default Toast
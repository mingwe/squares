import React from 'react'

export default function Alert(alert) {
    return (
        <div className={'alert alert-warning py-1 mb-1'} onClick={alert.hide}>
            {alert.text}
        </div>
    )
}
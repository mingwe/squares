import React from 'react'
import {useAlert} from './AlertContext'
import Alert from './Alert'

export default function AlertList() {
    const alerts = useAlert()
    const {removeAll} = useAlert()

    if (!Object.keys(alerts.squares).length) return null

    return (
        <div className={'w-100'}>

            <h2>Hover squares</h2>

            <button className="form-control my-3 btn-warning" onClick={() => removeAll()}>remove all alerts</button>

            {Object.keys(alerts.squares).map((square, i) => (
                <Alert key={i} text={`Row: ${alerts.squares.[square].row} Column: ${alerts.squares.[square].col}`} />
            ))}
            {/*{ alerts.squares.map((square, i) =>*/}
            {/*    <Alert key={i} text={`Row: ${square.row} Column: ${square.col}`} />*/}
            {/*)}*/}
        </div>
    )
}
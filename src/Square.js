import React, {useEffect, useState, useRef} from 'react'
import {useAlert} from './AlertContext'

export default function Square ({ row, col }) {

    const mounted = useRef()
    const {add, remove} = useAlert()
    const [state, setState] = useState({isHovered: false, bg: 'bg-white'})
    const squareID = row*100+col

    function hoveron() {
        setState(prev => {
            return {
                ...prev,
                isHovered: !prev.isHovered,
                // bg: 'bg-blue',
            }
        })
    }


    useEffect(() => {
        if (!mounted.current)
            // componentDidMount logic')
            mounted.current = true
        else
            // componentDidUpdate logic
            if (state.isHovered === true) {
                add(squareID, {row, col})
            }
            else {
                remove(squareID)
            }

        }, [state.isHovered]
    );

    return (
        <div className={'col px-0'}>
            <div
                onMouseOver={hoveron}
                className={`square-single bordered-1 ${state.isHovered ? 'bg-info' : 'bg-white'}`}
            >
            </div>
        </div>
    )
}
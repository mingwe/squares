import React, {useState, useEffect} from 'react'
import Square from './Square.js';

export default function SquaresList ( { getItems} ) {

    const [items, setItems] = useState([])

    useEffect(() => {
        const newItems = getItems()
        setItems(newItems)
    }, [getItems])

    return (
        <div className={'container pt-3'}>
            { items.map(i =>
                <div key={i} className="row square-row">
                    { items.map(n =>
                        <Square row={i} col={n} key={i*100+n}/>
                    )}
                </div>
            ) }
        </div>
    )
}
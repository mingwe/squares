import React, {useContext, useReducer} from 'react'

const AlertContext = React.createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

const ADD_ALERT = 'add'
const REMOVE_ALERT = 'remove'
const REMOVE_ALL = 'removeAll'

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_ALERT:
            let squareslist = {...state.squares};
            squareslist.[action.id] = action.squares
            return {
                ...state, squares: squareslist
            }
        case REMOVE_ALERT:
            let updatelist = {...state.squares};
            delete updatelist.[action.id]
            return {
                ...state, squares: updatelist
            }
        case REMOVE_ALL: return {...state, squares: []}
        default: return state
    }
}

export const AlertProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        squares: {},
    })

    const add = (id, squares) => dispatch({ type: ADD_ALERT, id, squares })
    const remove = (id) => dispatch({ type: REMOVE_ALERT, id })
    const removeAll = () => dispatch({ type: REMOVE_ALL })

    return (
        <AlertContext.Provider value={{
            squares: state.squares,
            add, remove, removeAll
        }}>
            { children }
        </AlertContext.Provider>
    )
}
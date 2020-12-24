import { createContext, useContext, useReducer } from 'react';

const GlobalContext = createContext();

const defaultState = {
    todos: []
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'setTodos':
            return {
                ...state,
                todos: action.payload
            };
        default: 
            return state;
    }
};

const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <GlobalContext.Provider value={{ a: "Hello", b: "World"}} {...props} />
    )
};

export default GlobalProvider;

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
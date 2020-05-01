import React, { useState, useEffect, createContext, useContext } from 'react';
import { fetchData, signal } from '../utils/data';

export const todosContext = createContext({
   todos: null,
});

export const useTodos = () => {

    const todos = useContext(todosContext);
    return  todos;

}

// hook du composant todosProvider
const useData = () => {
    const [todos, setTodos] = useState(null);
    const [load, setLoad] = useState(true);

    useEffect(() => {
            if(load){
                fetchData(process.env.REACT_APP_API_TODOS, { signal: signal.signal }).then(res => {
                    setTodos({...res}); 
                })
                setLoad(false)
            }
        return () => {
            // cleanup
            signal.abort();
        };
    }, [load]);

    return todos;
        
}


// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// Provider
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
export const TodoProvider = props => {
    const todos = useData()
    const { children } = props;
    return (
      <todosContext.Provider value={todos}>
        {children}
      </todosContext.Provider>
    );
} 

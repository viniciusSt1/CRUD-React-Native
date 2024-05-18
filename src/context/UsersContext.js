import React, { createContext, useReducer } from 'react';
import users from '../data/users';

const UsersContext = createContext({});
const initialState = { users }  //podemos ter mais atributos no estado

export const UsersProvider = (props) => {

    function reducer(state, action){
        if(action.type === 'deleteUser'){
            const user = action.payload
            return {
                ...state,   // caso tenhamos mais atributos dentro do objeto state (no caso temos uma lista de objetos users)
                users: state.users.filter(u => u.id !== user.id)    //retornando atributo modificado (sem o user removido)
            }
        }
        else if(action.type === 'createUser'){
            let user = action.payload
            user.id = Math.random()
            return {
                ...state,
                users: [...state.users, user]
            }
        }
        else if(action.type == 'updateUser'){
            const userUpdt = action.payload
            return {
                ...state,
                users: state.users.map(u => u.id === userUpdt.id ? userUpdt : u)
            }
        }

        return state
    }

    const [state, dispatch] = useReducer(reducer, initialState )

    return (
        <UsersContext.Provider value={ {state, dispatch} }>
            {props.children}
        </UsersContext.Provider>
    );
};

export default UsersContext;

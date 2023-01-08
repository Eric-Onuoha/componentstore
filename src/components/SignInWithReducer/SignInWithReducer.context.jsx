import { monitorAuthState } from "./SignInWithReducer.firebase.utils";
import { useReducer, createContext, useEffect } from "react";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const userActionTypes = {
    set_current_user: "set_current_user"
}

const signInReducer = (state, action) => {
    console.log("dispatched");
    console.log(action);
    const {type, payload} = action;

    switch(type){
        case userActionTypes.set_current_user :
            return{
                ...state,
                currentUser: payload
            };
        default:
            throw new Error(`Unhandled type ${type} in the UserReducer`);
    }
}

const initialState = {
    currentUser: null
}

export const SignInWReducerProvider = ({children}) => {
    const [state, dispatch] = useReducer(signInReducer, initialState);
    const {currentUser} = state;
    console.log(currentUser);

    const setCurrentUser = (userToSet) =>{
        dispatch({type: userActionTypes.set_current_user, payload: userToSet});
    };

    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsub = monitorAuthState((user) => {
            if(user != null){
            }
            // console.log(user);
        });
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
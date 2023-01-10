import { useContext, useReducer, createContext } from "react"

export const InventoryContext = createContext({
    item: "",
    addItem: () => null,
    totalItems: 0,
});

const initialState = {
    item: "",
    totalItems: 0
}

const inventoryTypes = {
    addItemToCart: "addItemToCart"
}

const inventoryReducer = (state, action) => {
    console.log("here");
    const {type, payload} = action;
    console.log(payload);

    switch(type){
        case inventoryTypes.addItemToCart: 
            return{
                ...state,
                item: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in inventory reducer`);
    }
}

export const InventoryProvider = ({children}) => {
    const [state, dispatch] = useReducer(inventoryReducer, initialState);
    const {item} = state;

    const addItem = (itemToAdd) => {
        dispatch({type:inventoryTypes.addItemToCart, payload:itemToAdd});
    }

    const value = {item, addItem};

    return(
        <InventoryContext.Provider value = {value} >{children}</InventoryContext.Provider>
    )
}
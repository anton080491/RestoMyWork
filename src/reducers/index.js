const initialState = {
    menu:[],
    loading: true,
    error: false,
    items: [],
    totalPrice: 0
}

 const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };

        case 'MENU_REQUESTED':
        return {
            ...state,
            loading: true
        };

        case 'MENU_ERROR':
            return {
                ...state,
                error: true
            };

        case 'ITEM_ADD_TO_CART':
            const id = action.payload;

            const itemIndex = state.items.findIndex(item=>item.id===id);
            if(itemIndex >= 0){
                const itemInState = state.items.find(item=>item.id===id);
                const newItem = {
                    ...itemInState,
                    qtty: ++itemInState.qtty
                }
    
                return{
                    ...state,
                    items:[
                        ...state.items.slice(0,itemIndex),
                    newItem,
                    ...state.items.slice(itemIndex+1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }
            }

            const item = state.menu.find((item)=>item.id===id)

            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                qtty:1
            }
            return{
                ...state,
                items:[...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            }

        case 'ITEM_REMOVE_FROM_CART':
            const idn = action.payload;

            const itemIdx = state.items.findIndex(item=> item.id ===idn);

            return{
                ...state,
                items:[
                    ...state.items.slice(0,itemIdx),
                    ...state.items.slice(itemIdx+1)
                ],
                totalPrice: state.totalPrice - (state.items[itemIdx].price * state.items[itemIdx].qtty)
            }
            default:
                return state;
    }
}

export default reducer;
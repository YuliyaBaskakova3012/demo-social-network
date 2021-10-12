const SEND_MESSAGE='SEND-MESSAGE';
let initialState={
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Hello'}
    ],
    dialogs: [
        {id: 1, name: 'Maxim'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Victor'}
    ]
}
const dialogsReducer=(state=initialState, action)=>{
    switch(action.type){
        
        case SEND_MESSAGE: 
        let body=action.newMessageBody;
        return{
            ...state,
            messages: [...state.messages, {id: 6, message: body}]
        }
        default: 
        return state;
    }
}
export const sendMessageCreator=(newMessageBody)=>({type: SEND_MESSAGE, newMessageBody});
export default dialogsReducer;
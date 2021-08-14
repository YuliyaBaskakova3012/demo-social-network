import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import AddMessageForm from "./AddMessageForm";

import DialogItem from "./DialogItem/DialogIem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
const Dialogs=(props)=>{   
    
    let state=props.dialogsPage;
    let dialogsElements=state.dialogs.map((d)=>{return(<DialogItem name={d.name} id={d.id} key={d.id}/>)})
    let messageElements=state.messages.map((m)=>{return(<Message message={m.message} key={m.id}/>)})   
    let newMessageBody=state.newMessageBody;   

   
    let addNewMessage=(values)=>{
        props.sendMessage(values.newMessageBody)
            }
    if (!props.isAuth) return <Redirect to={"/login"}/>
return(
    <div className={s.dialogs} >
<div className={s.dialogsItems}>
{dialogsElements}
</div>
<div className={s.messages}>
   <div>{messageElements} </div>
   <AddMessageForm onSubmit={addNewMessage}/>
</div>
    </div>
)
}
export default Dialogs;
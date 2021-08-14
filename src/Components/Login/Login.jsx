import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input, createField } from "../common/FormsControls/FormsControls";
import {login} from "../../redux/auth-reducer"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"
const Login=(props)=>{
    const onSubmit=(formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return <div> 
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        </div>
}
const LoginForm=({handleSubmit, error})=>{
    return <form onSubmit={handleSubmit}>
    {createField("Email", "email", [required], Input)}
    {createField("Password", "password", [required], Input, {type: "password"})}
    {createField(null, "input", [], Input, {type: "checkbox"})}
    
   {error&&<div className={style.formSummaryError}>
{error}
    </div>}
    <div>
    <button>Login</button>
    </div>
</form>
}
const LoginReduxForm=reduxForm({form: "login"})(LoginForm);
const mapStateToProps=(state)=>({
isAuth: state.auth.isAuth
})
export default connect (mapStateToProps, {login})(Login);
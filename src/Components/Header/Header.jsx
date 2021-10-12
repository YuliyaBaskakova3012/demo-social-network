import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
const Header =(props)=>{
return <header className={s.header}>
   <img src='https://cdn.pixabay.com/photo/2016/03/31/19/23/cat-1294968_960_720.png' alt='logo'/>
   <div className={s.loginBlock}>
    {props.isAuth? 
    <div>{props.login} - <button onClick={props.logout}>Log out</button></div>:<NavLink to={'/login'}>Login</NavLink>}
  </div>
  </header>
}
export default Header;
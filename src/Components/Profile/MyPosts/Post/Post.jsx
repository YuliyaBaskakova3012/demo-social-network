import React from 'react';
import user1 from './../../../../assets/images/user1.jpg';
import s from './Post.module.css';

const Post=(props)=>{

 return ( 
<div className={s.item}><img alt='user' src={user1}/>
{props.message}
<div><span>like: {props.like}</span></div>

</div>
 )
}
export default Post;
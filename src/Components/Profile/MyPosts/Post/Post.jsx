import React from 'react';

import s from "./Post.module.css";

const Post=(props)=>{

 return ( 
<div className={s.item}><img src="https://raduga.net.ru/wp-content/uploads/2020/08/litso-krupnym-planom.jpg"/>
{props.message}
<div><span>like: {props.like}</span></div>

</div>
 )
}
export default Post;
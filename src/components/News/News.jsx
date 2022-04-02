import React from 'react';
import s from './News.module.css';
import newsImage from './../../assets/images/newsImage.png';
const News=(props)=>{
return <img className={s.newsImage} src={newsImage} alt='newsImage'/>
}
export default News;

  
import React from 'react';
import preloader from '../../../assets/images/load.gif';
import style from './Preloader.module.css';
let Preloader=(props)=>{
    return <div>
<img alt='preloader' src={preloader} className={style.preloader}/>
    </div>
}
export default Preloader;
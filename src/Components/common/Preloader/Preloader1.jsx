import React from 'react';
import preloader from '../../../assets/images/load.gif';
import style from './Preloader1.module.css';
let Preloader1=(props)=>{
    return <div>
<img alt='preloader' src={preloader} className={style.preloader}/>
    </div>
}
export default Preloader1;
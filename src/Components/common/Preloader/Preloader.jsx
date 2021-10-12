import React from 'react';
import preloader from '../../../assets/images/load.gif';
let Preloader=(props)=>{
    return <div>
<img alt='preloader' src={preloader} style={{width: '100px', height: '100px'}}/>
    </div>
}
export default Preloader;
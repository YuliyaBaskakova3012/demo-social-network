import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import ProfileStatus from "./ProfileStatus";

import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo =(props)=>{
  if(!props.profile){
    return <Preloader/>
  }
 return (
  <div >
      <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ7CoqlHVkGqkv8cjCtNYY9pI99vjRVpugZg&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ7CoqlHVkGqkv8cjCtNYY9pI99vjRVpugZg&usqp=CAU"/></div>
    <div className="descriptionBlock">
    <img src={props.profile.photos.large} />
    
    </div>
   <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
    </div>
 )
}
export default ProfileInfo;
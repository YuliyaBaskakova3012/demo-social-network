import React from 'react';
import userPhoto from '../../assets/images/user.png';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';
const ProfileInfo =({profile, status, updateStatus, isOwner,  savePhoto, saveProfile})=>{
  let [editMode, setEditMode]=useState(false);
 if(!profile){
   return null;
 }
 const onMainPhotoSelected=(e)=>{
if(e.target.files.length){
  savePhoto(e.target.files[0])
}
 }
const onSubmit=(formData)=>{
saveProfile(formData).then(
  ()=>{
    setEditMode(false);
  }
)
}
 return (
   <div className={s.descriptionBlock}>
  <p><img alt='userPhoto' src={profile.photos.large||userPhoto} className={s.mainPhoto}/></p>
   <div> {isOwner&&<input type='file' onChange={onMainPhotoSelected}/>}
    {editMode?<ProfileDataForm className={s.profileData} initialValues={profile} profile={profile} onSubmit={onSubmit}/>:<ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}}/>}
   <ProfileStatusWithHooks status={status} updateStatus={updateStatus} /></div>
   </div>
    
 )
}
const ProfileData=({profile, isOwner, goToEditMode})=>{
 return <div>
  {isOwner&&<div><button onClick={goToEditMode}>edit</button></div>}
  <div>
  <b>Full name:</b> {profile.fullName}
   </div>
 <div>
  <b>Looking for a job:</b> {profile.lookingForAJob? 'yes': 'no'}
   </div>
   {profile.lookingForAJobDescription&&
   <div>
  <b>My professional skills:</b> {profile.lookingForAJobDescription}
   </div>
}
   <div>
   <b>About me:</b> {profile.aboutMe? 'yes': 'no'}
   </div>
   <div>
   <b>Contacts</b> {Object.keys(profile.contacts).map(key=>{
     return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
   })}
   </div>
   </div>
}
const Contact=({contactTitle, contactValue})=>{
return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
export default ProfileInfo;
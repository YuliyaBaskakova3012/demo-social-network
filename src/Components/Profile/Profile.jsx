import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';
const Profile =(props)=>{
return (
<div>
  <ProfileInfo  
  savePhoto={props.saveProfile}
  isOwner={props.isOwner} 
                savePhoto={props.savePhoto} 
                saveProfile={props.saveProfile} 
                profile={props.profile} 
                status={props.status}
                updateStatus={props.updateStatus}/>
  <MyPostsContainer/>  
 </div>
 )
}
export default Profile;
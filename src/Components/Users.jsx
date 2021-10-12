import React from 'react';
import Paginator from './common/Paginator';
import User from './User.jsx';
let Users=({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props})=>{
   return  <div>
   <Paginator currentPage={currentPage} onPageChanged={onPageChanged} 
    totalItemsCount={totalUsersCount} pageSize={pageSize}/>
    <div>
    {
     users.map(u=><User user={u}
        followingInProgress={props.followingInProgress}
        key={u.id}
        unfollow={props.unfollow}
        follow={props.follow}
        />
        )
    }
 </div>
 </div>
}
export default Users;
import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage,  unfollow, toggleFollowingProgress, requestUsers} from "../redux/users-reducer";
import Users from "./Users";
import Preloader from "./common/Preloader/Preloader";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import {getUsers, getPageSize,  getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress,  getUsersSuperSelector} from "./../redux/users-selecrors"
class UsersContainer extends React.Component{
    componentDidMount(){
      const{currentPage, pageSize}=this.props;
       this.props.getUsers(currentPage, pageSize);
    }
      onPageChanged=(pageNumber)=>{
        const {pageSize}=this.props;
        this.props.getUsers(pageNumber, pageSize);
      }
        render() { 
        return <> 
        {this.props.isFetching?<Preloader/>:null}
        <Users totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize} 
        currentPage={this.props.currentPage} 
        onPageChanged={this.onPageChanged} 
       followingInProgress={this.props.followingInProgress}
        users={this.props.users} 
        follow={this.props.follow} 
        unfollow={this.props.unfollow}/></>
        }
}


let mapStateToProps=(state)=>{
  return {
      users: getUsers(state),
      pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
     isFetching: getIsFetching(state),
     followingInProgress: getFollowingInProgress(state)
 }
}




export default compose(
  connect(mapStateToProps,
  {
 follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers
}),

)(UsersContainer);
import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage,  unfollow, toggleFollowingProgress, requestUsers} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import {getUsers, getPageSize,  getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/users-selecrors';
import { Redirect } from 'react-router-dom';
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
          if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return <> 
        {this.props.isFetching?<Preloader/>:null}
        <Users  totalUsersCount={this.props.totalUsersCount} 
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
      followingInProgress: getFollowingInProgress(state),
      isAuth: state.auth.isAuth
 }
}
export default compose(
connect(mapStateToProps,
  {
follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers
}),
)(UsersContainer);
import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from "./MyPosts.module.css";
import Post from './Post/Post';
const maxLength10=maxLengthCreator(10);
const MyPosts=React.memo(props=>{
  //shouldComponentUpdate(nextProps, nextState){
    //return nextProps!==this.props||nextState!==this.state;
  //}
    
      let postElements=props.posts.map((p)=> <Post message={p.message} like={p.likesCount}/>);
    
let onAddPost=(values) =>{
  props.addPost(values.newPostText)
  }; 
  let newPostElement=React.createRef();  
    
 return (
  <div className={s.postsBlock}>
    <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>
    {postElements}
      </div>
    </div>
 )
})
let AddNewPostForm=({input, meta, ...props})=>{
  return(
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea} name="newPostText" validate={[required, maxLength10]} placeholder="Post message"/>
          </div>
        <div>
          <button>Add post</button></div>
        </form>
  )
}
let AddNewPostFormRedux=reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)
export default MyPosts;
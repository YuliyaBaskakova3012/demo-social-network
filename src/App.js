import React from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Setting from './Components/Setting/Setting';
import UsersContainer from './Components/UsersContainer';
import HeaderContainer from './Components/Header/HeaderConteiner';
import LoginPage from './Components/Login/Login';
import { connect, Provider } from 'react-redux';
import { withRouter } from "react-router-dom";
import {initializeApp} from "./redux/app-reducer"
import Preloader from './Components/common/Preloader/Preloader';
import { compose } from 'redux';
import store from "./redux/redux-store";
import { withSuspense } from './hoc/withSuspense';
const DialogsContainer=React.lazy(()=>import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer=React.lazy(()=>import('./Components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp();
   }
  render(){
    if(!this.props.initialized){
    return <Preloader/>
    }
    else{
  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
     <Navbar/>
    <div className="app-wrapper-content"> 
    <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
    <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
    <Route path="/news" render={()=><News/>}/>
    <Route path="/music" render={()=><Music/>}/>
    <Route path="/setting" render={()=><Setting/>}/>
    <Route path="/users" render={()=><UsersContainer/>}/>
    <Route path="/login" render={()=><LoginPage/>}/>
    </div>
    </div>
  );
}
  }
}
const mapStateToProps=(state)=>({
  initialized: state.app.initialized
})
let AppContainer=compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App)
 const SamuraiJSApp=(props)=>{
   return  <BrowserRouter>
   <Provider store={store}>
    <AppContainer/>
    </Provider>
    </BrowserRouter>
 } 
export default  SamuraiJSApp;

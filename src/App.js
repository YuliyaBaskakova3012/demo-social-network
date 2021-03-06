import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
const DialogsContainer=React.lazy(()=>import('./components/Dialogs/DialogsContainer'));
const ProfileContainer=React.lazy(()=>import('./components/Profile/ProfileContainer'));

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
    <div className='app-wrapper-content'> 
    <Switch>
    <Route exact path='/' render={()=><Redirect to={'/profile'}/>}/>
    <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
    <Route path='/news' render={()=><News/>}/>
    <Route path='/music' render={()=><Music/>}/>
    <Route path='/setting' render={()=><Setting/>}/>
    <Route path='/users' render={()=><UsersContainer/>}/>
    <Route path='/login' render={()=><LoginPage/>}/>
    <Route path='*' render={()=><div>404 NOT FOUND</div>}/>
    </Switch>
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
   return  <HashRouter>
   <Provider store={store}>
   <AppContainer/>
   </Provider>
   </HashRouter>
 } 
export default  SamuraiJSApp;

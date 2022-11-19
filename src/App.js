import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import {selectCurrentUser} from './redux/user/user.selector';
class App extends React.Component {

  unsubscribeFronAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFronAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          })
          // this.setState({
          //   currentUser:{
          //     id:snapshot.id,
          //     ...snapshot.data()
          //   }
          // });
        });
      }
      else{
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount(){
    this.unsubscribeFronAuth();
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/checkout" component={CheckoutPage}/>
          <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />) }/>
        </Switch>
        {/* <HomePage/> */}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

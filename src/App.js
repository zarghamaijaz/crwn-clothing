import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentUser:null
    }
  }
  unsubscribeFronAuth = null;
  componentDidMount(){
    this.unsubscribeFronAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
    });
  }
  componentWillUnmount(){
    this.unsubscribeFronAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
        {/* <HomePage/> */}
      </div>
    );
  }
}

export default App;

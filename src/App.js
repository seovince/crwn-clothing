import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, firestore, createUserProfileDocument } from './firebase/firebase.utils';
import { doc, onSnapshot } from 'firebase/firestore'
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        createUserProfileDocument(userAuth)

        onSnapshot(doc(firestore, "users", userAuth.uid), (doc) => {
          setCurrentUser({
            currentUser: {
              id: doc.id,
              ...doc.data()
            }
          })
        })
      }
      else {
        setCurrentUser(userAuth)
      }
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop/*' element={<ShopPage />} />
          <Route exact path='/checkout' element={<CheckoutPage />} />
          <Route 
            exact 
            path='/signin' 
            element={
              <AuthRoute currentUser={currentUser}>
                <SignInAndSignUpPage />
              </AuthRoute>
            } />
        </Routes>
      </div>
    );
  }
}

const AuthRoute = ({ children, currentUser }) => {
  // If user is not logged in, render children (sign in page) else navigate to root page
  return currentUser ? <Navigate to="/" replace /> : children;
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
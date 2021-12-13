import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, firestore, createUserProfileDocument } from './firebase/firebase.utils';
import { doc, onSnapshot } from 'firebase/firestore' 

import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }

  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        createUserProfileDocument(userAuth)

        onSnapshot(doc(firestore, "users", userAuth.uid), (doc) => {
          this.setState({
            currentUser: {
              id: doc.id,
              ...doc.data()
            }
          })

          console.log(this.state)
        })
      }
      else {
        this.setState({ currentUser: userAuth })
      }
      
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
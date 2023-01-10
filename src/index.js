import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './components/signInWithEmailAndPassword/user.context';
import { PostToFirestoreProvider } from './components/postToFirestore/postToFirestore.contexts';
import { GetFromFirestoreProvider } from './components/getFromFirestore/getFromFirestore.contextx';
import { SignInWReducerProvider } from './components/SignInWithReducer/SignInWithReducer.context';
import { InventoryProvider } from './components/inventory/inventory.context';

import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <SignInWReducerProvider>
        <PostToFirestoreProvider>
          <GetFromFirestoreProvider>
            <InventoryProvider>
              <App />
            </InventoryProvider>
          </GetFromFirestoreProvider>
        </PostToFirestoreProvider>
      </SignInWReducerProvider>
    </UserProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

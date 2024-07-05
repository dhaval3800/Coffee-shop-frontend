import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css'
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </Provider>
    </PersistGate>
);
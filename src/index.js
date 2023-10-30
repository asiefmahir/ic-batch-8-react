import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StudentProvider from './contexts/Student';
import reportWebVitals from './reportWebVitals';
import App2 from './App2';
import {RouterProvider} from 'react-router-dom'

import {router} from './router/router'

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root.render);
root.render(
  <React.StrictMode>
    {/* <App2 /> */}
    {/* <StudentProvider>
      <App />
    </StudentProvider> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// setTimeout(() => {}, 5000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

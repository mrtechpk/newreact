import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ReactDOM.render(
//   <h3> first react programm</h3>,
//   document.getElementById("root")
// );
const myname = "Prashant";
const job= "Job";

root.render(
<div> My Name is : {myname} <br></br>
 I am looking for : {job} </div>,

  document.getElementById('root')


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

ReactDOM.render(
  <p>master bhay</p>,
  document.getElementById('root')
);



reportWebVitals();

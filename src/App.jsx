import React from 'react';
import Header from './Components/Header/Header';
import'./App.css'
import AllUser from './Components/AllUser/AllUser';

const App = () => {
  return (
    <div className='px-9'>

<Header></Header>
<div className='main-container my-5'>
  <div>

<AllUser></AllUser>
 


  </div>
  <div className='text-center'>
<h1>Lorem, ipsum dolor.</h1>
  </div>

</div>
    </div>
  );
};

export default App;
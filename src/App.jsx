import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import'./App.css'
import AllUser from './Components/AllUser/AllUser';

const App = () => {
const [readTime,setReadTime] = useState(0)

  const totalRead =(read)=>{

  
    const parseRead = parseInt(read)

   let readAllTime = parseRead + readTime
   setReadTime(readAllTime)


}
  return (
    <div className='px-9'>

<Header></Header>
<div className='main-container my-5'>
  <div>

<AllUser totalRead={totalRead}></AllUser>
 


  </div>
  <div className='text-center'>
<div className='side-details'>

<div className='border-blue-700 rounded'>
<h1>Spent time on read : {readTime} min</h1>

  </div>
  </div>
  </div>

</div>
    </div>
  );
};

export default App;
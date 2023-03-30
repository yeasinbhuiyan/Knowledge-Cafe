import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import './App.css'
import AllUser from './Components/AllUser/AllUser';
import DetailsCard from './Components/Details/DetailsCard';

const App = () => {
  const [readTime, setReadTime] = useState(0)

  const totalRead = (read) => {


    const parseRead = parseInt(read)

    let readAllTime = parseRead + readTime
    setReadTime(readAllTime)


  }

  const [allDetails, setDetails] = useState("")

  const [TotalBookmark, setTotalBookmark] = useState(0)

  const handleDetails = (cardDetails, bookmark) => {
    setDetails([...allDetails, cardDetails])

    console.log(bookmark)

    const allBookMark = bookmark + TotalBookmark
    setTotalBookmark(allBookMark)

  }
  return (
    <div className='px-9'>

      <Header></Header>
      <div className='main-container my-5'>
        <div>

          <AllUser handleDetails={handleDetails} totalRead={totalRead}></AllUser>



        </div>
        <div className='text-center'>
          <div className='side-details'>

            <div className='total-read'>

              <h1>Spent time on read : {readTime} min</h1>

            </div>

            <div>
              <h1>Bookmarked Blogs : {TotalBookmark}</h1>
            </div>

            <div className='card mt-3'>
              {
                allDetails && allDetails.map(detail => <DetailsCard detail={detail}></DetailsCard>)
              }


            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
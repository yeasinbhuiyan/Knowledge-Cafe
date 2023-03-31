import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import './App.css'
import AllUser from './Components/AllUser/AllUser';
import DetailsCard from './Components/Details/DetailsCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from './Question/Question';

const App = () => {
  const [readTime, setReadTime] = useState(0)

  const totalRead = (read) => {


    const parseRead = parseInt(read)

    let readAllTime = parseRead + readTime
    setReadTime(readAllTime)


  }

  const [allDetails, setDetails] = useState([])

  const [TotalBookmark, setTotalBookmark] = useState(0)



  const handleDetails = (cardDetails, bookmark) => {
    const alreadyAdded = allDetails && allDetails.find(detail => detail == cardDetails)
    if (alreadyAdded) {
      toast('Already Exists')
    }
    else {

      setDetails([...allDetails, cardDetails])


      const allBookMark = bookmark + TotalBookmark
      setTotalBookmark(allBookMark)
    }





  }
  return (
    <div className='px-9'>

      {/* header container  */}


      <Header></Header>
      <div className='main-container my-5'>



        {/* cards container */}

        <div>

          <AllUser handleDetails={handleDetails} totalRead={totalRead}></AllUser>



        </div>


        {/* side card container  */}

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

              <ToastContainer></ToastContainer>

            </div>
          </div>
        </div>

      </div>


     <Question></Question>
    </div>
  );
};

export default App;
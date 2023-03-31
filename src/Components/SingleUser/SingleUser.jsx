import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleUser = (props) => {
    const { title, picture, author, read, name, readDate,details,bookMark } = props.user
    const totalRead = props.totalRead
    const handleDetails =props.handleDetails

 
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl mb-4">
                <figure><img className='w-full h-96 rounded-xl' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='lg:flex justify-between items-center'>
                        <div className='lg:flex items-center'>
                        <div className='w-20'>
                                <img className='w-14 rounded-full' src={author} alt="" />
                            </div>
                            <div>
                                <h1 className='font-semibold'>{name}</h1>
                                <p>{readDate}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>{read} min read <label onClick={()=>handleDetails(details,bookMark)} className='cursor-pointer' htmlFor=""><FontAwesomeIcon icon={faBookBookmark} /></label></p>
                            </div>
                        </div>
                    </div>
                    <h2 className="card-title">{title}</h2>

                    <div className='opacity-75'>
                        <div className='inline-flex gap-2'>
                            <p>#beginners</p>
                            <p>#programming</p>
                        </div>
                    </div>
                    <div className='text-blue-900'>
                        <button onClick={() => totalRead(read)} className='underline'>Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;
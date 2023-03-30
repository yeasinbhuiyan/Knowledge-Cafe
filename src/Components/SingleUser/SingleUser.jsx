import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleUser = (props) => {
    const { title, picture, author, read, name, readDate } = props.user
    console.log(props.user)
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl mb-4">
                <figure><img className='w-full h-96 rounded-xl' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <div className='w-24'>
                                <img className='w-14 rounded-full' src={author} alt="" />
                            </div>
                            <div>
                                <h1 className='font-semibold'>{name}</h1>
                                <p>{readDate}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>{read} min read <FontAwesomeIcon icon={faBookBookmark} /></p>
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
                 <div className='text-blue-900 underline'>
                 <a href="">mark as read</a>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;
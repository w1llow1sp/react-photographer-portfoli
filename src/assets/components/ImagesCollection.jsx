import React from 'react';
import ImageCard from './ImageCard';

const ImagesCollection = () => {
    const imagesList = [...new Array(9)].map(
        (number, index) => `/images/photo-${index + 1}.jpg`
    );
    return (
        <>
            <ul className='images-collection-container'>
                {imagesList.map((imgUrl, index) => {
                    return (
                        <li
                            className={
                                index % 2 === 0 ? 'item short' : 'item tall'
                            }
                        >
                            <figure>
                               <ImageCard imgUrl={imgUrl}/> 
                            </figure>
                        </li>
                    );
                })}
            </ul>
            <div className='d-flex mb-2'>
                <a href='/' className='mx-auto fs-3'>
                    View More
                </a>
            </div>
        </>
    );
};

export default ImagesCollection;

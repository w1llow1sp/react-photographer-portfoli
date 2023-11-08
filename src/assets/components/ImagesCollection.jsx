import React from 'react';
import ImageCard from './ImageCard';
import IMG1 from '../images/photo-1.jpg'
import IMG2 from '../images/photo-2.jpg'
import IMG3 from '../images/photo-3.jpg'
import IMG4 from '../images/photo-4.jpg'
import IMG5 from '../images/photo-5.jpg'
import IMG6 from '../images/photo-6.jpg'
import IMG7 from '../images/photo-7.jpg'
import IMG8 from '../images/photo-8.jpg'
import IMG9 from '../images/photo-9.jpg'

/*{imagesList.map((imgUrl, index) => {*/
const ImagesCollection = () => {
    const newImageList=[IMG1,IMG2,IMG3,IMG4,IMG5,IMG6,IMG7,IMG8,IMG9]

    return (
        <>
            <ul className='images-collection-container'>
                {newImageList.map((imgUrl, index) => {
                    return (
                        <li key={index}
                            className={
                                index % 2 === 0 ? 'item short' : 'item tall'
                            }
                        >
                            <figure>
                               <ImageCard imgUrl={imgUrl} key={index}/>
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

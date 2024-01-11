import React from 'react'

import PicOne from './images/pic-one.jpg'
import PicTwo from './images/pic-two.jpg'
import PicThree from './images/pic-three.jpg'
import PicFour from './images/pic-four.jpg'
import PicFive from './images/pic-five.jpg'
import PicSix from './images/pic-six.jpg'
import PicSeven from './images/pic-seven.jpg'

const Photos = () => {
    return (
        <div className='page'>
            <h2 className='page-header'>Photos</h2>
            <div>
                <img className='reel-image' src={PicOne} />
                <img className='reel-image' src={PicTwo} />
                <img className='reel-image' src={PicThree} />
                <img className='reel-image' src={PicFour} />
                <img className='reel-image' src={PicFive} />
                <img className='reel-image' src={PicSix} />
                <img className='reel-image' src={PicSeven} />
            </div>
        </div>
    )
}

export default Photos
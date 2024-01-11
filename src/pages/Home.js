import React from 'react'

import HomePic from './images/home-pic.jpg'

const Home = () => {
    return (
        <div className='home page'>
            <h2 className='page-header'>Welcome to my portfolio!</h2>
            <img className='profile-image' src={HomePic} />
        </div>
    )
}

export default Home
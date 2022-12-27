import React from 'react';
import Banner from './../Banner/Banner';
import HomeAllAnnouncement from './../HomeAllAnnouncement/HomeAllAnnouncement';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <HomeAllAnnouncement></HomeAllAnnouncement>
        </div>
    );
};

export default Home;
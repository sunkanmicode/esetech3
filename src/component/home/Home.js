import React from 'react'
import Card from '../../mainCard/Card';
import SideBar from '../sideBar/SideBar'
import './home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="homeItems">
        <SideBar  />
        <Card />
       
      </div>
    </div>
  );
}

export default Home

import React from 'react';
import './sidebar.css'

const SideBar = () => {
  return <div className='sidebar'>
      <h3> filter Name</h3>
      <div className='sideInput'>
          <label className='label'>Name(contains)</label>
          <input type='text' placeholder='search' />
      </div>
      <div>
          <label>Order by</label>
          <select>
              
          </select>
      </div>
  </div>;
};

export default SideBar;

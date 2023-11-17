import React from 'react';
import './LongCard.css';
import {FaLocationDot } from 'react-icons/fa6';
import {FaChevronRight } from 'react-icons/fa';

export default function LongCard({img,location}) {
  return (
    <div className='LongCard'>
      <div className='LongCard-location'><FaLocationDot color='red'/> <span>{location}</span></div>
      <img src={img} alt="" />
      <div className="viewHomes"><span>View Homes</span><FaChevronRight /></div>
    </div>
  )
}

import React from 'react';
import './SmallCard.css';
import {FaLocationDot } from 'react-icons/fa6';
import {FaChevronRight } from 'react-icons/fa';

export default function SamllCard({img,location}) {
  return (
    <div className='SmallCard'>
      <div className='SmallCard-location'><FaLocationDot color='red'/> <span>{location}</span></div>
      <img src={img} alt="" />
      <div className="viewHomes"><span>View Homes</span><FaChevronRight /></div>
    </div>
  )
}

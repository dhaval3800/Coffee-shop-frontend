import React, { useEffect, useState } from 'react';
import { Image, Rate, Button } from 'antd';
import './style.css'
import { HeartFilled, HeartOutlined, StarFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { calculateDistance, getUserLocation } from '../../utils/helper';

const ShopCard = (props) => {
  const { images, ratings, name, _id, address, isLiked } = props.shop
  const { onToggleLike } = props
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  console.log("🚀 ~ file: ShopCard.js:10 ~ ShopCard ~ distance:", distance)

  useEffect(() => {
    getUserLocation(setUserLocation);
  }, []);

  useEffect(() => {
    if (userLocation) {
      const distanceInKm = calculateDistance(userLocation.latitude, userLocation.longitude, address.coordinates.latitude, address.coordinates.longitude);
      setDistance(distanceInKm);
    }
  }, [userLocation]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop/${_id}`);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div class="shop-card" onClick={handleClick}>
        <div style={{ borderRadius: '20px' }}>

          <img src={images[0]} height={'190px'} alt={name} />
        </div>
        <div class="shop-details">
          <h3>{name}</h3>
          <div><StarFilled />{ratings.average}
            <span>{ratings.numberOfRatings}
            </span>
          </div>
        </div>
        <div>
          {distance && <span>{distance.toFixed(2)} km away</span>}
        </div>
      </div>
      <div style={{ position: 'absolute', top: -10, right: -7 }} onClick={()=>onToggleLike(_id)}>
        <div style={{ height: '36px', width: '36px', borderRadius: '50%', background: '#EDF0EF', display: 'flex', justifyContent: 'center', border: '3px solid white' }}>
          {!isLiked ?
            <HeartOutlined height={'14px'} width={'16px'} style={{ fontSize: '15px', color: '#003B40' }} /> :
            <HeartFilled height={'14px'} width={'16px'} style={{ fontSize: '15px', color: '#003B40' }} />
          }
        </div>
      </div>
    </div>
  );
};

export default ShopCard;

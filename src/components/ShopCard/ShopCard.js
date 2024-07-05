import React from 'react';
import './style.css'
import { HeartFilled, HeartOutlined, StarFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const ShopCard = (props) => {
  const { images, ratings, name, _id, distance, isLiked } = props.shop
  const { onToggleLike } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop/${_id}`);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className="shop-card" onClick={handleClick}>
        <div className='shop-img-wrap' >
          <img src={images[0]} height={'190px'} alt={name} />
        </div>
        <div className="shop-details">
          <h4>{name}</h4>
          <div className='rating-wrap'><StarFilled style={{ height: '12px', width: '12px', color: '#FDCB6E' }} />{ratings.average}
            <span>{ratings.numberOfRatings} reviews</span>
          </div>
          {/* {distance && <span className='shop-distance'>{distance.toFixed(2)} km</span>} */}
        </div>
      </div>
      <div style={{ position: 'absolute', top: -10, right: -7 }} onClick={() => onToggleLike(_id)}>
        <div style={{ height: '36px', width: '36px', borderRadius: '50%', background: '#EDF0EF', display: 'flex', justifyContent: 'center', border: '3px solid white' }}>
          {!isLiked ?
            <HeartOutlined style={{ fontSize: '16px', color: '#003B40' }} /> :
            <HeartFilled style={{ fontSize: '16px', color: '#003B40' }} />
          }
        </div>
      </div>
    </div>
  );
};

export default ShopCard;

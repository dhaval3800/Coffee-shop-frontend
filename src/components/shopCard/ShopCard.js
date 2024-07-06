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
    <div className='shop-card-main'>
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
      <div className='wishlist-button-wrap'  onClick={() => onToggleLike(_id)}>
        <div className='wishlist-buttons'>
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

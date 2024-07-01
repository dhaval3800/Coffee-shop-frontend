// src/components/Wishlist.js

import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectShopList } from '../redux/features/shop/shopSlice';
import ShopCard from '../components/ShopCard/ShopCard';

const Wishlist = () => {
  const shopList = useSelector(selectShopList);

  const likedShops = useMemo(() => {
    return shopList.filter(shop => shop.isLiked);
  }, [shopList]); // Memoize when shopList changes

  return (
    <div style={{ margin: '20px' }}>
      <h2>Your Wishlist</h2>
      {likedShops.length > 0 ? (
        likedShops.map(shop => (
          <ShopCard key={shop._id} shop={shop} />
        ))
      ) : (
        <p>No shops in your wishlist.</p>
      )}
    </div>
  );
};

export default Wishlist;

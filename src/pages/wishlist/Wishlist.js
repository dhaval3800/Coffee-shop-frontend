import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectFetching, selectShopList } from '../../redux/features/shop/shopSlice';
import ShopCard from '../../components/shopCard/ShopCard';
import Spinner from '../../components/common/Spinner';
import { fetchShops, toggleShopLike } from '../../redux/features/shop/shopThunks';
import { Col, Row } from 'antd';

const Wishlist = () => {
  const shopList = useSelector(selectShopList);
  const error = useSelector(selectError);
  const fetching = useSelector(selectFetching)
  const dispatch = useDispatch();

  useEffect(() => {
    if (shopList.length === 0) {
      dispatch(fetchShops());
    }
  }, [dispatch, shopList?.length]);

  const handleToggleLike = (shopId) => {
    dispatch(toggleShopLike({ shopId, actionType: 'like' }));
  };


  const likedShops = useMemo(() => {
    return shopList?.filter(shop => shop.isLiked);
  }, [shopList]);

  if (fetching) {
    return <Spinner />
  }

  if (error.status) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div style={{ padding: '24px' }}>
      <h2>Your Wishlist</h2>
      {likedShops.length > 0 ? (
        <Row gutter={[{ xs: 15, sm: 30, md: 40, lg: 45 }, { xs: 15, sm: 30, md: 45, lg: 60, }]}  >
          {
            likedShops.map((shop, index) => (
              <Col key={index} className="gutter-row" span={12}>
                <ShopCard key={shop._id} shop={shop} onToggleLike={handleToggleLike} />
              </Col>
            ))
          }
        </Row>) : (
        <div>No shops in your wishlist.</div>
      )}

    </div>
  );
};

export default Wishlist;

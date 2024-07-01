import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Col, Row } from 'antd';
import UserAvatar from '../components/Avatar/UserAvatar';
import SearchComponent from '../components/search/SearchComponent';
import ShopCard from '../components/ShopCard/ShopCard';
import { selectFetching, selectShopList } from '../redux/features/shop/shopSlice';
import { fetchShops, toggleShopLike } from '../redux/features/shop/shopThunks';

const Home = () => {
  const dispatch = useDispatch();
  const shopList = useSelector(selectShopList);
  console.log("🚀 ~ file: Home.js:13 ~ Home ~ shopList:", shopList)
  const fetching = useSelector(selectFetching);

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  const handleToggleLike = (shopId) => {
    dispatch(toggleShopLike({ shopId, actionType: 'like' }));
  };

  return (
    <>
      <div style={{ margin: '20px' }}>
        <UserAvatar
          user={{
            name: 'Dhaval',
            avatar:
              'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1719736225~exp=1719736825~hmac=242ac6235593dc7670a88327a1eea10901a64205b2060024a78e9893c4111a6f',
          }}
        />
        <p>Find a coffee shop</p>
        <br />
        <p>anywhere</p>
        <SearchComponent />

        {fetching ? (
          <Spin size="large" />
        ) : (
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, }} >
            {shopList?.map((shop, index) => (
              <Col key={index} className="gutter-row" span={12}>
                <ShopCard shop={shop} onToggleLike={handleToggleLike} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  );
};

export default Home;

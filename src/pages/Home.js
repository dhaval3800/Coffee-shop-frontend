import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Col, Row, Dropdown, message } from 'antd';
import UserAvatar from '../components/Avatar/UserAvatar';
import SearchComponent from '../components/search/SearchComponent';
import ShopCard from '../components/ShopCard/ShopCard';
import { selectFetching, selectShopList } from '../redux/features/shop/shopSlice';
import { fetchShops, toggleShopLike } from '../redux/features/shop/shopThunks';
import './home.css'
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { logout } from '../redux/features/auth/authSlice';
import { getStoredAuthToken, removeStoredAuthToken } from '../utils/authToken';

const Home = () => {
  const dispatch = useDispatch();
  const shopList = useSelector(selectShopList);
  console.log("🚀 ~ file: Home.js:18 ~ Home ~ shopList:", shopList)
  const fetching = useSelector(selectFetching);
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState(null);
  const navigate = useNavigate()


  useEffect(() => {
    if (shopList.length > 0) return;
    dispatch(fetchShops());
  }, []);

  const handleLogout =async () => {
    try {
      const response = await api.get('logout')
      dispatch(logout())
      removeStoredAuthToken()
    } catch (error) {
      console.log("🚀 ~ file: Home.js:34 ~ handleLogout ~ error:", error)
      message.error(error)
    }
  }

  const handleToggleLike = (shopId) => {
    dispatch(toggleShopLike({ shopId, actionType: 'like' }));
  };

  const handleSearchChange = (event) => {
    setSearchText(event.toLowerCase());
  };

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const filteredShopList = useMemo(() => {
    if (!shopList.length) return
    let filteredList = [...shopList];
    console.log("🚀 ~ file: Home.js:35 ~ filteredShopList ~ filteredList:", filteredList)

    if (searchText) {
      filteredList = filteredList.filter((shop) => {
        return (
          shop.name.toLowerCase().includes(searchText) ||
          shop.details.toLowerCase().includes(searchText)
        );
      });
    }

    if (filter === 'rating') {
      filteredList = filteredList.sort((a, b) => b.ratings?.average - a?.ratings?.average);
    } else if (filter === 'reviews') {
      filteredList = filteredList.sort((a, b) => b?.ratings?.numberOfRatings - a.ratings?.numberOfRatings);
    }

    return filteredList;
  }, [searchText, shopList, filter]);

  const items = [
    {
      label: <div onClick={() => navigate('/profile')}>User Profile</div>,
      key: '0',
    },
    {
      label: <div onClick={handleLogout} >Logout</div>,
      key: '1',
    },

  ];

  return (
    <>
      <div style={{ margin: '24px' }}>
        <div className="avatar-img" >
          <Dropdown menu={{ items }} trigger={['click']} placement='bottomLeft'>
            <a onClick={(e) => e.preventDefault()}>
              <UserAvatar
                user={{
                  name: 'Dhaval',
                  avatar:
                    'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1719736225~exp=1719736825~hmac=242ac6235593dc7670a88327a1eea10901a64205b2060024a78e9893c4111a6f',
                }}
              />
            </a>
          </Dropdown>
        </div>
        <div className='hero-heading'>
          <h2>Find a coffee shop anywhere</h2>
        </div>
        <SearchComponent value={searchText} onChange={handleSearchChange} onFilterChange={handleFilterChange} />
        <div className='shop-heading'>
          <h3>Featured coffee shops</h3>
        </div>
        {fetching ? (
          <Spin size="large" />
        ) : (
          <Row gutter={[{ xs: 15, sm: 30, md: 40, lg: 45 }, { xs: 15, sm: 30, md: 45, lg: 60, }]}  >
            {filteredShopList?.map((shop, index) => (
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

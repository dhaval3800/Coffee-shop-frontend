import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Col, Row, Dropdown, message } from 'antd';
import UserAvatar from '../../components/avatar/UserAvatar';
import SearchComponent from '../../components/search/SearchComponent';
import ShopCard from '../../components/shopCard/ShopCard';
import { selectError, selectFetching, selectShopList } from '../../redux/features/shop/shopSlice';
import { fetchShops, toggleShopLike } from '../../redux/features/shop/shopThunks';
import './home.css'
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import { logout } from '../../redux/features/auth/authSlice';
import { getStoredAuthToken, removeStoredAuthToken } from '../../utils/authToken';
import Spinner from '../../components/common/Spinner';
import userPrfileIcon from '../../assets/icons/userProfileIcon.png'

const Home = () => {
  const dispatch = useDispatch();
  const shopList = useSelector(selectShopList);
  console.log("🚀 ~ file: Home.js:20 ~ Home ~ shopList:", shopList)
  const fetching = useSelector(selectFetching);
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState(null);
  const navigate = useNavigate()
  const error = useSelector(selectError);
  console.log("🚀 ~ file: Home.js:25 ~ Home ~ error:", error)


  useEffect(() => {
    if (shopList.length > 0) return;
    dispatch(fetchShops());
  }, []);

  const handleLogout = async () => {
    try {
      await api.get('logout')
      dispatch(logout())
      removeStoredAuthToken()
    } catch (error) {
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
    if (!shopList.length) return []
    let filteredList = [...shopList];
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
      <div className='home-page-container'>
        <div className="avatar-img" >
          <Dropdown menu={{ items }} trigger={['click']} placement='bottomLeft'>
            <a onClick={(e) => e.preventDefault()}>
              <UserAvatar
                user={{
                  name: 'Dhaval',
                  avatar: userPrfileIcon
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
          <Spinner />
        ) : error.status ? (
          <div className="error-message">
            <h3>Error occurred while fetching shops. Please try again later.</h3>
          </div>
        ) : filteredShopList.length === 0 ? (
          <div className="no-data-message">
            <h3>No coffee shops found.</h3>
          </div>
        ) : (
          <Row gutter={[{ xs: 15, sm: 30, md: 40, lg: 45 }, { xs: 15, sm: 30, md: 45, lg: 60, }]}  >
            {filteredShopList.map((shop, index) => (
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

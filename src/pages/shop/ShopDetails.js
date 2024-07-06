// src/components/ShopDetails.js
import { CoffeeOutlined, LeftOutlined, StarFilled } from '@ant-design/icons/lib';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectShopDetails, selectFetching, selectError } from '../../redux/features/shopDetails/shopDetailsSlice';
import { fetchShopDetails } from '../../redux/features/shopDetails/shopDetailsThunks';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../../components/product/ProductCard';
import './shopDetails.css'
import Slider from "react-slick";
import categoryIcon2 from '../../assets/icons/categoryIcon2.svg'
import categoryIcon3 from '../../assets/icons/categoryIcon3.svg'
import locationIcon from '../../assets/icons/location-svgrepo-com.svg'
import FooterCheckout from '../../components/footerCheckout/FooterCheckout';
import { selectCartItems } from '../../redux/features/cart/cartSlice';
import Spinner from '../../components/common/Spinner';

const ShopDetails = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const shopDetails = useSelector(selectShopDetails);
    const cartItems = useSelector(selectCartItems);
    console.log("🚀 ~ file: ShopDetails.js:24 ~ ShopDetails ~ cartItems:", cartItems)
    const fetching = useSelector(selectFetching);
    const error = useSelector(selectError);

    const [selectedCategory, setSelectedCategory] = useState('Coffee');

    useEffect(() => {
        dispatch(fetchShopDetails(id));
    }, [dispatch, id]);

    const filteredProducts = useMemo(() => {
        return shopDetails?.products?.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());
    }, [shopDetails, selectedCategory]);

    if (fetching) {
        return <Spinner />
    }

    if (error.status) {
        return <div>Error: {error.message}</div>;
    }

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <div className='shop-detail-main'>
                <div className='image-slider-wrapper'>
                    <Slider {...settings}>
                        {shopDetails?.images.map((image, index) => (
                            <div key={index}>
                                <img className='slider-images' src={image} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                    <Link to="/home" >
                        <div className='home-page-redirect-wrap'>
                            <LeftOutlined />
                        </div>
                    </Link>
                </div>
                <div className={`drawer-container ${cartItems.length > 0 ? 'enabled-footer-checkout': 'disabled-footer-checkout'}`} placement='bottom' >
                    <div className='shop-details-container'>
                        <div style={{ padding: '24px' }}>
                            <div className="shop-details">
                                <div className='shop-title-wrap'>
                                    <h3>{shopDetails?.name}</h3>
                                    <Link to={`/maps/${id}?lat=${shopDetails?.address?.coordinates?.latitude}&lng=${shopDetails?.address?.coordinates?.longitude}`}>
                                        <img src={locationIcon} />
                                    </Link>
                                </div>
                                <div className='shop-rating-wrap'>
                                    <StarFilled style={{ width: '14px', height: '14px' }} /> {shopDetails?.ratings?.average}
                                    <span> {shopDetails?.ratings?.numberOfRatings}</span>
                                </div>
                            </div>
                        </div>
                        <div className='product-icon-container'>
                            <div className={selectedCategory === 'Coffee' ? 'active' : ''} onClick={() => handleCategoryClick('Coffee')}>
                                <div style={{ padding: '22.5px 18px' }}>
                                    <div className='category-icon-wrap'>
                                        <CoffeeOutlined className='nav-icon' />
                                    </div>
                                    <div>Coffee</div>
                                </div>
                            </div>
                            <div className={selectedCategory === 'Drinks' ? 'active' : ''} onClick={() => handleCategoryClick('Drinks')}>
                                <div style={{ padding: '22.5px 18px' }}>
                                    <div className='category-icon-wrap'>
                                        <img src={categoryIcon2} />
                                    </div>
                                    <div>Drinks</div>
                                </div>
                            </div>
                            <div className={selectedCategory === 'Food' ? 'active' : ''} onClick={() => handleCategoryClick('Food')}>
                                <div style={{ padding: '22.5px 18px' }}>
                                    <div className='category-icon-wrap'>
                                        <img src={categoryIcon3} />
                                    </div>
                                    <div>Food</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {filteredProducts?.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
                <div>

                    {cartItems.length > 0 && <FooterCheckout cartItems={cartItems} />}
                </div>
            </div>

        </>
    );
};

export default ShopDetails;

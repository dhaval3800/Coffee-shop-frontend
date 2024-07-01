// src/components/ShopDetails.js
import { CoffeeOutlined, DribbbleCircleFilled, FolderOpenTwoTone, StarFilled } from '@ant-design/icons/lib';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectShopDetails, selectFetching, selectError } from '../redux/features/shopDetails/shopDetailsSlice';
import { fetchShopDetails } from '../redux/features/shopDetails/shopDetailsThunks';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/Product/ProductCard';
import './shopDetails.css'
import { Drawer } from 'antd';
import Slider from "react-slick";


const ShopDetails = () => {
    const { id } = useParams();
    console.log("🚀 ~ file: ShopDetails.js:11 ~ ShopDetails ~ shopId:", id)

    const dispatch = useDispatch();
    const shopDetails = useSelector(selectShopDetails);
    console.log("🚀 ~ file: ShopDetails.js:16 ~ ShopDetails ~ shopDetails:", shopDetails)
    const fetching = useSelector(selectFetching);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchShopDetails(id));
    }, [dispatch]);

    if (fetching) {
        return <div>Loading...</div>;
    }

    if (error.status) {
        return <div>Error: {error.message}</div>;
    }
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
            <div style={{position:'relative'}}>
                <Slider {...settings}>
                    {shopDetails?.images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div height={'55vh'} placement='bottom' >
                <div class='shop-details-container' style={{ padding: '0px 28px' }}>
                    <div style={{ padding: '24px' }}>
                        <div className="shop-details">
                            <h3>{shopDetails.name}</h3>
                            <div>
                                <StarFilled /> {shopDetails.ratings.average}
                                <span> {shopDetails.ratings.numberOfRatings}</span>
                            </div>
                        </div>
                        <div>3.3 miles</div>
                    </div>
                    <div className='product-icon-container'>
                        <div class='active'>
                            <div style={{ padding: '22.5px 18px' }}>
                                <CoffeeOutlined className='nav-icon' />
                                <div>Coffee</div>
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: '22.5px 18px' }}>
                                <DribbbleCircleFilled className='nav-icon' />
                                <div>Drinks</div>
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: '22.5px 18px' }}>
                                <FolderOpenTwoTone className='nav-icon' />
                                <div>Food</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            shopDetails.products.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopDetails;

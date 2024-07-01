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

    return (
        <>
            <div>
                <div>3.3 miles</div>
                <div>3.3 miles</div>
                <div>3.3 miles</div>

            </div>
            <Drawer open={true} height={'75vh'} placement='bottom' >
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
            </Drawer>
        </>
    );
};

export default ShopDetails;

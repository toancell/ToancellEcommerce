import React from 'react';
import {motion} from "framer-motion";
import '../../styles/product-card.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
import {  toast } from 'react-toastify';

const ProductCard = ({item}) => {

    
    const dispatch = useDispatch()
    const addToCart = () =>{
        dispatch(cartActions.addItem({
            id: item.id,
            productName : item.productName,
            price : item.price,
            imgUrl : item.imgUrl,
        })
        );
        toast.success('Product added successfully');
    };
    

    return (
    <Col lg='3'  md='4'>  
            <div  className="product__item">
                <div className="product__img">
                <motion.img src={item.imgUrl} whileHover={{scale: 0.9}} alt="" />
                </div>
            
                <div className="p-2 product__info">
                    <h3 className="product__name "><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                    <span className=' d-block' >{item.catgory}</span>
                </div>
            
                <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                    <span className="price">${item.price}</span>
                    <motion.span whileTap={{scale: 1.2}} onClick={addToCart}><i class="fas fa-plus"></i></motion.span>
                </div>
            </div>

    </Col>
    );
}

export default ProductCard;
